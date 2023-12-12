<script lang="ts" setup>
const _props = defineProps<{
  for: string;
  required: boolean;
}>();
</script>

<template>
  <label
    class="font-bold text-[15px] text-gray-800 inline-flex"
    :for="_props.for"
  >
    <slot />

    <span v-if="_props.required" class="text-red-600 ml-2">*</span>
  </label>
</template>
