<script setup lang="ts">
import { ArrowRightIcon, UserPlusIcon } from "@heroicons/vue/24/outline";

const _stat = [
  {
    number: 2,
    title: "service 1",
    service: 8,
  },
  {
    number: 7,
    title: "service 2",
    service: 9,
  },
  {
    number: 1,
    title: "service 3",
    service: 2,
  },
  {
    number: 4,
    title: "service 4",
    service: 10,
  },
];
</script>

<template>
  <div class="w-full h-full flex">
    <div class="flex-1 pr-8 flex flex-col h-full">
      <div class="flex justify-between animate-pulse">
        <div>
          <h2 class="w-36 h-4 mb-1 bg-slate-200 rounded-md"></h2>
          <p class="w-40 h-2 bg-slate-200 rounded-md"></p>
        </div>
        <button
          class="flex items-center justify-center p-3 rounded-md cursor-pointer bg-gray-50 drop-shadow-md opacity-60"
          disabled="true"
        >
          <UserPlusIcon class="w-6" />
        </button>
      </div>

      <div
        class="w-full py-4 grid grid-cols-3 flex-1 place-content-around place-items-center overflow-auto"
      >
        <div
          v-for="i in 6"
          :key="i"
          class="bg-white w-[90%] h-72 rounded-md shadow-sm"
        >
          <div class="flex flex-col items-center py-6 gap-4 animate-pulse">
            <div class="w-24 h-24 bg-slate-200 rounded-full"></div>
            <div class="text-center flex flex-col items-center gap-2">
              <p class="font-bold bg-slate-200 h-3 w-32 rounded-md"></p>
              <p class="bg-slate-200 h-3 w-20 rounded-md"></p>
            </div>

            <button
              class="bg-slate-200 w-32 px-7 py-4 rounded-md mt-3"
              disabled="true"
            ></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Left -->
    <div class="flex flex-col justify-between gap-5 w-[25%]">
      <div class="flex flex-col w-full items-start gap-8">
        <div class="">
          <h2 class="text-xl font-extrabold mb-1">Personel by service</h2>
          <p class="text-[12.5px] text-gray-400 w-[85%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            minima explicabo
          </p>
        </div>
        <div class="gap-8 w-full flex flex-col">
          <template v-for="(item, i) in _stat" :key="i">
            <div
              class="bg-white w-72 flex items-center py-6 rounded-xl pr-2 animate-pulse"
            >
              <div class="w-[20%] px-2">
                <h2 class="h-6 bg-slate-200 pr-2 rounded-md"></h2>
              </div>
              <div class="flex-1 flex flex-col gap-0 pr-2 justify-center">
                <p class="bg-slate-200 h-5"></p>
                <div class="flex justify-between mt-1">
                  <div class="flex gap-2 items-center">
                    <p class="w-32 bg-slate-200 h-3 rounded-md"></p>
                    <p class="w-8 bg-slate-200 h-3 rounded-md"></p>
                  </div>
                </div>
              </div>
              <div
                class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center"
              ></div>
            </div>
          </template>
        </div>
      </div>

      <button
        class="flex items-center gap-2 font-bold cursor-pointer text-gray-400"
        disabled="true"
      >
        See more <ArrowRightIcon class="w-4" />
      </button>
    </div>
  </div>
</template>
