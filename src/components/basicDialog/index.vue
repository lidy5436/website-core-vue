<template>
  <el-dialog
      title="弹窗标题"
      draggable
      destroy-on-close
      v-model="dialogVisible">
    <div>弹窗内容</div>
    <template #footer>
      <div>
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </template>
  </el-dialog>

</template>

<script setup>
import {ref} from "vue";

// 弹窗打开标识
const dialogVisible = ref(false);
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
  close
})

</script>

<style scoped>

</style>