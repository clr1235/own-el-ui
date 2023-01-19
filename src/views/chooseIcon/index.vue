<template>
	<div class="chooseIconPage">
		<r-choose-icon title="选择图标" :visible="visible"> 选择图标 </r-choose-icon>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const visible = ref<boolean>(false)
</script>

<style lang="less" scoped></style>
