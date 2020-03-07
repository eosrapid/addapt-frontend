import MyEOS from 'my-eos';
import {getNetworkInfoForURL} from './url';


const SCATTER_APP_NAME = "Adappt IDE";
const MAINNET_NETWORK_CONFIG = {
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  host: 'api.eosrapid.com',
  port: 443,
  protocol: 'https'
};
const JUNGLE_NETWORK_CONFIG = {
  chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
  host: 'api.jungle.alohaeos.com',
  port: 443,
  protocol: 'https'
};
const myEos = new MyEOS({
  network: MAINNET_NETWORK_CONFIG,
  scatterAppName: SCATTER_APP_NAME,
  appName: SCATTER_APP_NAME,
});
export async function deployContract({abiString, wasmHex, networkType, networkCfg, networkURL}) {
  const altNetworkCfg = networkURL?(await getNetworkInfoForURL(networkURL)):null;
  const networkCfgGood = (networkCfg||altNetworkCfg)?(networkCfg||altNetworkCfg):(networkType==="jungle"?JUNGLE_NETWORK_CONFIG:MAINNET_NETWORK_CONFIG);
  myEos.init({
    network: networkCfgGood,
    scatterAppName: SCATTER_APP_NAME,
  });
  var abiObject = null;
  try {
    abiObject = JSON.parse(abiString);
  }catch(parseErr){
    console.error("ABI PARSE ERROR: ", parseErr);
    throw new Error("Error parsing abi object!");
  }
  await myEos.login();
  const auth = myEos.getWallet().getAuthorizations()[0];

  const hexAbiStr = myEos.wallet.serializeAbiToHex(abiObject);

  const txObject = {
    actions: [{
      account: 'eosio',
      name: 'setcode',
      authorization: [{
        actor: auth.actor,
        permission: auth.permission,
      }],
      data: {
        account: auth.actor,
        vmtype: 0,
        vmversion: 0,
        code: wasmHex,
      },
    },{
      account: 'eosio',
      name: 'setabi',
      authorization: [{
        actor: auth.actor,
        permission: auth.permission,
      }],
      data: {
        account: auth.actor,
        abi: hexAbiStr,
      },
    }]
  };
  const txResult = await myEos.transact(txObject, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
  return txResult;
}