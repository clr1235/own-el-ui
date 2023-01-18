<template>
	<el-menu class="el-menu-vertical-demo" :collapse="collapse" @select="handleSelect" :default-active="defaultActive">
		<el-menu-item index="1">
			<MenuIcon />
			<span>图标选择</span>
		</el-menu-item>
		<el-menu-item index="2">
			<MenuIcon />
			<span>省市区选择</span>
		</el-menu-item>
		<el-menu-item index="3">
			<MenuIcon />
			<span>导航三</span>
		</el-menu-item>
	</el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue"
const props = defineProps({
	collapse: Boolean,
})
let defaultActive = ref<string>("1")
const handleSelect = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
	defaultActive.value = key
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
