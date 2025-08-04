import Home from '@/view/home/index.vue'
import {createRouter, createWebHistory} from "vue-router";
import TextScrolling from '@/components/textScrolling/index.vue'
import CircularRotation from '@/components/circularRotation/index.vue'
import StarrySky from '@/components/starrySky/index.vue'


const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/textScrolling',
        component: TextScrolling,
    },
    {
        path: '/circularRotation',
        component: CircularRotation
    },
    {
        path: '/starrySky',
        component: StarrySky
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;