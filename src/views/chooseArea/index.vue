<template>
	<div class="chooseAreaPage">
		<chooseArea @change="change"></chooseArea>
	</div>
</template>

<script setup lang="ts">
import chooseArea from "../../components/chooseArea/src/index.vue"

const change = (val: any) => {
	console.log(val, "省市区")
}
</script>

<style lang="less" scoped></style>
