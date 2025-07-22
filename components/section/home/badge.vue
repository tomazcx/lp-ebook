<template>
  <div
    class="relative group cursor-pointer transform hover:scale-102 transition-all duration-500"
  >
    <!-- Container principal do badge -->
    <div
      class="relative border-2 border-transparent bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 backdrop-blur-xl text-sm lg:text-base whitespace-nowrap w-fit justify-center py-3 px-6 text-text font-black flex items-center gap-3 rounded-full shadow-2xl shadow-primary/30 group-hover:shadow-primary/40 transition-all duration-500 overflow-hidden"
    >
      <!-- Borda animada gradiente -->
      <div
        class="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow opacity-60"
      ></div>
      <div
        class="absolute inset-[2px] rounded-full bg-gradient-to-r from-backgroundSecondary/95 to-background/95 backdrop-blur-xl"
      ></div>

      <!-- Efeito de onda ao hover -->
      <div
        class="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
      ></div>

      <!-- Conteúdo do badge -->
      <div class="relative z-10 flex items-center gap-3">
        <!-- Primeiro indicador com efeito 3D -->
        <div class="relative">
          <div
            class="w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-br from-cta to-cta/70 rounded-full relative z-10 shadow-lg shadow-cta/50"
          >
            <div
              class="absolute inset-1 bg-cta/80 rounded-full animate-pulse"
            ></div>
          </div>
          <div
            class="absolute inset-0 w-3 h-3 lg:w-4 lg:h-4 bg-cta rounded-full opacity-30 animate-ping"
          ></div>
          <!-- Reflexo do indicador -->
          <div
            class="absolute top-0.5 left-0.5 w-1 h-1 bg-white/60 rounded-full"
          ></div>
        </div>

        <!-- Texto principal com efeito de brilho -->
        <div class="relative">
          <span
            class="relative z-10 font-black tracking-wider text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text animate-gradient-x"
          >
            ✨ ACESSO VITALÍCIO
          </span>
          <!-- Sombra do texto para melhor legibilidade -->
          <span
            class="absolute inset-0 font-black tracking-wider text-text/20 blur-sm"
          >
            ✨ ACESSO VITALÍCIO
          </span>
        </div>

        <!-- Segundo indicador com delay -->
        <div class="relative">
          <div
            class="w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-br from-primary to-primary/70 rounded-full relative z-10 shadow-lg shadow-primary/50"
            style="animation-delay: 0.5s"
          >
            <div
              class="absolute inset-1 bg-primary/80 rounded-full animate-pulse"
              style="animation-delay: 0.5s"
            ></div>
          </div>
          <div
            class="absolute inset-0 w-3 h-3 lg:w-4 lg:h-4 bg-primary rounded-full opacity-30 animate-ping"
            style="animation-delay: 0.5s"
          ></div>
          <!-- Reflexo do segundo indicador -->
          <div
            class="absolute top-0.5 left-0.5 w-1 h-1 bg-white/60 rounded-full"
          ></div>
        </div>
      </div>

      <!-- Partículas decorativas melhoradas -->
      <div
        class="absolute -top-1 -right-2 w-1.5 h-1.5 bg-accent rounded-full opacity-70 animate-bounce-slow"
      ></div>
      <div
        class="absolute -bottom-1 -left-2 w-1.5 h-1.5 bg-primary rounded-full opacity-70 animate-bounce-slow"
        style="animation-delay: 1s"
      ></div>

      <!-- Partículas extras flutuantes -->
      <div
        class="absolute top-1/2 -right-0.5 w-1 h-1 bg-cta rounded-full animate-ping"
      ></div>
      <div
        class="absolute top-1/4 -left-0.5 w-1 h-1 bg-accent rounded-full animate-ping"
        style="animation-delay: 0.7s"
      ></div>

      <!-- Mini elementos tecnológicos -->
      <div
        class="absolute -top-0.5 left-1/4 text-primary/30 text-[8px] font-mono animate-fade-pulse"
      >
        &lt;/&gt;
      </div>
    </div>

    <!-- Aura externa do badge -->
    <div
      class="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>
  </div>
</template>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes gradient-x {
  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes fade-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.animate-fade-pulse {
  animation: fade-pulse 2s ease-in-out infinite;
}

/* Performance otimizations */
.animate-spin-slow,
.animate-bounce-slow {
  will-change: transform;
}

.animate-gradient-x {
  will-change: background-position;
}

/* Scale mais sutil para evitar overflow */
.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>
