<template>
  <div class="page-wrapper">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card header="基础弹窗">
          <el-button type="primary" @click="handleOpenDialog">打开弹窗</el-button>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card header="审核弹窗">
          <el-button type="success" @click="handleOpenAuthDialog">打开审核弹窗</el-button>
        </el-card>
      </el-col>
    </el-row>

  </div>

  <!-- 基础弹窗 -->
  <basic-dialog ref="basicDialogRef"/>
  <!-- 审核弹窗 -->
  <basic-auth-dialog ref="basicAuthDialogRef"/>

</template>

<script setup>
import {ref} from "vue";
import BasicDialog from '@/components/basicDialog/index.vue'
import BasicAuthDialog from '@/components/basicAuthDialog/index.vue'


// 基础弹窗
const basicDialogRef = ref(undefined)
// 打开弹窗
const handleOpenDialog = () => {
  basicDialogRef.value.open()
}

// 审核弹窗
const basicAuthDialogRef = ref(undefined);
// 打开审核弹窗
const handleOpenAuthDialog = () => {
  basicAuthDialogRef.value.open()
}
</script>

<style scoped>
.page-wrapper {
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>