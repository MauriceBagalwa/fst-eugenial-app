<script lang="ts" setup>
import {
  HomeIcon,
  UsersIcon,
  PuzzlePieceIcon,
} from "@heroicons/vue/24/outline";

const _menus = [
  {
    name: "Enterprise",
    link: "/app/settings/enterprise-profile",
    icon: HomeIcon,
  },
  {
    name: "Personel",
    link: "/app/settings/personel",
    icon: UsersIcon,
  },
  {
    name: "Services",
    link: "/app/settings/service",
    icon: HomeIcon,
  },
  {
    name: "Others",
    link: "/app/settings/others",
    icon: PuzzlePieceIcon,
  },
];

const _title = "Settings";
</script>

<template>
  <div class="w-full h-full flex pt-5">
    <div class="bg-gray-50 w-52 h-full flex flex-col gap-10">
      <div>
        <h2 class="font-extrabold text-[1.25rem] capitalize">{{ _title }}</h2>
        <p class="text-[11px] text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="border-r h-full flex flex-col gap-7 pr-2">
        <div
          v-for="_menu in _menus"
          class="px-2 py-2 rounded-sm hover:bg-blue-200/50 group"
        >
          <router-link
            :to="_menu.link"
            class="flex gap-3 items-center text-[15px] font-extrabold capitalize text-gray-400 group-hover:text-[#007DFC] group"
          >
            <component
              :is="_menu.icon"
              class="w-6 h-6 text-gray-400 group-hover:text-[#007DFC]"
            />
            {{ _menu.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="h-full flex-1 px-5">
      <RouterView />
    </div>
  </div>
</template>
