<template>
  <section
    class="relative flex flex-col gap-12 lg:gap-16 overflow-hidden py-16 lg:py-24"
  >
    <!-- Background tecnológico avançado -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid de código de fundo -->
      <div class="absolute inset-0 opacity-[0.015]">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="code-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
              />
              <circle cx="30" cy="30" r="1" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#code-grid)" />
        </svg>
      </div>

      <!-- Elementos flutuantes tecnológicos -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Estrutura de dados flutuante -->
        <div
          class="floating-element absolute top-[10%] left-[8%] text-primary/8 font-mono text-xs"
        >
          <div class="code-animation">
            <span class="text-accent/10">{</span><br />
            &nbsp;&nbsp;<span class="text-primary/10">"skills"</span>: [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-cta/10">"HTML"</span
            >,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-cta/10">"CSS"</span
            >,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-cta/10">"JS"</span><br />
            &nbsp;&nbsp;]<br />
            <span class="text-accent/10">}</span>
          </div>
        </div>

        <!-- Cubo de dados 3D -->
        <div class="floating-element absolute top-[20%] right-[12%] w-16 h-16">
          <div class="relative transform rotate-45 animate-spin-slow">
            <div class="w-full h-full border-2 border-accent/20 rounded-lg">
              <div
                class="absolute inset-2 border border-primary/15 rounded-md animate-pulse"
              ></div>
              <div
                class="absolute inset-4 border border-cta/15 rounded-sm animate-pulse"
                style="animation-delay: 0.5s"
              ></div>
            </div>
          </div>
        </div>

        <!-- Tags de tecnologia flutuantes -->
        <div
          class="floating-element absolute bottom-[15%] left-[15%] flex flex-col gap-2 text-[10px] font-mono"
        >
          <div class="text-primary/10 animate-fade-pulse">&lt;html&gt;</div>
          <div
            class="text-accent/10 animate-fade-pulse"
            style="animation-delay: 0.7s"
          >
            &lt;css&gt;
          </div>
          <div
            class="text-cta/10 animate-fade-pulse"
            style="animation-delay: 1.4s"
          >
            &lt;js&gt;
          </div>
        </div>

        <!-- Conectores de rede -->
        <div class="floating-element absolute top-[60%] right-[8%] w-20 h-20">
          <svg
            class="w-full h-full text-primary/8 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            ></path>
          </svg>
        </div>

        <!-- Binário decorativo -->
        <div
          class="floating-element absolute bottom-[25%] right-[25%] text-accent/5 font-mono text-[8px] animate-slide-up"
        >
          01000011 01001111 01000100 01000101
        </div>

        <!-- Função matemática -->
        <div
          class="floating-element absolute top-[45%] left-[5%] text-primary/8 font-mono text-xs animate-typing"
        >
          f(x) = success
        </div>
      </div>

      <!-- Overlay gradiente tecnológico -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary/[0.015] via-transparent to-accent/[0.02]"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
      ></div>
    </div>

    <!-- Conteúdo principal -->
    <div class="flex flex-col gap-8 lg:gap-12 relative z-10">
      <!-- Badge e título com animações -->
      <div class="animate-slide-in-up" style="animation-delay: 0.2s">
        <div class="flex justify-center lg:justify-start">
          <Badge text="TUDO QUE VOCÊ PRECISA" />
        </div>
      </div>

      <div class="animate-slide-in-up" style="animation-delay: 0.4s">
        <Heading>
          <template #title>
            <h2
              class="text-center lg:text-left text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight"
            >
              <span
                class="inline-block animate-text-reveal"
                style="animation-delay: 0.6s"
              >
                Material completo, levando do
              </span>
              <br />
              <span
                class="relative inline-block animate-text-reveal"
                style="animation-delay: 0.8s"
              >
                <span
                  class="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x font-black"
                >
                  absoluto zero
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-lg -z-10 animate-pulse"
                ></div>
              </span>
              <span
                class="inline-block animate-text-reveal"
                style="animation-delay: 1s"
              >
                aos
              </span>
              <br />
              <span
                class="relative inline-block animate-text-reveal"
                style="animation-delay: 1.2s"
              >
                <span
                  class="bg-gradient-to-r from-accent via-cta to-accent bg-clip-text text-transparent animate-gradient-x font-black"
                >
                  primeiros projetos
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-accent/20 to-cta/20 blur-lg -z-10 animate-pulse"
                ></div>
              </span>
              <span
                class="inline-block animate-text-reveal text-xl lg:text-2xl xl:text-3xl"
                style="animation-delay: 1.4s"
              >
                :
              </span>
            </h2>
          </template>
        </Heading>
      </div>
    </div>

    <!-- Cards com animação escalonada -->
    <div class="relative z-10">
      <div class="animate-slide-in-up" style="animation-delay: 0.6s">
        <SectionTopicsMobileCards class="lg:hidden" />
      </div>
      <div class="animate-slide-in-up" style="animation-delay: 0.6s">
        <SectionTopicsDesktopCards class="hidden lg:grid" />
      </div>
    </div>

    <!-- Elementos decorativos de separação -->
    <div
      class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
    ></div>
  </section>
</template>

<style scoped>
/* Animações personalizadas */
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

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes fade-pulse {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.05);
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(15px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 0.05;
  }
}

@keyframes slide-in-up {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes text-reveal {
  0% {
    opacity: 0;

    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes typing {
  0%,
  100% {
    opacity: 0.08;
  }
  50% {
    opacity: 0.15;
  }
}

/* Classes de animação */
.animate-gradient-x {
  animation: gradient-x 4s ease infinite;
}

.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}

.animate-fade-pulse {
  animation: fade-pulse 3s ease-in-out infinite;
}

.animate-slide-up {
  animation: slide-up 2s ease-out infinite;
}

.animate-slide-in-up {
  animation: slide-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-text-reveal {
  animation: text-reveal 0.6s ease-out forwards;
  opacity: 0;
}

.animate-typing {
  animation: typing 4s ease-in-out infinite;
}

/* Efeitos de flutuação para elementos decorativos */
.floating-element {
  animation: float 8s ease-in-out infinite;
}

.floating-element:nth-child(2) {
  animation-delay: -3s;
}

.floating-element:nth-child(3) {
  animation-delay: -6s;
}

.floating-element:nth-child(4) {
  animation-delay: -1s;
}

.floating-element:nth-child(5) {
  animation-delay: -4s;
}

.floating-element:nth-child(6) {
  animation-delay: -7s;
}

.floating-element:nth-child(7) {
  animation-delay: -2s;
}

/* Efeito de digitação animada para código */
.code-animation span {
  opacity: 0;
  animation: text-reveal 0.1s ease-out forwards;
}

.code-animation span:nth-child(1) {
  animation-delay: 0s;
}
.code-animation span:nth-child(2) {
  animation-delay: 0.2s;
}
.code-animation span:nth-child(3) {
  animation-delay: 0.4s;
}
.code-animation span:nth-child(4) {
  animation-delay: 0.6s;
}
.code-animation span:nth-child(5) {
  animation-delay: 0.8s;
}
.code-animation span:nth-child(6) {
  animation-delay: 1s;
}
.code-animation span:nth-child(7) {
  animation-delay: 1.2s;
}
.code-animation span:nth-child(8) {
  animation-delay: 1.4s;
}

/* Responsividade */
@media (max-width: 768px) {
  .floating-element {
    transform: scale(0.8);
  }
}

/* Performance otimizations */
.animate-spin-slow,
.floating-element {
  will-change: transform;
}

.animate-gradient-x {
  will-change: background-position;
}
</style>
