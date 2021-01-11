<template>
  <el-card :header="header"  class="box-card">
    <el-form :model="formData"
     :rules="rules"
     ref="addItem"
     label-width="18%"
     label-position="left">
      <el-form-item
        label="Type"
        prop="type"
      >
        <el-select v-model="formData.type">
          <el-option value="Income">Income</el-option>
          <el-option value="Outcome">Outcome</el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="Comment"
        prop="comment"
      >
        <el-input v-model="formData.comment" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="Cash"
        prop="cash"
      >
        <el-input v-model.number="formData.cash" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addItem')">Submit</el-button>
        <el-button @click="resetForm('addItem')">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Form',
  data() {
    function checkValue(rule, value, callback) {
      if (value < 1) {
        return callback(new Error('Please input a number greater then 0'));
      }
      return callback();
    }
    return {
      header: 'Add a new record',
      formData: {
        type: 'Income',
        comment: '',
        cash: 0,
      },
      rules: {
        cash: [
          { required: true, message: 'cash is required' },
          { type: 'number', message: 'cash must be a number' },
          { validator: checkValue, trigger: 'change' },
        ],
        type: [{ required: true, message: 'choose type' }],
        comment: [{ required: true, message: 'Please, add comment', trigger: 'blur' }],
      },
    };
  },
  computed: {
    ...mapGetters('budget', ['budgetLastId']),
  },
  methods: {
    ...mapActions('budget', ['addItemList']),
    submitForm(formName) {
      this.$refs.addItem.validate((valid) => {
        if (valid) {
          this.addItemList({ ...this.formData, lastId: this.budgetLastId });
          this.resetForm(formName);
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.el-card{
  margin: auto;
  max-width: 500px;
  text-align: left;
}
</style>
