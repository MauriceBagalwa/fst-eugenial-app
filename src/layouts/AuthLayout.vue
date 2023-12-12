<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div
    class="bg-[#f1f1f1] w-full flex justify-center items-center min-h-[100svh]"
  >
    <div
      class="w-full flex top-0 bottom-0 justify-center items-center relative lg:w-[80%] 2xl:w-[60%]"
    >
      <div
        class="hidden w-[50%] lg:flex lg:bg-blue-700/90 lg:flex-col lg:h-[85svh] justify-between lg:py-10 lg:items-center 2xl:h-[85svh]"
      >
        <div><p>Up</p></div>

        <div
          class="lg:flex lg:flex-col lg:w-[88%] lg:gap-4 lg:bg-gray-50/5 lg:pl-8 lg:py-4 lg:pr-2 lg:rounded-md xl:w-[77%] 2xl:w-[75%] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out cursor-pointer"
        >
          <p class="text-[12.5px] text-gray-50 leading-relaxed w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            quis ipsum! Totam placeat magni dignissimos qui quibusdam.
          </p>
          <div class="flex gap-4">
            <img
              src="/images/_profile.png"
              alt=""
              class="rounded-full lg:w-8 lg:h-8 xl:w-10 xl:h-10"
            />
            <div>
              <p class="text-[13px] text-gray-300 font-bold">M.Galois Son</p>
              <p class="text-[10px] text-gray-300 font-semibold">Ir. En chef</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full h-full min-h-[90svh] lg:w-[50%] flex justify-center items-center px-3 lg:px-0 lg:bg-gray-50 lg:min-h-[85svh] 2xl:h-[85svh]"
      >
        <div
          class="w-full h-full flex md:justify-center px-4 py-6 md:w-[70%] md:px-8 lg:w-full lg:px-6 xl:px-10 2xl:px-12 bg-gray-50"
        >
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
