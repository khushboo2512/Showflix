<script setup lang="ts">

defineProps<{
  src?: string
  name: string
}>()
</script>

<template>
  <div class="showPoster">
    <img v-if="!!src" :src="src" :alt="name" />
    <div v-else class="showPoster__name">{{ name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.showPoster {
  overflow: hidden;
  text-align: left;
  box-sizing: border-box;
  width: 200px;
  height: 265px;

  &__name {
    background-color: #f7f0f0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
