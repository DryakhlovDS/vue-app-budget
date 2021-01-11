<template>
  <div id="App">
    <Form />
    <TotalBalance />
    <BudgetList />
    <ModalDialog v-if="dialogVisible" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BudgetList from './components/BudgetList.vue';
import TotalBalance from './components/TotalBalance.vue';
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
  computed: {
    ...mapGetters('dialog', ['dialogVisible']),
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
