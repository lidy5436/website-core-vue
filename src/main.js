import {createApp} from 'vue'
import '@/assets/css/index.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from "@/router/index.js";
import * as ElementPlusIconVue from '@element-plus/icons-vue'


const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
for (const [key,component] of Object.entries(ElementPlusIconVue)) {
    app.component(key,component)
}

app.use(router)
app.mount('#app')
