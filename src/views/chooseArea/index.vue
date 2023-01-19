<template>
	<div class="chooseAreaPage">
		<r-choose-area @change="change"></r-choose-area>
	</div>
</template>

<script setup lang="ts">
const change = (val: any) => {
	console.log(val, "省市区")
}
</script>

<style lang="less" scoped></style>
