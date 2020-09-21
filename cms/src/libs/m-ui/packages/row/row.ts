import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'MRow',
  componentName: 'MRow',
  render() {
    return h(
      'div',
      {
        class: 'olk',
      },
      'm-row 组件',
    )
  },
})
