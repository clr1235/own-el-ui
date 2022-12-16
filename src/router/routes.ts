import type {RouteRecordRaw} from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/home/index.vue"),
        meta: {
            title: 'home page'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import("../views/about/index.vue"),
        meta: {
            title: 'about page'
        }
    },
]
