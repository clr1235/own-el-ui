import { defineConfig } from "vite"
// 按需导入组件
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
})
