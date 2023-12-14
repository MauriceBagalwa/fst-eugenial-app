<script lang="ts" setup>
import {
  RectangleGroupIcon,
  PhotoIcon,
  PencilSquareIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/vue/24/outline";

const _enterprise = {
  rccm: "YRK93948-39K390",
  email: "enterprise@gmail.com",
  phones: ["+243986735423", "+6478954132"],
};
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div
      class="w-full h-72 px-10 py10 bg-[#eaeff2] flex items-center rounded-md justify-between"
    >
      <div class="w-[20%] h-[90%] justify-center items-center py-5 px-4">
        <div class="flex items-center justify-center border h-full rounded-md">
          <PhotoIcon class="w-8" />
        </div>
      </div>
      <div class="flex flex-col gap-8 w-[60%]">
        <div>
          <p class="font-extrabold text-3xl mb-3">
            Hello to Enterprise Profile
          </p>
          <p class="w-[50%] text-[12.5px] font-light text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
            optio!
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <ClipboardDocumentListIcon class="w-4" />
            <p class="text-[13.5px] font-seminbold">Rccm :</p>
            <p
              class="text-gray-500 text-[14px] cursor-pointer hover:text-gray-900"
            >
              {{ _enterprise.rccm }}
            </p>
          </div>
          <div class="flex gap-2">
            <EnvelopeIcon class="w-4" />
            <p class="text-[13.5px] font-seminbold">Email :</p>
            <p
              class="text-gray-500 text-[14px] cursor-pointer hover:text-gray-900"
            >
              {{ _enterprise.email }}
            </p>
          </div>
          <div class="flex gap-2">
            <PhoneIcon class="w-4" />
            <p class="text-[13.5px] font-seminbold">Phones :</p>
            <p
              v-for="(phone, i) in _enterprise.phones"
              :key="i"
              class="text-gray-500 text-[14px] cursor-pointer hover:text-gray-900"
            >
              {{ phone }}{{ i !== _enterprise.phones.length - 1 ? " , " : "" }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex w-40 flex-col items-end">
        <div
          class="flex border p-2 w-10 cursor-pointer rounded-md border-gray-300 justify-center items-center mr-4"
        >
          <PencilSquareIcon class="w-[98%]" />
        </div>
        <RectangleGroupIcon class="w-full text-gray-400/30" />
      </div>
    </div>

    <div class="flex-1">
      <p></p>
    </div>
  </div>
</template>
