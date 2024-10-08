// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxtjs/strapi"],
  fonts: {
    google: {
      Montserrat: [400, 500, 600, 700],
    },
  },
  runtimeConfig: {
    STRAPI_URL: process.env.STRAPI_URL || "http://localhost:1337",
  },
});