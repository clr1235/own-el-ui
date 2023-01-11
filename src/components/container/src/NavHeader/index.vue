<template>
	<span @click="toggle">
		<FoldIcon v-if="collapse" />
		<ExpandIcon v-else />
	</span>
</template>

<script setup lang="ts">
const props = defineProps({
	collapse: Boolean,
})
const emits = defineEmits<{
	(e: "update:collapse", value: boolean): void
}>()
const toggle = () => {
	emits("update:collapse", !props.collapse)
}
console.log(123)
</script>

<style lang="less" scoped></style>
