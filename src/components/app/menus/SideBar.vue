<script lang="ts" setup>
import Logo from "@/assets/svg/logo.svg";
import {
  Squares2X2Icon,
  ArrowUpOnSquareIcon,
  UserGroupIcon,
  BanknotesIcon,
  AdjustmentsVerticalIcon,
  ArrowSmallUpIcon,
} from "@heroicons/vue/24/outline";
import i from "interface";

const _name = "bin bagalwa";
const _function = "admnistarteur";

const _menus: Array<i.IMenu> = [
  {
    name: "dashbord",
    link: "/",
    icon: Squares2X2Icon,
  },
  {
    name: "services",
    link: "/",
    icon: ArrowUpOnSquareIcon,
  },
  {
    name: "rdv",
    link: "/",
    icon: UserGroupIcon,
  },
  {
    name: "caisse",
    link: "/",
    icon: BanknotesIcon,
  },
  {
    name: "paramètres",
    link: "/",
    icon: AdjustmentsVerticalIcon,
  },
];
</script>

<template>
  <div
    class="w-64 bg-gray-50 py-2 rounded-l pl-5 flex flex-col justify-between"
  >
    <div class="h-14 flex items-center">
      <Logo class="w-11 object-contain" />
    </div>
    <div class="flex-1 py-5 flex flex-col gap-12 justify-center">
      <div v-for="_menu in _menus">
        <a
          :href="_menu.link"
          class="flex gap-3 items-center text-[15.5px] font-semibold capitalize text-gray-500 hover:text-[#007DFC] group"
        >
          <component
            :is="_menu.icon"
            class="w-6 h-6 text-gray-400 group-hover:text-[#007DFC]"
          />
          {{ _menu.name }}
        </a>
      </div>

      <div
        class="w-56 h-52 bg-white/60 rounded-xl border-[0.1px] border-gray-100 relative z-20 overflow-hidden cursor-pointer"
      >
        <span
          class="absolute w-[150px] h-[150px] bg-yellow-600/75 py-5 rounded-full -bottom-10 -left-12"
        >
        </span>
        <span
          class="absolute w-[180px] h-[180px] bg-[#007efcbd] py-5 rounded-full -left-10 -top-16"
        >
        </span>

        <ArrowSmallUpIcon class="absolute w-8 right-3 top-6 rotate-[34deg]" />

        <span
          class="absolute w-[30px] h-[30px] bg-[#007efcbd] rounded-full top-[65px] right-[35px]"
        >
        </span>

        <div class="absolute w-2/3 left-8 bottom-7 font-bold text-gray-800">
          <p>Open a deposit Get your internet</p>
        </div>
      </div>
    </div>
    <!-- <div class="flex gap-3 cursor-pointer">
      <img src="/images/_profile.png" alt="" class="rounded-full w-11 h-11" />
      <div class="flex flex-col justify-center text-gray-700 -gap-2">
        <p class="text-[12px] font-bold text-gray-800">{{ _name }}</p>
        <p class="text-[10.5px] font-semibold text-gray-400">
          {{ _function }}
        </p>
      </div>
    </div> -->

    <div>
      <h2 class="font-extrabold text-xl mb-3">Eugenial</h2>
      <p class="text-[12px] text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
  </div>
</template>
