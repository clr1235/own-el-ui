<template>
	<div class="chooseAreaPage">
		<choose-area @change="change"></choose-area>
	</div>
</template>

<script setup lang="ts">
const change = (val: any) => {
	console.log(val, "省市区")
}
</script>

<style lang="less" scoped></style>
