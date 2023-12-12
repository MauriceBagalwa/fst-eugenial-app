<script lang="ts" setup>
import { inject } from "vue";

const _props = defineProps<{
  id: string;
  modelValue?: any;
  required: boolean;
  invalid?: boolean;
  description?: string;
  input_type: string;
  message_error?: string;
}>();

const emit = defineEmits(["update:modelValue"]);
const field = inject("field", _props);

const updateModelValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    :id="field.id"
    :type="field.input_type"
    :required="field.required"
    :value="modelValue"
    @input="updateModelValue($event)"
  
    :class="[
      'w-full p-[9.5px] border border-gray-200 rounded-sm focus:outline-none font-semibold text-gray-900',
      _props.message_error ? 'border-red-400' : 'border-gra-200',
    ]"
  />
  <p v-if="_props.message_error" class="text-red-600 mt-1">
    {{ _props.message_error }}
  </p>
</template>
