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
import { ref, computed, watch } from "vue"
import allAreas from "../lib/pca-code.json"

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

const emits = defineEmits(["change"])

watch(area, val => {
	if (val) {
		console.log(val, "val")
		const provinceData = {
			code: province.value,
			name: province.value && provinces.value.find(item => item.code === province.value)?.name,
		}
		const cityData = {
			code: city.value,
			name: city.value && cities.value.find(item => item.code === city.value)?.name,
		}
		const areaData = {
			code: area.value,
			name: area.value && areas.value.find(item => item.code === area.value)?.name,
		}
		emits("change", {
			province: provinceData,
			city: cityData,
			area: areaData,
		})
	}
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
