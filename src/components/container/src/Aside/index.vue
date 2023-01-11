<template>
	<el-menu default-active="2" class="el-menu-vertical-demo" :collapse="collapse">
		<el-menu-item index="1">
			<MenuIcon />
			<span>导航一</span>
		</el-menu-item>
		<el-menu-item index="2">
			<MenuIcon />
			<span>导航二</span>
		</el-menu-item>
		<el-menu-item index="3">
			<MenuIcon />
			<span>导航三</span>
		</el-menu-item>
	</el-menu>
</template>

<script setup lang="ts">
const props = defineProps({
	collapse: Boolean,
})
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
