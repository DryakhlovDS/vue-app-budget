<template>
  <div class="list-control">
        <a href="#" class="link-active" :class="classLink" @click.prevent="sortList('All', $event)">
          Show all
        </a>
        <a href="#" :class="classLink" @click.prevent="sortList('Income', $event)">
          Show income
        </a>
        <a href="#" :class="classLink" @click.prevent="sortList('Outcome', $event)">
          Show outcome
        </a>
      </div>
</template>

<script>
export default {
  name: 'ListControl',
  data: () => ({
    classLink: ['el-link', 'el-link--default', 'is-underline'],
  }),
  methods: {
    sortList(value, event) {
      const links = document.querySelectorAll('.el-link');
      links.forEach((link) => link.classList.remove('link-active'));
      event.target.classList.add('link-active');
      this.$emit('sort', value);
    },
  },
};
</script>

<style scoped>
.list-control {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.4rem;
}

.link-active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  border-bottom: 1px solid #606266 !important;
}

.link-active:hover::after {
  border-bottom: 1px solid #409eff !important;
}
</style>
