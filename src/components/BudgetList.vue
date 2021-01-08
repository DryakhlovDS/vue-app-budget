<template>
  <div class="budget-list-wrap">
    <el-card :header="header"  class="box-card">
      <div class="list-control">
        <a href="#"
          class="link-active"
          :class="classLink"
          @click.prevent="sortList('All', $event)"
        >
          Show all
        </a>
        <a href="#"
          :class="classLink"
          @click.prevent="sortList('Income', $event)"
        >
          Show income
        </a>
        <a href="#"
          :class="classLink"
          @click.prevent="sortList('Outcome', $event)"
        >
          Show outcome
        </a>
      </div>
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
      type: Array,
      default: () => ([]),
    },
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty list',
    classLink: ['el-link', 'el-link--default', 'is-underline'],
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },
  methods: {
    sortList(value, event) {
      const links = document.querySelectorAll('.el-link');
      links.forEach((link) => link.classList.remove('link-active'));
      event.target.classList.add('link-active');
      this.$emit('sortList', value);
    },
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

.list-control{
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.4rem;
}

.link-active::after{
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  border-bottom: 1px solid #606266!important;
}

.link-active:hover::after{
  border-bottom: 1px solid #409EFF!important;
}
</style>
