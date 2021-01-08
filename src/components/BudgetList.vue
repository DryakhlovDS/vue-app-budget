<template>
  <div class="budget-list-wrap">
    <el-card :header="header"  class="box-card">
      <template v-if="!isEmpty">
        <BudgetListItem  v-for="(item, props) in list"
          :key="props"
          :item="item"
          @deleteItem="deleteItem" />
      </template>
        <el-alert
          v-else
          :title="emptyTitle"
          type="info"
          :closable="false"
          center
          show-icon>
        </el-alert>
    </el-card>
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem.vue';

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: 'Budget List',
    body: 'Some text in body',
    emptyTitle: 'Empty list',
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
  },
};
</script>

<style scoped>
.el-card{
  max-width: 500px;
  margin: auto;
  text-align: center;
}

</style>
