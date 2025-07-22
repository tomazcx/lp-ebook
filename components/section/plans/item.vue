<script setup lang="ts">
defineProps<{
  text: string;
  check: boolean;
}>();
</script>

<template>
  <li
    class="flex items-center gap-4 text-base lg:text-lg font-medium group hover:bg-primary/5 rounded-lg p-2 transition-all duration-300"
  >
    <!-- Ícone com efeito -->
    <div class="relative flex-shrink-0">
      <div
        class="absolute inset-0 bg-cta/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        v-if="check"
      ></div>
      <div
        class="relative bg-cta/10 rounded-full p-1 border border-cta/30"
        v-if="check"
      >
        <PhosphorIconCheck class="text-cta relative z-10" :size="20" />
      </div>
      <PhosphorIconX class="text-red-500" :size="20" v-else />
    </div>

    <!-- Texto com efeito hover -->
    <span
      :class="{
        'line-through text-textSecondary': !check,
        'text-text group-hover:text-primary transition-colors duration-300':
          check,
      }"
      class="leading-relaxed"
    >
      {{ text }}
    </span>

    <!-- Indicador de destaque -->
    <div
      class="w-0 h-0.5 bg-gradient-to-r from-cta to-accent group-hover:w-2 transition-all duration-300 rounded-full ml-auto"
      v-if="check"
    ></div>
  </li>
</template>
