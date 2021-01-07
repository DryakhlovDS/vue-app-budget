<template>
  <div class="total-value">Total balance : {{total}}</div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.total-value{
  margin: auto;
  padding: 18px 20px;
  width: 100%;
  max-width: 500px;
  font-size: 26px;
  text-align: right;
}
</style>
