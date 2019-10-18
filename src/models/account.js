export default {
  namespace: 'account',

  state: {
    accountName: "",
    accountPermission: "",
    
    networkChainId: "",
    networkAPIHostName: "",
    networkAPIPort: "",
  },
  effects: {},

  reducers: {
    setAccount(state, { payload: {accountName, accountPermission, networkChainId, networkAPIHostName, networkAPIPort} }) {
      return {
        ...state,
        accountName, 
        accountPermission,
        networkChainId,
        networkAPIHostName,
        networkAPIPort
      };
    },
  },
};
