<script setup lang="ts">
const _props = defineProps<{
  modelValue: any;
}>();
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :value="modelValue"
    @input="($event:any)=>emit('update:modelValue', $event.target.value)"
  />
</template>
