<template>
  <div class="m-table">
    table
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MTable',
})
</script>

<style lang="scss" scoped></style>
