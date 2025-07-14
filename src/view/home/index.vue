<template>
  <div>
    <el-button type="primary" @click="handleOpenDialog">打开弹窗</el-button>
  </div>

  <!-- 基础弹窗 -->
  <basic-dialog ref="basicDialogRef"/>

</template>

<script setup>
import {ref} from "vue";
import BasicDialog from '@/components/basicDialog/index.vue'

// 基础弹窗
const basicDialogRef = ref(undefined)

// 打开弹窗
const handleOpenDialog = () => {
  basicDialogRef.value.open()

}
</script>

<style scoped>

</style>