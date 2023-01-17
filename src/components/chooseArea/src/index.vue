<template>
	<div class="chooseArea">
		<el-select v-model="province" class="selectItem" placeholder="请选择省">
			<el-option v-for="item in provinces" :key="item.code" :value="item.code" :label="item.name" />
		</el-select>
		<el-select v-model="city" :disabled="!province" class="selectItem" placeholder="请选择市">
			<el-option v-for="item in cities" :key="item.code" :value="item.code" :label="item.name" />
		</el-select>
		<el-select v-model="area" :disabled="!city" class="selectItem" placeholder="请选择区">
			<el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name" />
		</el-select>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import allAreas from "../lib/pca-code.json"

console.log(allAreas, "allAreas")
let province = ref<string>("")
let city = ref<string>("")
let area = ref<string>("")
const provinces = ref(allAreas)

const cities = computed({
	get() {
		return provinces.value.find(item => item.code === province.value)?.children || []
	},
	set() {
		return provinces.value.find(item => item.code === province.value)?.children || []
	},
})
const areas = computed(() => {
	return cities.value?.find(item => item.code === city.value)?.children || []
})
</script>

<style lang="scss" scoped>
.chooseArea {
	.selectItem {
		& + .selectItem {
			margin-left: 10px;
		}
	}
}
</style>
