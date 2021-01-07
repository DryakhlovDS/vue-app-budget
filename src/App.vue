<template>
  <div id="App">
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="list" @deleteItem="onDeleteElement" />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList.vue';
import TotalBalance from '@/components/TotalBalance.vue';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
  },
  data: () => ({
    list: {
      1: {
        type: 'income',
        value: 100,
        comment: 'Income comment',
        id: 1,
      },
      2: {
        type: 'income',
        value: -75,
        comment: 'Income comment',
        id: 2,
      },
      3: {
        type: 'income',
        value: 200,
        comment: 'Income comment',
        id: 3,
      },
    },
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0);
    },
  },
  methods: {
    onDeleteElement(id) {
      this.$delete(this.list, id);
    },
  },
};
</script>

<style>
*{
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
