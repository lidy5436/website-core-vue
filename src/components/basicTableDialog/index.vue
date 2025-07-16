<template>
  <el-dialog
      title="表格弹窗"
      width="75%"
      draggable
      append-to-body
      destroy-on-close
      v-model="dialogVisible">
    <div>
      <!-- 搜索条件 -->
      <div class="header-wrapper">
        <el-form :model="searchQuery">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item prop="code" label="编号">
                <el-input v-model="searchQuery.code" clearable placeholder=""/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item prop="name" label="姓名">
                <el-input v-model="searchQuery.name" clearable placeholder=""/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item prop="age" label="年龄">
                <el-input v-model="searchQuery.age" clearable placeholder=""/>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-button @click="handleReset">重置</el-button>
              <el-button type="primary" @click="handleSearch">搜索</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <!-- 表格内容 -->
      <div class="main-wrapper">
        <el-table :data="dataList" border max-height="640">
          <el-table-column prop="code" label="编号" align="center"/>
          <el-table-column prop="name" label="姓名" align="center"/>
          <el-table-column prop="age" label="年龄" align="center"/>
          <el-table-column prop="address" label="地址" align="center"/>
        </el-table>

        <!-- 分页 -->
        <div class="main-pagination-wrapper">
          <el-pagination
              background
              layout="total, sizes, prev, pager, next, jumper"
              v-model:page-size="page.pageSize"
              v-model:current-page="page.currentPage"
              :total="total"
          />
        </div>
      </div>
    </div>

    <!-- 弹窗底部 -->
    <template #footer>
      <div>
        <el-button @click="handleCancel">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import {computed, reactive, ref, onMounted} from 'vue'

// 接收数据（Array of Map/Object）
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  }
})

// 弹窗显示控制
const dialogVisible = ref(false)
// 打开弹窗
const open = () => {
  handleReset()
  dialogVisible.value = true
}
const close = () => (dialogVisible.value = false)
const handleCancel = () => close()

// 搜索条件
const searchQuery = reactive({
  code: undefined,
  name: undefined,
  age: undefined,
  address: undefined
})

// 分页信息
const page = reactive({
  pageSize: 10,
  currentPage: 1
})

// 原始数据副本（computed 避免响应式污染）
const rawData = computed(() => props.data)

// 搜索后的数据
const filteredData = ref([])

// 初始化加载原始数据
onMounted(() => {
  filteredData.value = [...rawData.value]
})

// 搜索方法：模糊匹配 + 多字段
const handleSearch = () => {
  filteredData.value = rawData.value.filter((row) => {
    const matchCode = searchQuery.code
        ? String(row.code || '').includes(searchQuery.code)
        : true
    const matchName = searchQuery.name
        ? String(row.name || '').includes(searchQuery.name)
        : true
    const matchAge = searchQuery.age
        ? String(row.age || '').includes(searchQuery.age)
        : true
    const matchAddress = searchQuery.address
        ? String(row.address || '').includes(searchQuery.address)
        : true
    return matchCode && matchName && matchAge && matchAddress
  })
  page.currentPage = 1
}

// 重置搜索
const handleReset = () => {
  searchQuery.code = undefined
  searchQuery.name = undefined
  searchQuery.age = undefined
  searchQuery.address = undefined
  filteredData.value = [...rawData.value]
  page.currentPage = 1
}

// 当前分页数据
const dataList = computed(() => {
  const start = (page.currentPage - 1) * page.pageSize
  return filteredData.value.slice(start, start + page.pageSize)
})

// 总条数
const total = computed(() => filteredData.value.length)

// 暴露方法供父组件调用
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
