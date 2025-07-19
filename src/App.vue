<template>
  <router-view />
  <el-tooltip
    effect="dark"
    content="返回首页"
    placement="top">
    <el-button class="suspend" type="primary" size="large" :icon="Calendar" circle @click="handleToHome"/>
  </el-tooltip>
</template>

<script setup>
import {Calendar} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";

const router = useRouter()

// 跳转到首页
const handleToHome = () => {
  router.push("/")
}
</script>

<style scoped>
.suspend {
  position: fixed;
  bottom: 48px;
  right: 48px;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: all 0.3s;
}
.suspend:hover {
  transform: scale(1.1);
}
</style>
