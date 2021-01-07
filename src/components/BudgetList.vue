<template>
  <div class="budget-list-wrap">
    <el-card :header="header"  class="box-card">
      <template v-if="!isEmpty">
        <div class="list-item" v-for="(item, props) in list" :key="props">
          <span class="budget-comment">{{item.comment}}</span>
          <span class="budget-value">{{item.value}}</span>
          <el-button type="danger" size="mini" plain @click="deleteItem(item.id)">Delete</el-button>
        </div>
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
export default {
  name: 'BudgetList',
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

.list-item{
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.budget-value{
  margin-left: auto;
  margin-right: 1rem;
  font-weight: bold;
}

</style>
