<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div
    class="relative bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-400/40 flex justify-center items-center px-4 py-2 text-xs lg:text-sm font-bold rounded-full shadow-lg shadow-orange-500/20 group hover:shadow-orange-400/30 transition-all duration-300 w-fit"
  >
    <!-- Efeito de brilho -->
    <div
      class="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-orange-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <!-- Ícone de destaque -->
    <div class="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>

    <!-- Texto -->
    <span
      class="text-center uppercase whitespace-nowrap tracking-wider relative z-10 text-orange-100"
    >
      {{ text }}
    </span>

    <!-- Partícula decorativa -->
    <div
      class="absolute -top-1 -right-1 w-1 h-1 bg-yellow-400 rounded-full opacity-70 animate-ping"
    ></div>
  </div>
</template>
