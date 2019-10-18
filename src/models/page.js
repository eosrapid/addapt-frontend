
export default {
  namespace: 'page',

  state: {
    editorPageSlug: 'home',
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        dispatch({type: 'loadIfMissing'});
      });
    },
  },

  effects: {
    *loadIfMissing(_, { select, put }) {

    },
  },

  reducers: {
    setEditorPage(state, { payload }) {
      return {
        ...state,
        editorPageSlug: payload,
      };
    },
  },
};
