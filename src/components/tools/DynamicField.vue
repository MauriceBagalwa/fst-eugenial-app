<script lang="ts" setup>
import i from "interface";
import { useField } from "vee-validate";

const { _input } = defineProps<{ _input: i.I_Input }>();

const { value, errorMessage } = useField(() => _input.id);
</script>

<template>
  <div class="flex flex-col gap-3">
    <label class="font-bold text-[15px] text-gray-800 inline-flex">{{
      _input.field_name
    }}</label>

    <input
      v-model="value"
      :placeholder="_input.placeholder"
      :type="_input.type"
      class="w-full p-[10px] border border-gray-200 rounded-sm focus:outline-none font-semibold text-gray-900"
    />
    <span class="text-red-500 text-[12px]">{{ errorMessage }}</span>
  </div>
</template>
