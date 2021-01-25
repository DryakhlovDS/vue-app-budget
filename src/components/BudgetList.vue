<template>
  <div class="budget-list-wrap">
    <el-card :header="header" class="box-card mx-auto">
      <ListControl @sort="setSortType" />
      <template v-if="!isEmpty">
        <BudgetListItem
          v-for="(item, props) in list"
          :key="props"
          :item="item"
        />
      </template>
      <el-alert v-else :title="emptyTitle" type="info" :closable="false" center show-icon>
      </el-alert>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BudgetListItem from './BudgetListItem.vue';
import ListControl from './ListControl.vue';

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
    ListControl,
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty list',
    sortType: 'All',
  }),
  computed: {
    ...mapGetters('budget', ['budgetListArr']),
    list() {
      if (this.sortType === 'All') {
        return this.budgetListArr;
      }
      return this.budgetListArr.filter((item) => item.type === this.sortType);
    },
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },
  methods: {

    setSortType(value) {
      this.sortType = value;
    },
  },
};
</script>

<style scoped>
.mx-auto {
  max-width: 500px;
  margin: auto;
  text-align: center;
}

</style>
