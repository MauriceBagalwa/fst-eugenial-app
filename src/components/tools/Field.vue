<script lang="ts" setup>
import Label from "./Label.vue";
import { computed, provide } from "vue";

const _props = defineProps<{
  id: string;
  label_name: string;
  input_type: string;
  required: boolean;
  placeholder?: string;
  message_error?: string;
}>();

provide(
  "field",
  computed(() => {
    return { ..._props, message_error: _props.message_error };
  })
);
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label
      v-if="_props.label_name"
      :for="_props.id"
      :required="_props.required"
      >{{ _props.label_name }}</Label
    >

    <slot />
  </div>
</template>
