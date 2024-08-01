<template>
  <section class="flex flex-col gap-[48px]">
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
      class="gap-4 bg-backgroundSecondary text-[18px] rounded-lg p-[18px] flex flex-col"
    >
      <span>Preço promocional de lançamento: </span>
      <span
        ><span class="text-textSecondary line-through">R$79,99</span> por:
      </span>
      <span class="text-[56px] font-bold">R$27,90</span>

      <span class="w-full text-center text-[14px]"
        >Cartão de crédito, Boleto à vista e Pix</span
      >
      <a
        class="py-4 text-center font-extrabold text-xs px-0.5 rounded-lg bg-secondary"
        >QUERO VIRAR UM PROGRAMADOR AGORA</a
      >
    </div>
  </section>
</template>
