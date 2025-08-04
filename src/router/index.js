import Home from '@/view/home/index.vue'
import {createRouter, createWebHistory} from "vue-router";
import TextScrolling from '@/components/textScrolling/index.vue'


const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/textScrolling',
        component: TextScrolling,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;