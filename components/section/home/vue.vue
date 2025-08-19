<template>
  <section
    class="relative min-h-screen flex flex-col lg:flex-row gap-12 lg:gap-16 lg:grid lg:grid-cols-2 items-center overflow-hidden px-4 lg:px-0"
    aria-labelledby="main-title"
    role="banner"
    itemscope
    itemtype="https://schema.org/Product"
  >
    <!-- Background animado com partículas tecnológicas -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid tecnológico de fundo -->
      <div class="absolute inset-0 opacity-[0.02]">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <!-- Elementos flutuantes tecnológicos -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Cubo 3D animado -->
        <div
          class="floating-element absolute top-20 left-[10%] w-20 h-20 border-2 border-primary/20 transform rotate-45 animate-spin-slow"
        >
          <div
            class="absolute inset-2 border border-accent/30 animate-pulse"
          ></div>
        </div>

        <!-- Hexágono tecnológico -->
        <div class="floating-element absolute top-[60%] right-[15%] w-16 h-16">
          <svg
            class="w-full h-full text-primary/20 animate-pulse"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.5 3.5L22 12l-4.5 8.5h-11L2 12l4.5-8.5h11z" />
          </svg>
        </div>

        <!-- Código flutuante -->
        <div
          class="floating-element absolute top-[30%] left-[5%] text-accent/10 font-mono text-xs animate-fade-in-out"
        >
          <div class="typing-animation">
            <span>const</span> <span class="text-primary/20">success</span> = ()
            => {<br />
            &nbsp;&nbsp;<span class="text-cta/20">return</span>
            <span class="text-accent/20">'programação'</span>;<br />
            };
          </div>
        </div>

        <!-- Binário animado -->
        <div
          class="floating-element absolute bottom-[20%] left-[20%] text-primary/5 font-mono text-[10px] animate-slide-up"
        >
          01001000 01100101 01101100 01101100 01101111
        </div>

        <!-- Terminal window -->
        <div
          class="floating-element absolute top-[10%] right-[5%] w-32 h-20 bg-background/5 border border-primary/10 rounded-lg p-2"
        >
          <div class="flex gap-1 mb-1">
            <div class="w-2 h-2 bg-red-400/20 rounded-full"></div>
            <div class="w-2 h-2 bg-yellow-400/20 rounded-full"></div>
            <div class="w-2 h-2 bg-green-400/20 rounded-full"></div>
          </div>
          <div class="text-[8px] font-mono text-text/10">
            > npm install success
          </div>
        </div>

        <!-- Setas conectoras -->
        <div
          class="floating-element absolute top-[45%] left-[35%] text-accent/10"
        >
          <svg
            class="w-8 h-8 animate-bounce-slow"
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
        </div>
      </div>

      <!-- Gradient overlay tecnológico -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02]"
      ></div>
    </div>

    <!-- Conteúdo principal -->
    <div class="flex flex-col gap-8 relative z-10">
      <!-- Badge com animação melhorada -->
      <div class="animate-slide-in-left" style="animation-delay: 0.2s">
        <SectionHomeBadge />
      </div>

      <!-- Título principal com efeito typewriter -->
      <div class="animate-slide-in-left" style="animation-delay: 0.4s">
        <Heading>
          <template #title>
            <h1
              id="main-title"
              class="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
              itemprop="name"
            >
              <span
                class="inline-block animate-text-reveal"
                style="animation-delay: 0.6s"
              >
                Aprenda tudo que você
              </span>
              <br />
              <span
                class="inline-block animate-text-reveal"
                style="animation-delay: 0.8s"
              >
                precisa para virar um
              </span>
              <br />
              <span
                class="relative inline-block animate-text-reveal"
                style="animation-delay: 1s"
              >
                <span
                  class="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x"
                >
                  programador profissional
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10 animate-pulse"
                ></div>
              </span>
              <br />
              <span
                class="inline-block animate-text-reveal text-xl lg:text-2xl xl:text-3xl text-text/80"
                style="animation-delay: 1.2s"
              >
                começando do absoluto 0
              </span>
            </h1>
          </template>

          <template #subtitle>
            <div class="animate-slide-in-left" style="animation-delay: 1.4s">
              <p
                class="text-base lg:text-lg xl:text-xl mt-6 leading-relaxed text-text/90"
                itemprop="description"
              >
                Este é o segredo que vai colocar você à frente da concorrência:
                aqui você aprenderá todas as habilidades e tecnologias de
                programação necessárias para se tornar um desenvolvedor
                profissional, conquistando
                <strong class="relative text-primary font-black">
                  <span class="relative z-10"
                    >altos salários enquanto trabalha do conforto da sua
                    casa.</span
                  >
                  <div
                    class="absolute inset-0 bg-primary/10 rounded-lg -skew-x-12 scale-110"
                  ></div>
                </strong>
              </p>
            </div>
          </template>
        </Heading>
      </div>

      <!-- Indicadores de benefícios modernizados -->
      <div
        class="flex flex-wrap gap-4 mt-6 animate-slide-in-left"
        style="animation-delay: 1.6s"
      >
        <div
          class="group flex items-center gap-3 text-sm lg:text-base text-text/80 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 hover:border-primary/40 transition-all duration-300"
        >
          <div class="relative">
            <div class="w-3 h-3 bg-cta rounded-full animate-pulse"></div>
            <div
              class="absolute inset-0 w-3 h-3 bg-cta rounded-full opacity-20 animate-ping"
            ></div>
          </div>
          <span class="font-semibold">14 módulos completos</span>
          <svg
            class="w-4 h-4 text-cta group-hover:rotate-180 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>

        <div
          class="group flex items-center gap-3 text-sm lg:text-base text-text/80 bg-background/20 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 hover:border-accent/40 transition-all duration-300"
        >
          <div class="relative">
            <div
              class="w-3 h-3 bg-primary rounded-full animate-pulse"
              style="animation-delay: 0.5s"
            ></div>
            <div
              class="absolute inset-0 w-3 h-3 bg-primary rounded-full opacity-20 animate-ping"
              style="animation-delay: 0.5s"
            ></div>
          </div>
          <span class="font-semibold">Projetos práticos</span>
          <svg
            class="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>

        <div
          class="group flex items-center gap-3 text-sm lg:text-base text-text/80 bg-background/20 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 hover:border-accent/40 transition-all duration-300"
        >
          <div class="relative">
            <div
              class="w-3 h-3 bg-accent rounded-full animate-pulse"
              style="animation-delay: 1s"
            ></div>
            <div
              class="absolute inset-0 w-3 h-3 bg-accent rounded-full opacity-20 animate-ping"
              style="animation-delay: 1s"
            ></div>
          </div>
          <span class="font-semibold">Acesso vitalício</span>
          <svg
            class="w-4 h-4 text-accent group-hover:rotate-12 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- Card de preço super modernizado -->
    <div class="animate-slide-in-right" style="animation-delay: 0.8s">
      <div
        class="relative bg-gradient-to-br from-backgroundSecondary/90 to-backgroundSecondary/70 backdrop-blur-xl border border-primary/30 rounded-3xl p-6 lg:p-8 shadow-2xl shadow-primary/20 group hover:shadow-primary/30 transition-all duration-500"
      >
        <!-- Efeitos visuais do card -->
        <div
          class="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>

        <!-- Borda brilhante animada -->
        <div
          class="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-20 animate-spin-slow-reverse"
        ></div>
        <div
          class="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-backgroundSecondary/90 to-backgroundSecondary/70 backdrop-blur-xl"
        ></div>

        <!-- Elementos decorativos technológicos -->
        <div
          class="absolute top-4 right-4 text-accent/20 font-mono text-xs animate-typing"
        >
          &lt;purchase/&gt;
        </div>

        <div
          class="absolute bottom-4 left-4 flex items-center gap-1 text-primary/20"
        >
          <div class="w-2 h-2 bg-current rounded-full animate-pulse"></div>
          <div
            class="w-2 h-2 bg-current rounded-full animate-pulse"
            style="animation-delay: 0.2s"
          ></div>
          <div
            class="w-2 h-2 bg-current rounded-full animate-pulse"
            style="animation-delay: 0.4s"
          ></div>
        </div>

        <div class="relative z-10 flex flex-col gap-6">
          <!-- Cabeçalho do card -->
          <div class="flex items-center gap-3">
            <div
              class="p-2 bg-gradient-to-r from-cta/20 to-accent/20 rounded-xl"
            >
              <svg
                class="w-6 h-6 text-cta"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <p class="text-lg font-bold text-cta">Adquira agora por apenas:</p>
          </div>

          <!-- Preço principal -->
          <div class="text-center">
            <div class="text-textSecondary text-base mb-2">Por apenas</div>
            <div class="relative">
              <strong class="text-5xl lg:text-6xl font-black text-cta">
                R$ 37,90
              </strong>
              <!-- Efeito de brilho mais sutil no preço -->
              <div
                class="absolute inset-0 text-5xl lg:text-6xl font-black text-cta/30 blur-lg"
              ></div>
            </div>
            <div class="text-textSecondary text-lg mt-2">ou 5x de R$ 7,58</div>
          </div>

          <!-- Badges de pagamento modernizadas -->
          <div class="flex flex-wrap gap-3 justify-center">
            <div
              class="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-background/50 to-backgroundSecondary/50 border border-primary/20 rounded-xl text-sm font-medium hover:border-primary/40 transition-all duration-300"
            >
              <div class="text-lg">💳</div>
              <span>Cartão</span>
              <svg
                class="w-3 h-3 text-primary/60 group-hover:rotate-180 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div
              class="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-background/50 to-backgroundSecondary/50 border border-accent/20 rounded-xl text-sm font-medium hover:border-accent/40 transition-all duration-300"
            >
              <div class="text-lg">🎫</div>
              <span>Boleto</span>
              <svg
                class="w-3 h-3 text-accent/60 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>

            <div
              class="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-background/50 to-backgroundSecondary/50 border border-cta/20 rounded-xl text-sm font-medium hover:border-cta/40 transition-all duration-300"
            >
              <div class="text-lg">⚡</div>
              <span>Pix</span>
              <div
                class="w-3 h-3 bg-cta rounded-full animate-pulse group-hover:animate-ping"
              ></div>
            </div>
          </div>

          <!-- CTA principal centralizado -->
          <div class="mt-4 flex justify-center">
            <Cta
              href="#plans"
              aria-label="Comprar agora o e-book de Programação Completo"
            >
              COMPRAR AGORA
            </Cta>
          </div>

          <!-- Garantia/segurança -->
          <div
            class="flex items-center justify-center gap-2 text-sm text-text/60 mt-2"
          >
            <svg
              class="w-4 h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Pagamento 100% seguro</span>
          </div>
        </div>
      </div>
    </div>
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

@keyframes spin-slow-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes fade-in-out {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 0.1;
  }
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
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
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
}

/* Classes de animação */
.animate-gradient-x {
  animation: gradient-x 4s ease infinite;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin-slow-reverse 12s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-fade-in-out {
  animation: fade-in-out 4s ease-in-out infinite;
}

.animate-slide-up {
  animation: slide-up 2s ease-out infinite;
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out forwards;
  opacity: 0;
}

.animate-text-reveal {
  animation: text-reveal 0.6s ease-out forwards;
  opacity: 0;
}

.animate-typing {
  animation: typing 2s ease-in-out infinite;
}

/* Efeitos de flutuação para elementos decorativos */
.floating-element {
  animation: float 6s ease-in-out infinite;
}

.floating-element:nth-child(2) {
  animation-delay: -2s;
}

.floating-element:nth-child(3) {
  animation-delay: -4s;
}

.floating-element:nth-child(4) {
  animation-delay: -1s;
}

.floating-element:nth-child(5) {
  animation-delay: -3s;
}

.floating-element:nth-child(6) {
  animation-delay: -5s;
}

/* Efeito de digitação animada */
.typing-animation span {
  opacity: 0;
  animation: text-reveal 0.1s ease-out forwards;
}

.typing-animation span:nth-child(1) {
  animation-delay: 0s;
}
.typing-animation span:nth-child(2) {
  animation-delay: 0.1s;
}
.typing-animation span:nth-child(3) {
  animation-delay: 0.2s;
}
.typing-animation span:nth-child(4) {
  animation-delay: 0.3s;
}
.typing-animation span:nth-child(5) {
  animation-delay: 0.4s;
}
.typing-animation span:nth-child(6) {
  animation-delay: 0.5s;
}

/* Responsividade melhorada */
@media (max-width: 768px) {
  .floating-element {
    transform: scale(0.7);
  }
}

/* Efeitos de performance */
.animate-spin-slow,
.animate-spin-slow-reverse,
.floating-element {
  will-change: transform;
}

.animate-gradient-x {
  will-change: background-position;
}
</style>
