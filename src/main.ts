import { createApp } from "vue"
import ElementPlus from "element-plus"
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
import "dayjs/locale/zh-cn"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

import "element-plus/dist/index.css"
import "./style.css"

import router from "./router"
import App from "./App.vue"

const app = createApp(App)
// 使用element icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(`${key}Icon`, component)
}
// 测试一下
// 注册路由
app.use(router)
// 国际化
app.use(ElementPlus, {
	locale: zhCn,
})

app.mount("#app")
