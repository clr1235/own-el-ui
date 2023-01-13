<template>
	<div class="chooseIconPage">
		<ChooseIcon title="选择图标" :visible="visible"> 选择图标 </ChooseIcon>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import ChooseIcon from "../../components/chooseIcon/src/index.vue"

const visible = ref<boolean>(false)
</script>

<style lang="less" scoped></style>
