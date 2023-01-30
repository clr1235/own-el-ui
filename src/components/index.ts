import { App } from "vue"
import ChooseIcon from "./chooseIcon"
import ChooseArea from "./chooseArea"
import Trend from "./trend"
import MsgNotice from "./msgNotice"
import List from "./list"

const components = [ChooseIcon, ChooseArea, Trend, MsgNotice, List]

export default {
	install(app: App) {
		components.forEach((item: any) => {
			app.use(item)
		})
	},
}
