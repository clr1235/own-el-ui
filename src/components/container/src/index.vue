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
	padding: 0;
	height: 60px;
}
</style>
