<script lang="ts" setup>
import SideBar from "@/components/app/menus/SideBar.vue";
import TopBar from "@/components/app/menus/TopBar.vue";
</script>

<template>
  <div class="bg-[#f1f1f1]">
    <div class="w-full flex gap-0  min-h-[100svh] py-5 px-10 bg-gray-50">
     <!-- <div class="w-full h-full"> -->
      <SideBar />
      <div class="flex flex-col flex-1 px-2">
        <TopBar />
        <div class="bg-red-200 flex-1"></div>
      </div>
     </div>
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>
