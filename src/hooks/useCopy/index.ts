import { ElMessage } from "element-plus"
export const useCopy = (text: string) => {
	const input = document.createElement("input")
	input.value = text
	document.body.appendChild(input)

	input.select()
	input.setSelectionRange(0, 99999)
	navigator.clipboard.writeText(input.value)
	ElMessage({
		message: "复制成功！",
		type: "success",
		showClose: true,
	})
	document.body.removeChild(input)
}
