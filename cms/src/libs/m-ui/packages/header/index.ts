import MHeader from './src/Header.vue'

MHeader.install = function(Vue: any) {
  Vue.component(MHeader.name, MHeader)
}

export default MHeader
