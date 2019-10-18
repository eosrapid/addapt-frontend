

const EOS_MAINNET_NODES = [
  {
    network_id: "MAINNET",
    host:'api.eosnewyork.io',
    port:443,
    protocol:'https'
  },
  {
    network_id: "MAINNET",
    host:'nodes.get-scatter.com',
    port:443,
    protocol:'https'
  },
  {
    network_id: "MAINNET",
    host:'api.eoslaomao.com',
    port:443,
    protocol:'https'
  },
];

const EOS_JUNGLE_NODES = [
  {
    network_id: "JUNGLE",
    host:'api.jungle.alohaeos.com:',
    port:443,
    protocol:'https'
  },
  {
    network_id: "JUNGLE",
    host:'jungle2.cryptolions.io',
    port:443,
    protocol:'https'
  },
  {
    network_id: "JUNGLE",
    host:'jungle.eosphere.io',
    port:443,
    protocol:'https'
  },
];

const EOS_NETWORK_CHAIN_IDS = {
  "MAINNET": "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
  "JUNGLE": "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473"
};


export {
  EOS_JUNGLE_NODES,
  EOS_MAINNET_NODES,
  EOS_NETWORK_CHAIN_IDS,
};