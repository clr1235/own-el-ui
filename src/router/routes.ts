import type {RouteRecordRaw} from 'vue-router'
import Container from '../components/container/src/index.vue';

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Container,
        children: [
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
    },
]
