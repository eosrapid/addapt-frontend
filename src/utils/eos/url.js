import axios from 'axios';

function parseHostURL(urlString) {
  const colonSlashSlashIndex = urlString.indexOf("://");
  if(colonSlashSlashIndex===-1) {
    throw new Error("Url missing <http/https>://!");
  }
  const protocol = urlString.substring(0, colonSlashSlashIndex);
  const nextSlashInd = urlString.indexOf("/", colonSlashSlashIndex+3);
  const fullHost = urlString.substring(colonSlashSlashIndex+3,nextSlashInd===-1?urlString.length:nextSlashInd);
  const hostSplit = fullHost.split(":");
  const mainHost = hostSplit[0];
  const port = hostSplit.length===2?parseInt(hostSplit[1], 10):(protocol==="https"?443:80);
  return {
    host: mainHost,
    protocol: protocol,
    port: port,
  };
}

async function getNetworkInfoForURL(url) {
  const urlConfig = parseHostURL(url);
  const infoURL = urlConfig.protocol+"://"+urlConfig.host+":"+urlConfig.port+"/v1/chain/get_info";
  const chainInfo = await axios.get(infoURL).then(r=>r.data);
  return {
    host: urlConfig.host,
    protocol: urlConfig.protocol,
    port: urlConfig.port,
    chainId: chainInfo.chain_id
  }
}
export {
  getNetworkInfoForURL,
  parseHostURL,
}