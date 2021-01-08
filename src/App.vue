<template>
  <div id="App">
    <Form @submitForm="addItemList"/>
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="listSort" @deleteItem="dialog" @sortList="setSortType"/>
    <ModalDialog v-if="centerDialogVisible"
      @confirmDelete="onDeleteElement"
      @closeDialog="closeDialog"
      :text="dialogText"
      :id="dialogId" />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList.vue';
import TotalBalance from '@/components/TotalBalance.vue';
import Form from './components/Form.vue';
import ModalDialog from './components/ModalDialog.vue';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
    ModalDialog,
  },
  data: () => ({
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
        comment: 'Income comment',
        id: 2,
      },
      3: {
        type: 'Income',
        cash: 200,
        comment: 'Income comment',
        id: 3,
      },
    },
    centerDialogVisible: false,
    dialogText: '',
    dialogId: 0,
    sortType: 'All',
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.cash, 0);
    },
    listSort() {
      if (this.sortType === 'All') {
        return Object.values(this.list);
      }
      return Object.values(this.list).filter((item) => item.type === this.sortType);
    },
  },
  methods: {
    setSortType(value) {
      this.sortType = value;
    },
    dialog(id) {
      this.dialogText = this.list[id].comment;
      this.dialogId = id;
      this.centerDialogVisible = true;
    },
    closeDialog() {
      this.centerDialogVisible = false;
    },
    onDeleteElement(id) {
      this.$delete(this.list, id);
      this.closeDialog();
    },
    addItemList(data) {
      const newId = Number(Object.keys(this.list).pop()) + 1 || 1;
      const newListItem = {
        ...data,
        id: newId,
      };
      if (data.type === 'Outcome') {
        newListItem.cash = 0 - data.cash;
      }
      this.$set(this.list, newListItem.id, newListItem);
    },
  },
};
</script>

<style>
*{
  box-sizing: border-box;
}

#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}
</style>
