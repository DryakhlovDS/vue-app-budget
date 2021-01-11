import Vue from 'vue';

const dialogState = {
  namespaced: true,
  state: {
    dialog: {
      dialogVisible: false,
      dialogContent: {
        text: '',
        id: 0,
      },
    },
  },
  getters: {
    dialogVisible: ({ dialog }) => dialog.dialogVisible,
    dialogText: ({ dialog }) => dialog.dialogContent.text,
    dialogId: ({ dialog }) => dialog.dialogContent.id,
  },
  mutations: {
    CHANGE_VISIBLE(state, visible) {
      Vue.set(state.dialog, 'dialogVisible', visible);
    },
    CHANGE_CONTENT(state, content) {
      Vue.set(state.dialog, 'dialogContent', content);
    },
  },
  actions: {
    openDialog({ commit }, content) {
      commit('CHANGE_CONTENT', content);
      commit('CHANGE_VISIBLE', true);
    },
    closeDialog({ commit }) {
      commit('CHANGE_VISIBLE', false);
    },
  },
};

export default dialogState;
