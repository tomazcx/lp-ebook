<script setup lang="ts">
defineProps<{
  profession: string;
  salary: string;
  time: string;
}>();
</script>

<template>
  <div
    class="relative bg-gradient-to-r from-backgroundSecondary/80 to-backgroundSecondary/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 lg:p-8 shadow-xl shadow-primary/10 group hover:shadow-primary/25 transition-all duration-500 overflow-hidden"
  >
    <!-- Efeito de brilho -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
    ></div>

    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-4 right-4 text-cta font-mono text-xs">$</div>
      <div class="absolute bottom-4 left-4 text-accent font-mono text-xs">
        €
      </div>
    </div>

    <div class="grid grid-cols-3 items-center gap-3 lg:gap-8 relative z-10">
      <!-- Informações da profissão -->
      <div class="flex flex-col col-span-1 space-y-2">
        <!-- Nível -->
        <div class="flex items-center gap-1 lg:gap-2">
          <div class="w-2 h-2 bg-cta rounded-full animate-pulse"></div>
          <span
            class="text-base lg:text-2xl font-bold text-text group-hover:text-primary transition-colors duration-300"
          >
            {{ profession }}
          </span>
        </div>

        <!-- Salário com destaque -->
        <span class="text-lg lg:text-2xl font-bold text-cta">
          R${{ salary }}
        </span>

        <!-- Tempo de experiência -->
        <div class="flex items-center gap-1 lg:gap-2">
          <PhosphorIconClock class="text-accent" :size="14" />
          <span class="text-xs lg:text-lg font-medium text-textSecondary">
            {{ time }}
          </span>
        </div>
      </div>

      <!-- Barra de progresso -->
      <div class="col-span-2 relative">
        <slot />
      </div>
    </div>

    <!-- Indicador de nível -->
    <div
      class="absolute top-2 right-2 lg:top-3 lg:right-3 bg-cta/20 border border-cta/30 rounded-full px-1.5 py-0.5 lg:px-2 lg:py-1"
    >
      <span class="text-cta text-xs font-bold">{{
        profession.toLowerCase()
      }}</span>
    </div>

    <!-- Partículas decorativas -->
    <div
      class="absolute top-2 left-2 w-1 h-1 bg-cta rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
    ></div>
    <div
      class="absolute bottom-2 right-2 w-1 h-1 bg-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
    ></div>
  </div>
</template>
