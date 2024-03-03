<script setup lang="ts">
import { ArrowRightIcon, UserPlusIcon } from "@heroicons/vue/24/outline";
import db from "@/db.json";
import { base_modal_store } from "@/stores/BaseModel";
import Modal from "@/modal/BaseModal.vue";
import UserAccount from "@/modal/CreateUser.vue";
import { ref } from "vue";

const _store = base_modal_store();
const _input = ref<{
  designation: string;
  description?: string;
}>();

// const load_data = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
// };
// await load_data();
</script>

<template>
  <div class="w-full h-full flex">
    <div class="flex-1 pr-8 flex flex-col h-full">
      <div class="flex justify-between">
        <div>
          <h2 class="text-xl font-extrabold mb-1">09 Services</h2>
          <p class="text-[11px] text-gray-400">Lorem ipsum dolor sit.</p>
        </div>
        <!-- <button
          @click="_store.show_modal()"
          class="flex items-center justify-center p-3 rounded-md cursor-pointer bg-gray-50 drop-shadow-md outline-none"
        >
          +
        </button> -->
      </div>

      <div
        class="w-full py-4 grid grid-cols-3 flex-1 place-content-around place-items-center overflow-auto"
      ></div>
    </div>

    <!-- Left -->
    <div class="flex flex-col justify-between gap-5 w-[25%]">
      <div class="flex flex-col w-full items-start gap-8">
        <div class="">
          <h2 class="text-xl font-extrabold mb-1">Create new service</h2>
          <p class="text-[12.5px] text-gray-400 w-[85%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            minima explicabo
          </p>
        </div>
        <div class="gap-8 w-full flex flex-col">
          <form action="" class="mt-4 flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <label class="font-bold text-[15px] text-gray-800 inline-flex">
                Designation</label
              >
              <input
                :v-model="_input?.designation"
                placeholder="Enter designation"
                type="text"
                class="w-full p-[12px] border border-gray-200 rounded-sm focus:outline-none font-semibold text-gray-900 text-[14px] bg-transparent"
              />
            </div>
            <div class="flex flex-col gap-4">
              <label class="font-bold text-[15px] text-gray-800 inline-flex">
                Description</label
              >
              <textarea
                :v-model="_input?.description"
                placeholder="Enter description of service"
                class="w-full h-44 max-h-44 p-[8px] border border-gray-200 rounded-sm focus:outline-none font-semibold text-gray-900 text-[14px] bg-transparent"
              />
            </div>

            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none mt-4"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
