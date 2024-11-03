<template>
  <section class="flex flex-col lg:flex-row gap-[48px] lg:grid lg:grid-cols-2">
    <div class="flex flex-col gap-4">
      <SectionHomeBadge />
      <Heading>
        <template #title>
          Aprenda tudo que você precisa para virar um
          <span id="animated-title" class="text-primary animated-text"
            >programador fullstack começando do absoluto 0</span
          >
        </template>
        <template #subtitle>
          Este é o segredo que vai colocar você à frente da concorrência: aqui
          você aprenderá todas as habilidades e tecnologias necessárias para se
          tornar um programador profissional, conquistando
          <span class="text-primary"
            >altos salários enquanto trabalha do conforto da sua casa.</span
          >
        </template>
      </Heading>
    </div>
    <div
      class="gap-4 bg-backgroundSecondary relative text-[18px] lg:text-xl rounded-lg p-[18px] flex justify-between flex-col"
    >
      <span>💸 Adquira agora por apenas: </span>
      <div class="flex flex-col gap-2">
        <span class="text-textSecondary"
          >De <span class="line-through">R$37,90</span> por apenas</span
        >
        <span class="text-6xl font-bold">R$ 18,95</span>
      </div>

      <span class="w-full text-center text-sm lg:text-lg"
        >Cartão de crédito, Boleto e Pix</span
      >
      <Cta
        href="#plans"
        class="relative overflow-hidden flex items-center justify-center"
      >
        <span class="relative z-10">COMPRAR COM DESCONTO</span>
        <svg
          class="ml-2 w-6 h-6 relative z-10 transform transition-transform group-hover:translate-x-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <div class="absolute inset-0"></div>
      </Cta>
    </div>
  </section>
</template>

<style scoped>
@keyframes color-change {
  0% {
    color: #ff6363;
  }
  25% {
    color: #f7b733;
  }
  50% {
    color: #4caf50;
  }
  75% {
    color: #3498db;
  }
  100% {
    color: #ff6363;
  }
}

.animated-text {
  animation: color-change 8s infinite;
}
</style>
