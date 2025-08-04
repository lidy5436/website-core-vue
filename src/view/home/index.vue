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
      <el-col :span="4">
        <el-card header="表格弹窗">
          <el-button type="primary" @click="handleOpenTableDialog">打开表格弹窗</el-button>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card header="文字跑马灯">
          <el-button type="success" @click="handleToLink('/textScrolling')">文字跑马灯</el-button>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card header="环形旋转">
          <el-button type="primary" @click="handleToLink('/circularRotation')">环形旋转</el-button>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card header="sass星空">
          <el-button type="primary" @click="handleToLink('/starrySky')">sass星空</el-button>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="4">
        <el-card header="视差旋转">
          <el-button type="success" @click="handleToLink('/parallaxRotation')">视差旋转</el-button>
        </el-card>
      </el-col>
    </el-row>

  </div>

  <!-- 基础弹窗 -->
  <basic-dialog ref="basicDialogRef"/>
  <!-- 审核弹窗 -->
  <basic-auth-dialog ref="basicAuthDialogRef" @confirm="handleConfirm"/>
  <!-- 表格弹窗-->
  <basic-table-dialog ref="basicTableDialogRef" />
</template>

<script setup>
import {ref} from "vue";
import BasicDialog from '@/components/basicDialog/index.vue'
import BasicAuthDialog from '@/components/basicAuthDialog/index.vue'
import BasicTableDialog from '@/components/basicTableDialog/index.vue'
import {useRouter} from "vue-router";

const router = useRouter()

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
// 弹窗确认的回调
const handleConfirm = (formData) => {
  console.log('收到审核结果:', formData)
}

// 表格弹窗
const basicTableDialogRef = ref(undefined)
// 打开表格弹窗
const handleOpenTableDialog = () => {
  basicTableDialogRef.value.open()
}

// 跳转到新页面
const handleToLink = (url) => {
  router.push(url)
}
</script>

<style scoped>
.page-wrapper {
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
