<template>
  <div class="m-swiper-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MSwiperItem',
})
</script>

<style lang="scss" scoped></style>
