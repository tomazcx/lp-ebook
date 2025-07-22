<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div
    class="relative bg-gradient-to-r from-secondary/80 to-accent/80 backdrop-blur-sm border border-primary/30 flex justify-center items-center px-6 py-2 lg:py-3 w-fit text-xs lg:text-sm font-bold rounded-full shadow-lg shadow-secondary/25 group hover:shadow-primary/25 transition-all duration-300"
  >
    <!-- Efeito de brilho -->
    <div
      class="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <!-- Ponto de status -->
    <div class="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>

    <span class="text-center uppercase tracking-wider relative z-10">{{
      text
    }}</span>

    <!-- Partículas decorativas -->
    <div
      class="absolute -top-1 -right-1 w-1 h-1 bg-primary rounded-full opacity-60"
    ></div>
    <div
      class="absolute -bottom-1 -left-1 w-1 h-1 bg-accent rounded-full opacity-60"
    ></div>
  </div>
</template>
