<template>
  <a
    :href="href"
    :target="target"
    class="group relative inline-flex items-center justify-center py-4 lg:py-5 text-center font-bold text-sm lg:text-base px-8 lg:px-10 rounded-xl bg-gradient-to-r from-cta to-ctaSecondary hover:from-ctaSecondary hover:to-cta transition-all duration-500 text-white shadow-lg shadow-cta/30 hover:shadow-cta/50 hover:scale-105 transform cursor-pointer overflow-hidden"
  >
    <!-- Efeito de ondas ao hover -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
    ></div>

    <!-- Conteúdo do botão -->
    <span class="relative z-10 tracking-wide">
      <slot />
    </span>

    <!-- Ícone de seta -->
    <svg
      class="relative z-10 ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      ></path>
    </svg>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: "#",
  },
  target: {
    type: String,
    default: "_self",
  },
});
</script>
