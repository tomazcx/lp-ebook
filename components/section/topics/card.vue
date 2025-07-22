<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <div
    class="group relative cursor-pointer transform hover:scale-105 transition-all duration-500"
  >
    <!-- Container principal do card -->
    <div
      class="relative bg-gradient-to-br from-backgroundSecondary/90 to-backgroundSecondary/70 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 shadow-2xl shadow-primary/10 group-hover:shadow-primary/25 transition-all duration-500 overflow-hidden h-full"
    >
      <!-- Borda brilhante animada -->
      <div
        class="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"
      ></div>
      <div
        class="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-backgroundSecondary/95 to-backgroundSecondary/85 backdrop-blur-xl"
      ></div>

      <!-- Efeito de ondas no hover -->
      <div
        class="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
      ></div>

      <!-- Elementos decorativos tecnológicos -->
      <div
        class="absolute top-3 right-3 text-accent/20 font-mono text-[10px] animate-typing"
      >
        &lt;skill/&gt;
      </div>

      <div
        class="absolute bottom-3 left-3 flex items-center gap-1 text-primary/20"
      >
        <div class="w-1.5 h-1.5 bg-current rounded-full animate-pulse"></div>
        <div
          class="w-1.5 h-1.5 bg-current rounded-full animate-pulse"
          style="animation-delay: 0.3s"
        ></div>
        <div
          class="w-1.5 h-1.5 bg-current rounded-full animate-pulse"
          style="animation-delay: 0.6s"
        ></div>
      </div>

      <!-- Conteúdo do card -->
      <div
        class="relative z-10 flex flex-col items-center gap-4 lg:gap-6 h-full justify-center"
      >
        <!-- Container do ícone com efeitos -->
        <div
          class="relative group-hover:scale-110 transition-transform duration-500"
        >
          <!-- Aura do ícone -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <!-- Background do ícone -->
          <div
            class="relative p-4 lg:p-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl backdrop-blur-sm border border-accent/30 group-hover:border-accent/50 transition-all duration-500"
          >
            <!-- Brilho interno -->
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <div class="relative z-10">
              <slot />
            </div>
          </div>
        </div>

        <!-- Texto com efeitos tipográficos -->
        <div class="relative text-center">
          <span
            class="text-sm lg:text-lg font-bold text-text/90 leading-relaxed group-hover:text-text transition-colors duration-300 relative z-10"
          >
            {{ text }}
          </span>

          <!-- Sublinhado animado -->
          <div
            class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-full"
          ></div>
        </div>
      </div>

      <!-- Partículas decorativas -->
      <div
        class="absolute -top-1 -right-2 w-2 h-2 bg-accent rounded-full opacity-60 animate-bounce-slow"
      ></div>
      <div
        class="absolute -bottom-1 -left-2 w-2 h-2 bg-primary rounded-full opacity-60 animate-bounce-slow"
        style="animation-delay: 1s"
      ></div>

      <!-- Mini elementos tecnológicos flutuantes -->
      <div
        class="absolute top-1/4 -right-1 w-1 h-1 bg-cta rounded-full animate-ping opacity-50"
      ></div>
      <div
        class="absolute bottom-1/4 -left-1 w-1 h-1 bg-accent rounded-full animate-ping opacity-50"
        style="animation-delay: 0.8s"
      ></div>
    </div>

    <!-- Reflexo externo do card -->
    <div
      class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl scale-105 opacity-0 group-hover:opacity-50 transition-opacity duration-700 -z-10"
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

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes typing {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-typing {
  animation: typing 3s ease-in-out infinite;
}

/* Performance otimizations */
.animate-spin-slow,
.animate-bounce-slow {
  will-change: transform;
}

/* Ajuste fino para responsividade */
@media (max-width: 768px) {
  .group:hover {
    transform: scale(1.02);
  }
}
</style>
