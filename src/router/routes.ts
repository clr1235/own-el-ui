import type { RouteRecordRaw } from "vue-router"
import Container from "../components/container/src/index.vue"

export const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: Container,
		children: [
			{
				path: "/",
				name: "home",
				component: () => import("../views/home/index.vue"),
				meta: {
					title: "home page",
				},
			},
			{
				path: "/chooseIcon",
				name: "chooseIcon",
				component: () => import("../views/chooseIcon/index.vue"),
				meta: {
					title: "chooseIconPage",
				},
			},
			{
				path: "/chooseArea",
				name: "chooseArea",
				component: () => import("../views/chooseArea/index.vue"),
				meta: {
					title: "chooseAreaPage",
				},
			},
		],
	},
]
