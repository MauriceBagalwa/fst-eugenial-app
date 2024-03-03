<script setup lang="ts">
import Page from "./Page.vue";
import Skelton from "./Skelton.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <Page />
    </template>

    <template #fallback>
      <Skelton />
    </template>
  </Suspense>
</template>
