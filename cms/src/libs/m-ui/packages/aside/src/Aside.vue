<template>
  <aside class="m-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MAside',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
})
</script>

<style lang="scss" scoped></style>
