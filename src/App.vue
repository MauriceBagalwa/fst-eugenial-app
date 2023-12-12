<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const route = useRoute();
const layout = ref<string>("default-layout");

watch(
  () => route.meta?.layout,
  (value) => {
    layout.value = (value as string) || "default-layout";
  }
);
</script>

<template>
  <div>
    <component :is="layout" />
  </div>

  <DefaultLayout />
</template>
