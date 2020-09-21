<template>
  <header class="m-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
})
</script>

<style lang="scss" scoped></style>
