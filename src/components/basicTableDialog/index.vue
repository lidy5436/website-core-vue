<template>
  <el-dialog
      title="表格弹窗"
      draggable
      append-to-body
      destroy-on-close
      v-model="dialogVisible">
    <div>
      <div class="main-wrapper">
        <el-table
            :data="dataList"
            border
            max-height="640">
          <el-table-column prop="code" label="编号" align="center" />
          <el-table-column prop="name" label="姓名" align="center" />
          <el-table-column prop="age" label="年龄" align="center" />
          <el-table-column prop="address" label="地址" align="center" />
        </el-table>
        <div class="main-pagination-wrapper">
          <el-pagination
              background
              layout="total, sizes, prev, pager, next, jumper"
              v-model:page-size="page.pageSize"
              v-model:current-page="page.currentPage"
              :total="total" />
        </div>
      </div>
    </div>
    <template #footer>
      <div>
        <el-button @click="handleCancel">取 消</el-button>
      </div>
    </template>
  </el-dialog>

</template>

<script setup>
import {computed, reactive, ref} from "vue";

// 接收掺入参数
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  }
})

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

// 分页参数
const page = reactive({
  pageSize: 10,
  currentPage:1
})
// 动态计算分页数据
const dataList = computed(()=> {
  const start = (page.currentPage -1) * page.pageSize;
  return props.data.slice(start,start+ page.pageSize)
})
// 动态计算总数量
const total = computed(()=> props.data.length);





defineExpose({
  open,
  close
})

</script>

<style scoped>
.main-pagination-wrapper {
  padding: 10px 30px 10px 0;
  display: flex;
  flex-direction: row-reverse;
}
</style>
