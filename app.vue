<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import 'primeicons/primeicons.css';

  useHead({
    title: 'App Header',
    htmlAttrs: {
      lang: 'en-US',
      // class: ['dark-mode'],
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  });
</script>

<style>
  body {
    font-family: 'Roboto', sans-serif;
  }
</style>
