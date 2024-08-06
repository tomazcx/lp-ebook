<script setup lang="ts">
const items = [
  {
    name: "Acesso vitalício",
  },
  {
    name: "E-book FullStack Completo: Do 0 aos primeiros projetos.",
  },
  {
    name: "Bots de vagas no Telegram",
    exclusive: true,
  },
  {
    name: "Modelo de currículo",
    exclusive: true,
  },
  {
    name: "Galeria de ideias de projetos",
    exclusive: true,
  },
  {
    name: "Guia de Prompts ChatGPT",
    exclusive: true,
  },
  {
    name: "Guia de extensões VsCode",
    exclusive: true,
  },
  {
    name: "Repositórios úteis do GitHub",
    exclusive: true,
  },
];

const route = useRoute();
const url = route.fullPath;
const params = url.split("?")[1];
const baseUrl = `https://pay.kirvano.com/cc1a111c-f9fa-4590-96ee-35668eea46ef?${params ? params : ''}`
const proUrl = `https://pay.kirvano.com/7be18de7-3eba-4174-a762-bb05857d12d4?${params ? params: ''}`
</script>

<template>
  <section id="plans" class="flex flex-col gap-4">
    <Heading>
      <template #title>
        <p class="text-center">
          Escolha o plano que mais faça sentido para você
        </p>
      </template>
    </Heading>
    <div class="lg:flex-row justify-center flex flex-col gap-6">
      <div class="lg:max-w-[450px]">
        <div
          class="flex items-center text-sm lg:text-base font-bold justify-center py-3 bg-backgroundSecondary border-b border-background"
        >
          <span>PACOTE BÁSICO</span>
        </div>
        <div
          class="flex bg-backgroundSecondary justify-between h-full px-8 py-5 flex-col gap-3"
        >
          <h3 class="text-2xl lg:text-3xl mt-10 font-extrabold">
            FullStack Completo
          </h3>

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
                  class="flex flex-col whitespace-nowrap font-bold text-xs lg:text-base text-textSecondary"
                >
                  <span>De: 79,90</span>
                  <span>Por apenas</span>
                </div>
                <SectionPlansBadge text="-60% OFF" />
              </div>
              <strong class="text-5xl">R$27,90</strong>
            </div>
            <Cta :href="baseUrl">EU QUERO</Cta>
          </div>
        </div>
      </div>
      <div class="lg:max-w-[450px]">
        <div
          class="flex items-center text-sm lg:text-base font-bold justify-center py-3 bg-secondary"
        >
          <span>DESCONTO DE 80%</span>
        </div>
        <div
          class="flex bg-backgroundSecondary justify-between h-full px-8 py-5 flex-col gap-3"
        >
          <div class="space-y-2">
            <div class="flex gap-1.5 items-center">
              <PhosphorIconShieldCheck class="text-accent" :size="32" />
              <SectionPlansBadge text="melhor custo benefício" />
            </div>
            <h3 class="text-2xl lg:text-3xl font-extrabold">FullStack Pro</h3>
          </div>
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
                  class="flex flex-col whitespace-nowrap font-bold text-xs lg:text-base text-textSecondary"
                >
                  <span>De: R$224,50</span>
                  <span>Por apenas</span>
                </div>
                <SectionPlansBadge text="-80% OFF" />
              </div>
              <strong class="text-5xl">R$44,90</strong>
            </div>
            <Cta :href="proUrl">APROVEITAR PROMOÇÃO</Cta>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
