import type { RouteRecordRaw } from "vue-router"
import Container from "../components/container/src/index.vue"

export const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: Container,
		children: [
			{
				path: "/chooseIcon",
				name: "chooseIcon",
				component: () => import("../views/chooseIcon/index.vue"),
				meta: {
					title: "图标选择",
					icon: "SelectIcon",
				},
			},
			{
				path: "/chooseArea",
				name: "chooseArea",
				component: () => import("../views/chooseArea/index.vue"),
				meta: {
					title: "城市选择",
					icon: "PlaceIcon",
				},
			},
			{
				path: "/trend",
				name: "trend",
				component: () => import("../views/trend/index.vue"),
				meta: {
					title: "趋势选择",
					icon: "PlaceIcon",
				},
			},
			{
				path: "/msgNotice",
				name: "msgNotice",
				component: () => import("../views/msgNotice/index.vue"),
				meta: {
					title: "消息通知",
					icon: "PlaceIcon",
				},
			},
		],
	},
]
