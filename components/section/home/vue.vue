<template>
  <section
    class="relative flex flex-col lg:flex-row gap-12 lg:gap-16 lg:grid lg:grid-cols-2 items-center"
    aria-labelledby="main-title"
  >
    <!-- Background decorativo tecnológico -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div
        class="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-lg -rotate-12"
      ></div>
      <div class="absolute top-1/2 left-1/4 text-primary/10 font-mono text-xs">
        function() {<br />
        &nbsp;&nbsp;return success;<br />
        }
      </div>
      <div
        class="absolute bottom-1/4 right-1/4 text-accent/10 font-mono text-xs"
      >
        &lt;dev/&gt;
      </div>
    </div>

    <!-- Conteúdo principal -->
    <div class="flex flex-col gap-8 relative z-10">
      <SectionHomeBadge />

      <Heading>
        <template #title>
          <h1
            id="main-title"
            class="text-3xl lg:text-4xl font-bold leading-tight"
          >
            Aprenda tudo que você precisa para virar um
            <span class="text-primary">
              programador fullstack começando do absoluto 0
            </span>
          </h1>
        </template>

        <template #subtitle>
          <p class="text-lg lg:text-xl mt-4 leading-relaxed">
            Este é o segredo que vai colocar você à frente da concorrência: aqui
            você aprenderá todas as habilidades e tecnologias necessárias para
            se tornar um programador profissional, conquistando
            <strong class="text-primary">
              altos salários enquanto trabalha do conforto da sua casa.
            </strong>
          </p>
        </template>
      </Heading>

      <!-- Indicadores de benefícios -->
      <div class="flex flex-wrap gap-4 mt-4">
        <div class="flex items-center gap-2 text-sm lg:text-base text-text/80">
          <div class="w-2 h-2 bg-cta rounded-full animate-pulse"></div>
          <span>14 módulos completos</span>
        </div>
        <div class="flex items-center gap-2 text-sm lg:text-base text-text/80">
          <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>Projetos práticos</span>
        </div>
        <div class="flex items-center gap-2 text-sm lg:text-base text-text/80">
          <div class="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span>Acesso vitalício</span>
        </div>
      </div>
    </div>

    <!-- Card de preço modernizado -->
    <div
      class="relative gap-6 bg-gradient-to-br from-backgroundSecondary/80 to-backgroundSecondary/60 backdrop-blur-sm border border-primary/20 text-lg lg:text-xl rounded-2xl p-8 flex justify-between flex-col shadow-2xl shadow-primary/10 group hover:shadow-primary/20 transition-all duration-500"
    >
      <!-- Efeito de brilho no card -->
      <div
        class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <!-- Decoração tecnológica no card -->

      <div class="absolute bottom-4 left-4 text-accent/20 font-mono text-xs">
        &lt;buy/&gt;
      </div>

      <div class="relative z-10">
        <p
          aria-label="Preço atual do e-book"
          class="text-base lg:text-lg font-bold flex items-center gap-2"
        >
          <span>💸</span>
          <span class="text-cta"> Adquira agora por apenas: </span>
        </p>
      </div>

      <div class="flex flex-col gap-3 relative z-10">
        <span class="text-textSecondary text-base">Por apenas</span>
        <strong class="text-5xl lg:text-6xl font-bold text-cta">
          R$ 37,90
        </strong>
        <span class="text-textSecondary text-lg">ou 5x de R$ 7,58</span>
      </div>

      <!-- Badges de pagamento -->
      <div class="flex flex-wrap gap-2 justify-center relative z-10">
        <span
          class="px-3 py-1 bg-backgroundSecondary/80 border border-primary/20 rounded-full text-sm font-medium"
        >
          💳 Cartão
        </span>
        <span
          class="px-3 py-1 bg-backgroundSecondary/80 border border-primary/20 rounded-full text-sm font-medium"
        >
          🎫 Boleto
        </span>
        <span
          class="px-3 py-1 bg-backgroundSecondary/80 border border-primary/20 rounded-full text-sm font-medium"
        >
          ⚡ Pix
        </span>
      </div>

      <Cta href="#plans" aria-label="Comprar agora o e-book Fullstack Completo">
        COMPRAR AGORA
      </Cta>
    </div>
  </section>
</template>

<style scoped>
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

.animated-gradient {
  animation: gradient-x 4s ease infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Animação sutil para elementos decorativos */
.group:hover .absolute {
  animation: float 2s ease-in-out infinite;
}
</style>
