<template>
  <el-dialog
      :visible="true"
      :show-close="false"
      title="Warning"
      width="30%"
      >
      <span>Are you shure to delete record "{{ text }}"</span>
      <div class="dialog-footer">
        <el-button @click="closeDialog(true)">Cancel</el-button>
        <el-button type="primary" @click="confirmDelete(id)">Confirm</el-button>
      </div>
    </el-dialog>
</template>

<script>
export default {
  name: 'ModalDialog',
  props: {
    text: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    closeDialog(close) {
      this.$emit('closeDialog', !close);
    },
    confirmDelete(id) {
      this.$emit('confirmDelete', id);
    },
  },
};
</script>

<style scoped>
.dialog-footer{
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
