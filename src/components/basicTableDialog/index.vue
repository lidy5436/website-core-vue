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
    required: false,
    default: () => [
      {code: "001", name: "张三", age: 21, address: "江苏无锡"},
      {code: "002", name: "李四", age: 22, address: "浙江杭州"},
      {code: "003", name: "王五", age: 23, address: "上海浦东"},
      {code: "004", name: "赵六", age: 24, address: "北京海淀"},
      {code: "005", name: "钱七", age: 25, address: "广东深圳"},
      {code: "006", name: "孙八", age: 26, address: "四川成都"},
      {code: "007", name: "周九", age: 27, address: "重庆江北"},
      {code: "008", name: "吴十", age: 28, address: "山东济南"},
      {code: "009", name: "郑一", age: 29, address: "福建厦门"},
      {code: "010", name: "冯二", age: 30, address: "湖南长沙"},
      {code: "011", name: "陈三", age: 20, address: "湖北武汉"},
      {code: "012", name: "褚四", age: 21, address: "河北石家庄"},
      {code: "013", name: "卫五", age: 22, address: "辽宁大连"},
      {code: "014", name: "蒋六", age: 23, address: "黑龙江哈尔滨"},
      {code: "015", name: "沈七", age: 24, address: "吉林长春"},
      {code: "016", name: "韩八", age: 25, address: "陕西西安"},
      {code: "017", name: "杨九", age: 26, address: "广西南宁"},
      {code: "018", name: "朱十", age: 27, address: "贵州贵阳"},
      {code: "019", name: "秦一", age: 28, address: "云南昆明"},
      {code: "020", name: "尤二", age: 29, address: "内蒙古呼和浩特"},
      {code: "021", name: "许三", age: 30, address: "宁夏银川"},
      {code: "022", name: "何四", age: 20, address: "新疆乌鲁木齐"},
      {code: "023", name: "吕五", age: 21, address: "江西南昌"},
      {code: "024", name: "施六", age: 22, address: "海南海口"},
      {code: "025", name: "张七", age: 23, address: "天津南开"}
    ]
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
