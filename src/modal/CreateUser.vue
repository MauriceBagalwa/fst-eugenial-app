<script setup lang="ts">
import {
  UserIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import * as yup from "yup";
import DynamicField from "@/components/tools/DynamicField.vue";
import { ref, computed } from "vue";
import BaseModal from "./BaseModal.vue";
import DropService from "./DropService.vue";
import { base_modal_store } from "@/stores/BaseModel";

const _fields = [
  {
    id: "fullname",
    field_name: "Full name",
    placeholder: "Enter name of user",
    as: "input",
    type: "text",
    rules: "required",
  },
  {
    id: "email",
    field_name: "Email",
    placeholder: "Enter your email",
    as: "input",
    type: "text",
    rules: "required|email",
  },
  // {
  //   id: "password",
  //   field_name: "Password",
  //   placeholder: "Enter user password",
  //   as: "input",
  //   type: "password",
  //   rules: "required",
  // },
];

const _services = ref([
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
]);

const _store = base_modal_store();
const _delete_service = (index: number) => {
  _services.value.splice(index, 1);
};

const _submit = () => {};
</script>

<template>
  <!-- Top -->
  <div class="w-[450px] min-h-[65svh] px-5 pb-8 flex flex-col gap-12">
    <div class="flex gap-4">
      <div
        class="bg-[#F3F3F3] py-4 px-5 rounded-md flex items-center justify-center"
      >
        <UserIcon class="w-6" />
      </div>

      <div>
        <h2 class="text-[1.2rem] font-extrabold">Create user account</h2>
        <p class="text-[12px] text-gray-400 w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          aperiam? Blanditiis.
        </p>
      </div>
    </div>

    <!-- Button -->
    <div class="flex flex-col flex-1 h-full">
      <form @submit="_submit" class="flex flex-col h-[100%] flex-1">
        <div class="flex flex-col flex-1 w-full gap-4">
          <div v-for="(item, i) in _fields" :key="i">
            <DynamicField :_input="item" />
          </div>
          <div class="flex flex-col gap-4">
            <label
              class="inline-flex justify-between font-bold text-[15px] text-gray-800"
              >Service
              <ChevronUpDownIcon
                class="h-5 w-5 text-gray-400 cursor-pointer"
                aria-hidden="true"
                @click="_store.show_drop_modal()"
              />

              <!-- <BaseModal> -->
              <DropService />
              <!-- </BaseModal> -->
            </label>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="(service, i) in _services"
                :key="i"
                class="px-2.5 py-[1.5px] bg-gray-200/95 rounded-md text-sm font-light flex gap-3"
                >{{ service.name }}

                <XMarkIcon
                  class="w-3 cursor-pointer hover:text-red-500"
                  @click="_delete_service(i)"
                />
              </span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none mt-4"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>
