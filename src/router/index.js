import Home from '@/view/home/index.vue'
import basicDraggable from '@/components/basicDraggable/index.vue'
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/draggable',
        component: basicDraggable,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;