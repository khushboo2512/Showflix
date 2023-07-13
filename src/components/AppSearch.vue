<script setup lang="ts">

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="search-container">
    <input type="text" maxlength="20" :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" placeholder="Search" />
  </div>
</template>

<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  justify-content: flex-end;
}

input {
  border: 0;
  padding: 10px 10px;
  width: 40%;
  font-size: 1.1em;
  outline: 0;
  color: black;
  background-color: white;
  border-radius: 20px;
}
</style>