<script lang="ts" setup>
import SideBar from "@/components/app/menus/SideBar.vue";
import TopBar from "@/components/app/menus/TopBar.vue";
</script>

<template>
  <div class="bg-[#f1f1f1]">
    <div class="w-full flex gap-0 min-h-[100svh] py-2 px-10">
      <SideBar />
      <div class="flex flex-col flex-1 bg-gray-50 py-5 border-l">
        <TopBar />
        <div class="flex-1 px-8">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
