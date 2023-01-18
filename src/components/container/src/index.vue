<template>
	<el-container>
		<el-aside width="auto">
			<Aside :collapse="isCollapse"></Aside>
		</el-aside>
		<el-container>
			<el-header>
				<NavHeader v-model:collapse="isCollapse"></NavHeader>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import NavHeader from "./NavHeader/index.vue"
import Aside from "./Aside/index.vue"
import { ref } from "vue"

let isCollapse = ref(false)
</script>

<style scoped>
.el-header {
	padding: 6px 10px;
	height: 60px;
	display: flex;
	align-items: center;
	border-bottom: solid 1px var(--el-menu-border-color);
}
</style>
