import Vue from 'vue';

const budget = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: 'Income',
        cash: 100,
        comment: 'Income comment',
        id: 1,
      },
      2: {
        type: 'Outcome',
        cash: -75,
        comment: 'Outcome comment',
        id: 2,
      },
      3: {
        type: 'Income',
        cash: 200,
        comment: 'Income comment',
        id: 3,
      },
    },
  },
  getters: {
    budgetListArr: ({ list }) => Object.values(list),
    budgetLastId: ({ list }) => Object.keys(list).pop(),
  },
  mutations: {
    ADD_ITEM(state, item) {
      Vue.set(state.list, item.id, item);
    },
    DELETE_ITEM(state, id) {
      Vue.delete(state.list, id);
    },
  },
  actions: {
    addItemList({ commit }, data) {
      const newId = Number(data.lastId) + 1 || 1;
      const newListItem = {
        ...data,
        id: newId,
      };
      if (data.type === 'Outcome') {
        newListItem.cash = 0 - data.cash;
      }
      commit('ADD_ITEM', newListItem);
    },
    deleteItemList({ commit }, id) {
      commit('DELETE_ITEM', id);
    },
  },
};

export default budget;
