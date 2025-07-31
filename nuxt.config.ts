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
        default: { id: "1231855614852528", pageView: "#" },
      },
    },
  },
  image: {
    quality: 80,
    format: ["webp", "jpg"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  nitro: {
    prerender: {
      routes: ["/", "/sitemap.xml", "/robots.txt"],
    },
    compressPublicAssets: true,
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
            ctaSecondary: "#82d419",
          },
        },
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-BR",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon.ico",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "dns-prefetch",
          href: "https://www.google-analytics.com",
        },
        {
          rel: "dns-prefetch",
          href: "https://connect.facebook.net",
        },
      ],
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  ssr: true,
  css: ["~/assets/css/main.css"],
  build: {
    extractCSS: true,
    analyze: false,
  },
  optimization: {
    minimize: true,
  },
});
