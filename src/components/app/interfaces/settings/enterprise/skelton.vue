<script lang="ts" setup>
import {
  EnvelopeIcon,
  PhoneIcon,
  ClipboardDocumentListIcon,
  BookmarkIcon,
  LockClosedIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div
      class="w-full h-[26%] bg-gradient-to-r from-[#eaeff2] to-stone-100 flex items-center rounded-md justify-between relative"
    ></div>

    <div class="w-full relative h-full px-10">
      <div
        class="flex items-center justify-center w-32 h-32 rounded-md bg-slate-200 absolute -top-20 animate-pulse"
      ></div>
      <div class="w-full absolute top-20 left-0 py-5 flex flex-col pl-10">
        <div class="flex flex-col gap-16 pr-2">
          <div class="flex justify-between animate-pulse">
            <div class="flex flex-col gap-1 w-[25%]">
              <h2 class="bg-slate-200 h-3 w-[70%]"></h2>
              <p class="bg-slate-200 h-8"></p>
              <div class="bg-slate-200 h-3 w-[30%]"></div>
            </div>
          </div>

          <div class="flex justify-between">
            <div class="flex flex-col gap-12">
              <div class="flex flex-col gap-4">
                <div class="flex gap-2">
                  <BookmarkIcon class="w-4" />
                  <h2 class="font-bold text-[0.9rem]">Enterprise Info</h2>
                </div>
                <div class="">
                  <div class="pl-6 flex flex-col gap-2">
                    <div class="flex gap-2 items-center">
                      <div class="w-[8%] flex justify-between">
                        <ClipboardDocumentListIcon class="w-4" />
                        <p class="text-[13.5px] font-seminbold">Rccm</p>
                      </div>
                      <p class="bg-slate-200 animate-pulse h-3 w-[20%]"></p>
                    </div>
                    <div class="flex gap-2 items-center">
                      <div class="w-[8%] flex justify-between">
                        <EnvelopeIcon class="w-4" />
                        <p class="text-[12px] font-seminbold">Email</p>
                      </div>
                      <p class="bg-slate-200 animate-pulse h-3 w-[20%]"></p>
                    </div>
                    <div class="flex gap-2 items-center">
                      <div class="w-[8%] flex justify-between">
                        <PhoneIcon class="w-[13.5px]" />
                        <p class="text-[12px] font-seminbold">Phones</p>
                      </div>
                      <p class="bg-slate-200 animate-pulse h-3 w-[20%]"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex gap-">
                  <BookmarkIcon class="w-4" />
                  <h2 class="font-bold text-[0.9rem]">Services</h2>
                </div>
                <div class="flex flex-wrap w-[80%] gap-2 pl-6 animate-pulse">
                  <span
                    v-for="item in 6"
                    class="bg-slate-200 px-12 py-2 inline-block rounded-md"
                  >
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-[40%] gap-3">
              <div class="flex gap-2">
                <LockClosedIcon class="w-4" />
                <h2 class="font-bold text-[0.9rem]">Personel</h2>
              </div>

              <p class="text-[12.5px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                ex, obcaecati voluptatem in beatae aspernatur officia possimus
                animi cum consequatur!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
