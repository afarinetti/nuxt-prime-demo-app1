<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import "primeicons/primeicons.css";

useHead({
  htmlAttrs: {
    class: "dark-mode",
  },
});
</script>

<style>
body {
  font-family: Roboto, sans-serif;
}
</style>
