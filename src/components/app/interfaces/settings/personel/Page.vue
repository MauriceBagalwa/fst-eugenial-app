<script setup lang="ts">
import { ArrowRightIcon, UserPlusIcon } from "@heroicons/vue/24/outline";
import db from "@/db.json";
import { base_modal_store } from "@/stores/BaseModel";
import Modal from "@/modal/BaseModal.vue";
import UserAccount from "@/modal/CreateUser.vue";

const _store = base_modal_store();
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

const load_data = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
};
await load_data();
</script>

<template>
  <div class="w-full h-full flex">
    <div class="flex-1 pr-8 flex flex-col h-full">
      <div class="flex justify-between">
        <div>
          <h2 class="text-xl font-extrabold mb-1">07 Personel</h2>
          <p class="text-[11px] text-gray-400">Lorem ipsum dolor sit.</p>
        </div>
        <button
          @click="_store.show_modal()"
          class="flex items-center justify-center p-3 rounded-md cursor-pointer bg-gray-50 drop-shadow-md outline-none"
        >
          <UserPlusIcon class="w-6" />
          <Modal>
            <UserAccount />
          </Modal>
        </button>
      </div>

      <div
        class="w-full py-4 grid grid-cols-3 flex-1 place-content-around place-items-center overflow-auto"
      >
        <div
          v-for="(personel, i) in db.personnels.slice(0, 6)"
          :key="i"
          class="bg-white w-[90%] h-72 rounded-md shadow-sm"
        >
          <div class="flex flex-col items-center py-6 gap-4">
            <div
              class="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center p-1"
            >
              <img
                src="/images/_profile.png"
                alt=""
                class="rounded-full object-contain"
              />
            </div>
            <div class="text-center">
              <p class="font-bold">{{ personel.name }}</p>
              <p class="">{{ personel.role }}</p>
            </div>

            <button
              class="bg-gray-800 px-7 py-2 rounded-md text-gray-50 mt-3 text-[14px] font-bold"
            >
              Show more
            </button>
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
            <div class="bg-white w-72 flex items-center py-6 rounded-xl pr-2">
              <h2
                class="w-[20%] text-center text-[1.5rem] font-extrabold text-gray-700"
              >
                {{ item.number }}
              </h2>
              <div class="flex-1 flex flex-col gap-0 pr-2 justify-center">
                <p class="font-bold text-[14px] capitalize text-gray-700">
                  {{ item.title }}
                </p>
                <div class="flex justify-between">
                  <div class="flex gap-2 items-center text-gray-500">
                    <p class="text-[12px]">Total vente realiser</p>
                    <p class="font-semibold text-[13px]">{{ item.service }}</p>
                  </div>
                </div>
              </div>
              <div
                class="w-12 h-12 rounded-full border-4 border-green-500 flex items-center justify-center"
              >
                <p class="text-[12px] font-bold text-gray-600">12%</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <p class="flex items-center gap-2 font-bold cursor-pointer">
        See more <ArrowRightIcon class="w-4" />
      </p>
    </div>
  </div>
</template>
