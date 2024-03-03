<script setup lang="ts">
import Page from "./Page.vue";
import skelton from "./skelton.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <Page />
    </template>
    <template #fallback>
      <skelton />
    </template>
  </Suspense>
</template>
