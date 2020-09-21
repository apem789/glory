import MTable from './src/Table.vue'

MTable.install = function(Vue: any) {
  Vue.component(MTable.name, MTable)
}

export default MTable
