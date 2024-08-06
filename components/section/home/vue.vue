<template>
  <section class="flex flex-col lg:flex-row gap-[48px] lg:grid lg:grid-cols-2">
    <div class="flex flex-col gap-4">
      <SectionHomeBadge />
      <Heading>
        <template #title>
          Comece na programação <span class="text-primary">fullstack </span> do
          zero sem pagar caro em cursos
        </template>
        <template #subtitle>
          Aprenda todas as habilidades necessárias para se tornar um programador
          profissional, abrindo portas para ganhar altos salários trabalhando no
          conforto da sua casa.
        </template>
      </Heading>
    </div>
    <div
      class="gap-4 bg-backgroundSecondary text-[18px] lg:text-xl rounded-lg p-[18px] flex flex-col"
    >
      <span>Preço promocional de lançamento: </span>
      <span
        ><span class="text-textSecondary line-through">R$79,99</span> por:
      </span>
      <span class="text-6xl font-bold">R$27,90</span>

      <span class="w-full text-center text-sm lg:text-lg"
        >Cartão de crédito, Boleto, Pix, NuPay</span
      >
      <Cta href="#plans">QUERO VIRAR UM PROGRAMADOR AGORA</Cta>
    </div>
  </section>
</template>
