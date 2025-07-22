<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
    <!-- Card 1 - 14 módulos -->
    <div class="animate-card-reveal" style="animation-delay: 0.1s">
      <SectionTopicsCard text="14 módulos sobre desenvolvimento fullstack">
        <div class="relative">
          <PhosphorIconBook
            class="text-accent transition-all duration-300 group-hover:text-primary"
            :size="56"
          />
          <!-- Efeito de páginas viradas -->
          <div
            class="absolute top-1 left-1 w-12 h-12 border-2 border-accent/30 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>
      </SectionTopicsCard>
    </div>

    <!-- Card 2 - Explicações fáceis -->
    <div class="animate-card-reveal" style="animation-delay: 0.3s">
      <SectionTopicsCard text="Explicações fáceis e intuitivas.">
        <div class="relative">
          <PhosphorIconSmileyWink
            class="text-accent transition-all duration-300 group-hover:text-cta group-hover:scale-110"
            :size="56"
          />
          <!-- Efeito de brilho -->
          <div
            class="absolute inset-0 bg-cta/20 rounded-full scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 blur-md"
          ></div>
        </div>
      </SectionTopicsCard>
    </div>

    <!-- Card 3 - Projetos práticos -->
    <div class="animate-card-reveal" style="animation-delay: 0.5s">
      <SectionTopicsCard text="Projetos práticos para portfólio.">
        <div class="relative">
          <PhosphorIconCodeBlock
            class="text-accent transition-all duration-300 group-hover:text-primary"
            :size="56"
          />
          <!-- Efeito de código animado -->
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          >
            <div class="text-[8px] font-mono text-primary animate-pulse">
              &lt;/&gt;
            </div>
          </div>
        </div>
      </SectionTopicsCard>
    </div>

    <!-- Card 4 - Exercícios -->
    <div class="animate-card-reveal" style="animation-delay: 0.7s">
      <SectionTopicsCard text="Exercícios para você não ficar só na teoria.">
        <div class="relative">
          <PhosphorIconChecks
            class="text-accent transition-all duration-300 group-hover:text-cta"
            :size="56"
          />
          <!-- Efeito de check animado -->
          <div
            class="absolute -top-2 -right-2 w-4 h-4 bg-cta/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"
          ></div>
        </div>
      </SectionTopicsCard>
    </div>
  </div>
</template>

<style scoped>
@keyframes card-reveal {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-card-reveal {
  animation: card-reveal 0.8s ease-out forwards;
  opacity: 0;
}

/* Hover effects para os cards */
.animate-card-reveal:hover {
  transform: translateY(-5px);
}

/* Performance optimization */
.animate-card-reveal {
  will-change: transform, opacity;
}
</style>
