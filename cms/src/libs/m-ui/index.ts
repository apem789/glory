interface MInterface {
  install: (vue: any) => void
}

import MButton from './packages/button'
import MTable from './packages/table'
import MRow from './packages/row'

// 全局引入
const MUI: MInterface = {
  install: Vue => {
    Vue.component(MButton.name, MButton)
    Vue.component(MTable.name, MTable)
    Vue.component(MRow.name, MRow)
  },
}

export default MUI
