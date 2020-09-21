import MButton from './src/Button.vue'

MButton.install = (Vue: any) => {
  Vue.component(MButton.name, MButton)
}

export default MButton
