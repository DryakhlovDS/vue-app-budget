<template>
  <el-dialog
      :visible="true"
      :show-close="false"
      title="Warning"
      width="30%"
      >
      <span>Are you shure to delete record "{{ dialogText }}"</span>
      <div class="dialog-footer">
        <el-button @click="closeDialog">Cancel</el-button>
        <el-button type="primary" @click="confirmDelete(dialogId)">Confirm</el-button>
      </div>
    </el-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ModalDialog',
  computed: {
    ...mapGetters('dialog', ['dialogText', 'dialogId']),
  },
  methods: {
    ...mapActions('dialog', ['closeDialog']),
    ...mapActions('budget', ['deleteItemList']),
    confirmDelete(id) {
      this.deleteItemList(id);
      this.closeDialog();
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
