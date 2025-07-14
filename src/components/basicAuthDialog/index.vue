<template>
  <el-dialog
      title="审核"
      width="30%"
      draggable
      append-to-body
      destroy-on-close
      v-model="dialogVisible">
    <el-form v-model="form">
      <el-form-item prop="status" label="审核状态">
        <el-select v-model="form.status" placeholder="请选择审核状态">
          <el-option
              v-for="(item,index) in options"
              :key="index"
              :label="item.label"
              :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item prop="opinion" label="审核意见">
        <el-input
            v-model="form.opinion"
            type="textarea"
            :rows="4"
            :maxlength="99"
            show-word-limit
            placeholder="请输入审核意见"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <div>
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </template>
  </el-dialog>

</template>

<script setup>
import {reactive, ref} from "vue";

// 弹窗打开标识
const dialogVisible = ref(false);
// 表单内容
const form = reactive({
  id: undefined,
  status: 0,
  opinion: undefined,
});
// 审核下拉框数据
const options = [
  {value: 0, label: '通过'},
  {value: 1, label: '拒绝'},
]

// 打开方法
const open = () => dialogVisible.value = true;
// 关闭方法
const close = () => dialogVisible.value = false;
// 取消方法
const handleCancel = () => {
  close();
}
// 确认方法
const handleSubmit = () => {
  close()
}

defineExpose({
  open,
  close,
  form,
})

</script>

<style scoped>

</style>