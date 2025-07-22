<template>
  <div
    class="relative border-2 border-gradient text-sm lg:text-lg whitespace-nowrap w-fit justify-center bg-gradient-to-r from-secondary/20 to-accent/20 backdrop-blur-sm border-primary/40 py-3 px-6 text-text font-bold flex items-center gap-3 rounded-full shadow-lg shadow-primary/20 group hover:shadow-primary/30 transition-all duration-300"
  >
    <!-- Efeito de brilho dinâmico -->
    <div
      class="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <!-- Indicador animado de status -->
    <div class="relative">
      <div
        class="w-3 h-3 lg:h-4 lg:w-4 bg-cta rounded-full animate-pulse relative z-10"
      ></div>
      <div
        class="absolute inset-0 w-3 h-3 lg:h-4 lg:w-4 bg-cta rounded-full opacity-20 animate-ping"
      ></div>
    </div>

    <!-- Texto principal -->
    <span class="relative z-10 font-black tracking-wider"
      >✨ ACESSO VITALÍCIO</span
    >

    <!-- Segundo indicador -->
    <div class="relative">
      <div
        class="w-3 h-3 lg:h-4 lg:w-4 bg-primary rounded-full animate-pulse relative z-10"
        style="animation-delay: 0.5s"
      ></div>
      <div
        class="absolute inset-0 w-3 h-3 lg:h-4 lg:w-4 bg-primary rounded-full opacity-20 animate-ping"
        style="animation-delay: 0.5s"
      ></div>
    </div>

    <!-- Partículas decorativas -->
    <div
      class="absolute -top-1 -right-2 w-1 h-1 bg-accent rounded-full opacity-70 animate-pulse"
    ></div>
    <div
      class="absolute -bottom-1 -left-2 w-1 h-1 bg-primary rounded-full opacity-70 animate-pulse"
    ></div>
  </div>
</template>
