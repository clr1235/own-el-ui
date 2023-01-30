<template>
	<el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
		<el-tab-pane label="通知" name="notice">
			<div class="item">
				<el-avatar>通知</el-avatar>
				<div class="descBox">
					<p>还是世界顶级款短裤</p>
					<span>觉得会很烦很烦</span>
				</div>
			</div>
			<div class="item">
				<el-avatar>通知2</el-avatar>
				<div class="descBox">
					<p>回家看见啊手机卡卡拉斯科了</p>
					<span>激动激动激动激动</span>
				</div>
			</div>
		</el-tab-pane>
		<el-tab-pane label="关注" name="follow">
			<div class="item">
				<el-avatar>关注</el-avatar>
				<div class="descBox">
					<p>还是世界顶级款短裤</p>
					<span>觉得会很烦很烦</span>
				</div>
			</div>
		</el-tab-pane>
		<el-tab-pane label="待办" name="need">
			<div class="item">
				<el-avatar>待办</el-avatar>
				<div class="descBox">
					<p>还是世界顶级款短裤</p>
					<span>觉得会很烦很烦</span>
				</div>
			</div>
		</el-tab-pane>
	</el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue"

const activeName = ref("notice")

const handleClick = () => {
	console.log(123)
}
</script>

<style lang="scss" scoped>
.tabs {
	:deep .el-tabs__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		.el-tabs__item {
			flex: 1;
			text-align: center;
		}
	}
}
.item {
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	& + .item {
		margin-top: 16px;
	}
	.el-avatar {
		margin-right: 10px;
	}
	.descBox {
		overflow: hidden;
		flex: 1;
	}
}
</style>
