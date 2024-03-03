<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import { base_modal_store } from "@/stores/BaseModel";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const _store = base_modal_store();
const _modal = ref(null);

onClickOutside(_modal, () => _store.hide_modal());
</script>

<template>
  <Teleport to="#app">
    <div
      v-if="_store.is_show"
      class="fixed top-0 left-0 w-full h-full bg-gray-600/20 flex justify-center items-center z-50"
    >
      <div class="bg-white flex flex-col rounded-md shadow-xl p-5" ref="_modal">
        <div class="w-full flex justify-end cursor-pointer">
          <button
            @click="_store.hide_modal()"
            class="ov outiline-none p-2 focus:outline-none hover:bg-gray-100 hover:rounded-md"
          >
            <XMarkIcon class="w-6" />
          </button>
        </div>
        <slot />
      </div>
    </div>
  </Teleport>
</template>
