<script setup lang="ts">
const items = [
  {
    name: "Acesso vitalício",
  },
  {
    name: "E-book FullStack Completo: Do 0 aos primeiros projetos.",
  },
  {
    name: "Notion com 100+ materiais úteis",
    exclusive: true,
  },
  {
    name: "Guia de Prompts ChatGPT",
    exclusive: true,
  },
  {
    name: "Galeria de ideia de projetos",
    exclusive: true,
  },
  {
    name: "Bots de vagas no Telegram",
    exclusive: true,
  },
  {
    name: "Bots de vagas no Telegram",
    exclusive: true,
  },
];
</script>

<template>
  <section class="flex flex-col gap-4">
    <Heading>
      <template #title>
        <p class="text-center">
          Escolha o plano que mais faça sentido pra você
        </p>
      </template>
    </Heading>
    <div class="lg:grid lg:grid-cols-2 gap-6 px-24">
      <div>
        <div
          class="flex items-center text-sm font-bold justify-center py-3 bg-secondary"
        >
          <span>DESCONTO DE 60%</span>
        </div>
        <div class="flex bg-backgroundSecondary px-8 py-5 flex-col gap-3">
          <SectionPlansBadge text="pacote básico" />
          <h3 class="text-2xl lg:text-3xl font-bold">FullStack Completo</h3>
          <ul class="flex flex-col gap-1.5 text-xs">
            <SectionPlansItem
              v-for="item in items"
              :key="'key-' + item.name"
              :check="!item.exclusive"
              :text="item.name"
            />
          </ul>
          <div class="flex flex-col gap-5 mt-5 mb-8">
            <div class="flex gap-4 flex-col">
              <div class="flex gap-3">
                <div
                  class="flex flex-col whitespace-nowrap font-bold text-xs text-textSecondary"
                >
                  <span>De: 79,90</span>
                  <span>Por apenas</span>
                </div>
                <SectionPlansBadge text="-60% OFF" />
              </div>
              <strong class="text-5xl">R$27,90</strong>
            </div>
            <Cta href="#">EU QUERO</Cta>
          </div>
        </div>
      </div>
      <div>
        <div
          class="flex items-center text-sm font-bold justify-center py-3 bg-secondary"
        >
          <span>DESCONTO DE 80%</span>
        </div>
        <div class="flex bg-backgroundSecondary px-8 py-5 flex-col gap-3">
          <div class="flex gap-1.5 items-center">
            <PhosphorIconShieldCheck class="text-accent" :size="32" />
            <SectionPlansBadge text="melhor custo benefício" />
          </div>
          <h3 class="text-2xl lg:text-3xl font-bold">FullStack Pro</h3>
          <ul class="flex flex-col gap-1.5 text-xs">
            <SectionPlansItem
              v-for="item in items"
              :key="'key-' + item.name"
              :check="true"
              :text="item.name"
            />
          </ul>
          <div class="flex flex-col gap-5 mt-5 mb-8">
            <div class="flex gap-4 flex-col">
              <div class="flex gap-3">
                <div
                  class="flex flex-col whitespace-nowrap font-bold text-xs text-textSecondary"
                >
                  <span>De: R$224,50</span>
                  <span>Por apenas</span>
                </div>
                <SectionPlansBadge text="-60% OFF" />
              </div>
              <strong class="text-5xl">R$44,90</strong>
            </div>
            <Cta href="#">EU QUERO</Cta>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
