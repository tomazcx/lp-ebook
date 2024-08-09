// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-phosphor-icons",
    "@nuxt/image",
    "nuxt-meta-pixel",
  ],
  runtimeConfig: {
    public: {
      metapixel: {
         default: {id: '1231855614852528', pageView: '#'}
      },
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: "#B692E6",
            secondary: "#501997",
            background: "#13091F",
            text: "#E9E1F3",
            accent: "#761FE7",
            backgroundSecondary: "#251737",
            textSecondary: "#ADA9B1",
	    cta: "#609719",
	    ctaSecondary: "#82d419"
          },
        },
      },
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
});
