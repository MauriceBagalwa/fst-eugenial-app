<script lang="ts" setup>
import { BellIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex items-center bg-gray-50 rounded-r h-16 justify-between">
    <div class="w-[40%]">
      <p class="mr-5">Hello top bar dddddd</p>
    </div>
    <div class="w-[20%]">
      <div>g</div>
    </div>

    <div class="flex w-[40%] h-full justify-end">
     <div>
      <div class="inline-block bg-red-300 p-2 rounded-[4px]">
        <BellIcon class="h-6 w-6" />
      </div>
     </div>
    </div>
  </div>
</template>
