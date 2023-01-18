<template>
	<span class="menuSwitch" @click="toggle">
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
</script>

<style lang="scss" scoped>
.menuSwitch {
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		margin: 0;
	}
}
</style>
