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

const _menus: Array<i.IMenu> = [
  {
    name: "dashbord",
    link: "/app/dashbord",
    icon: Squares2X2Icon,
  },
  {
    name: "services",
    link: "/app/services",
    icon: ArrowUpOnSquareIcon,
  },
  {
    name: "rdv",
    link: "/app/rdv",
    icon: UserGroupIcon,
  },
  {
    name: "caisse",
    link: "/app/caisse",
    icon: BanknotesIcon,
  },
  {
    name: "paramètres",
    link: "/app/settings",
    icon: AdjustmentsVerticalIcon,
  },
];
</script>

<template>
  <div
    class="w-64 bg-gray-50 rounded-l pl-5 flex flex-col justify-between py-5"
  >
    <div class="h-16 flex items-center">
      <a :href="_menus[0].link">
        <Logo class="w-11 object-contain" />
      </a>
    </div>
    <div class="flex-1 py-5 flex flex-col gap-12 justify-center">
      <div v-for="_menu in _menus">
        <RouterLink
          :to="_menu.link"
          class="flex gap-3 items-center text-[15.5px] font-semibold capitalize text-gray-500 hover:text-[#007DFC] group"
        >
          <component
            :is="_menu.icon"
            class="w-6 h-6 text-gray-400 group-hover:text-[#007DFC]"
          />
          {{ _menu.name }}
        </RouterLink>
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

    <div>
      <h2 class="font-bold text-xl mb-3">Eugenial</h2>
      <p class="text-[12px] text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </div>
</template>
