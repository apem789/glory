<template>
  <button
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
    :class="['button']"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: Number,
      default: 24,
    },
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  setup() {
    // inject
    const handleClick = () => {
      console.log('按钮点击')
    }
    return {
      handleClick,
    }
  },
  directives: {
    type: {},
  },
})
</script>

<style lang="scss" scoped></style>
