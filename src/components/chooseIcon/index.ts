import { App } from "vue"
import ChooseIcon from "./src/index.vue"

export default {
	install(app: App) {
		app.component("r-choose-icon", ChooseIcon)
	},
}
