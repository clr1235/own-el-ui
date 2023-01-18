<template>
	<el-menu class="el-menu-vertical-demo" :collapse="collapse" @select="handleSelect" :default-active="defaultActive">
		<el-menu-item :index="item.path" v-for="item in menu" :key="item.name">
			<component :is="item.meta?.icon"></component>
			<span>{{ item.meta?.title }}</span>
		</el-menu-item>
	</el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { RouteRecordRaw } from "vue-router"
import { useRouter } from "vue-router"

import { routes } from "../../../../router/routes"

const menu = ref<Array<RouteRecordRaw>>(routes[0]?.children || [])
const props = defineProps({
	collapse: Boolean,
})
let defaultActive = ref<string>("/chooseIcon")
const router = useRouter()
const handleSelect = (key: string) => {
	defaultActive.value = key
	router.push({
		path: key,
	})
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
