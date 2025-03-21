import Aura from "@primeuix/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Prime App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  compatibilityDate: "2024-11-01",
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@primevue/nuxt-module",
    "@vueuse/nuxt",
    "@nuxt/fonts",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".dark-mode",
        },
      },
    },
  },
  ssr: false,
});
