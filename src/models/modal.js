
export default {
  namespace: 'modal',

  state: {
    modalOpen: true,
    modalId: 'hider',
    modalData: null,
    modalLoading: false,

  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        dispatch({type: 'loadIfMissing'});
      });
    },
  },

  effects: {
    *openModal({payload: {id, data}}, { select, put }) {
      yield put({
        type: 'setModalOpenState',
        payload: {
          modalOpen: true,
          modalId: id,
          modalData: data
        }
      });
    },
  },

  reducers: {
    setModalOpenState(state, { payload: {modalOpen, modalId, modalData} }) {
      return {
        ...state,

        modalOpen: !!modalOpen,
        modalLoading: false,
        modalId: modalId || "",
        modalData: modalData || null,
      };
    },
    setLoading(state, {payload}){
      return {
        ...state,
        modalLoading: payload,
      }
    },
    closeModal(state, { payload }) {
      return {
        ...state,

        modalOpen: false,
        modalLoading: false,
        modalId: "",
        modalData: null,
      };
    },
  },
};
