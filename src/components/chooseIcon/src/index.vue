<template>
	<el-button @click="handleClick" type="primary">
		<slot></slot>
	</el-button>
	<el-dialog :show-close="false" v-model="dialogVisible">
		<template #header="{ close }">
			<div class="header">
				<h4>{{ title }}</h4>
				<span @click="close">
					<CloseIcon />
				</span>
			</div>
		</template>
		<div class="container">
			<div class="item" v-for="(item, index) in Object.keys(elementIcons)" :key="index">
				<component :is="`${item}Icon`"></component>
				<div class="text">{{ `${item}Icon` }}</div>
			</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue"
import * as elementIcons from "@element-plus/icons-vue"
const props = defineProps<{
	title: string
	visible: boolean
}>()
const dialogVisible = ref<boolean>(props.visible)

const handleClick = () => {
	dialogVisible.value = !props.visible
}
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
}
.container {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	.item {
		width: 25%;
		height: 72px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-bottom: 20px;
		svg {
			width: 2em;
			height: 2em;
		}
		.text {
			flex: 1;
		}
	}
}
</style>
<style>
.el-dialog__header {
	margin-right: 0;
}
.el-dialog__body {
	height: 300px;
	overflow: auto;
}
</style>
