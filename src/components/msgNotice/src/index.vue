<template>
	<el-popover :popper-class="popperClass" placement="bottom" :title="title" :width="popoverWidth" trigger="click">
		<template #reference>
			<el-badge :value="value" class="msgNotice" :max="max" :isDot="isDot">
				<component :is="icon"></component>
			</el-badge>
		</template>
		<slot>
			<r-list></r-list>
		</slot>
	</el-popover>
</template>

<script setup lang="ts">
defineProps({
	icon: {
		type: String,
		default: "BellFilledIcon",
	},
	value: {
		type: [String, Number],
		default: "",
	},
	// 超过之后显示99+ 仅在value是number时起作用
	max: {
		type: Number,
		default: 99,
	},
	isDot: {
		type: Boolean,
		default: false,
	},
	title: {
		type: String,
		default: "",
	},
	popoverWidth: {
		type: [String, Number],
		default: "",
	},
	popperClass: {
		type: String,
		default: "msgListPopover",
	},
})
</script>

<style lang="scss" scoped>
.msgNotice {
	cursor: pointer;
}
.msgListPopover {
	width: auto;
}
</style>
