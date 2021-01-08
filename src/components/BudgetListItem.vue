<template>
  <div class="list-item">
    <i v-if="item.type === 'Income'" class="el-icon-bottom" :class="colorText"></i>
    <i v-else class="el-icon-top" :class="colorText"></i>
    <span class="budget-comment">{{item.comment}}</span>
    <span class="budget-value" :class="colorText">{{item.cash}}</span>
    <el-button type="danger" size="mini" plain @click="deleteItem(item.id)">
      Delete
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'BudgetListItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    colorText() {
      return {
        green: this.item.type === 'Income',
        red: this.item.type === 'Outcome',
      };
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
.list-item{
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.budget-comment {
margin-left: 1rem;
}

.budget-value{
  margin-left: auto;
  margin-right: 1rem;
  font-weight: bold;
}

.green {
  font-size: 1.2rem;
  color: #29a10b;
}

.red {
  font-size: 1.2rem;
  color: brown;
}
</style>
