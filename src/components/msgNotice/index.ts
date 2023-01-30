import { App } from "vue"
import MsgNotice from "./src/index.vue"

export default {
	install(app: App) {
		app.component("r-msg-notice", MsgNotice)
	},
}
