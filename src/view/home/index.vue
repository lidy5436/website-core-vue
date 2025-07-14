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
    </el-row>

  </div>

  <!-- 基础弹窗 -->
  <basic-dialog ref="basicDialogRef"/>
  <!-- 审核弹窗 -->
  <basic-auth-dialog ref="basicAuthDialogRef" @confirm="handleConfirm"/>
  <!-- 表格弹窗-->
  <basic-table-dialog ref="basicTableDialogRef" :data="tableData"/>
</template>

<script setup>
import {ref} from "vue";
import BasicDialog from '@/components/basicDialog/index.vue'
import BasicAuthDialog from '@/components/basicAuthDialog/index.vue'
import BasicTableDialog from '@/components/basicTableDialog/index.vue'


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
// 表格数据
const tableData = [
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
];
</script>

<style scoped>
.page-wrapper {
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
