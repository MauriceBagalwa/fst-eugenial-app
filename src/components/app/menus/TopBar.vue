<script lang="ts" setup>
import {
  BellIcon,
  MagnifyingGlassIcon,
  BookmarkSquareIcon,
} from "@heroicons/vue/24/outline";
const _name = "bin bagalwa";
const _function = "admnistarteur";
</script>

<template>
  <div
    class="flex items-center bg-gray-50 rounded-r h-16 justify-between px-8"
  >
    <div class="w-[40%]">
      <!-- <p class="mr-5">Hello top bar dddddd</p> -->
      <div class="flex  border rounded-md w-72 items-center px-2 ">
        <MagnifyingGlassIcon class="w-5 h-5" />
        <input
          type="text"
          placeholder="Make global search"
          class="p-2 focus:outline-none text-[14px] flex-1 bg-gray-50"
        />
      </div>
    </div>
    <div class="w-[20%]"></div>

    <div class="flex w-[40%] h-full justify-end items-center">
      <div class="flex justify-center items-center gap-3">
        <div class="flex gap-3 cursor-pointer border-r pr-6">
          <img
            src="/images/_profile.png"
            alt=""
            class="rounded-full w-11 h-11"
          />
          <div class="flex flex-col justify-center text-gray-700 -gap-2">
            <p class="text-[12px] font-bold text-gray-800">{{ _name }}</p>
            <p class="text-[10.5px] font-semibold text-gray-400">
              {{ _function }}
            </p>
          </div>
        </div>

        <div class="inline-block p-2 rounded-[4px] cursor-pointer">
          <BookmarkSquareIcon class="h-6 w-6" />
        </div>

        <div class="flex p-2 rounded-[4px] items-center justify-center cursor-pointer">
          <BellIcon class="h-6 w-6" />
        </div>
      </div>
    </div>
  </div>
</template>
