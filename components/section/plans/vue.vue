<script setup lang="ts">
const props = defineProps<{ accepted: true }>();

const items = [
  {
    name: "Acesso vitalício",
  },
  {
    name: "E-book FullStack Completo: Do 0 aos primeiros projetos.",
  },
  {
    name: "Bots de vagas no Telegram",
  },
  {
    name: "Modelo de currículo",
  },
  {
    name: "Galeria de ideias de projetos",
  },
  {
    name: "Guia de Prompts ChatGPT",
  },
  {
    name: "Guia de extensões VsCode",
  },
  {
    name: "Repositórios úteis do GitHub",
  },
];

const route = useRoute();
const url = route.fullPath;
const params = url.split("?")[1];

const proUrl = ref(
  "https://pay.kirvano.com/eb0d1cae-9497-4302-bede-77e398c9b5dd?"
);

onMounted(() => {
  if (props.accepted) {
    proUrl.value = proUrl.value + (params ? params : "");
  }
});

watch(
  () => props.accepted,
  () => {
    if (props.accepted) {
      proUrl.value = proUrl.value + (params ? params : "");
    }
  }
);
</script>

<template>
  <section id="plans" class="flex flex-col gap-4">
    <Heading>
      <template #title>
        <p class="text-center">Adquira agora o seu E-book FullStack Pro</p>
      </template>
    </Heading>
    <div class="flex justify-center">
      <div class="lg:max-w-[450px] w-full max-w-md">
        <div
          class="flex items-center text-sm lg:text-base font-bold justify-center py-3 bg-secondary"
        >
          <span>PACOTE PRO</span>
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
            <div class="flex gap-2 flex-col">
              <span class="font-bold text-xs lg:text-base text-textSecondary"
                >Por apenas</span
              >
              <strong class="text-5xl">R$37,90</strong>
              <span class="font-bold text-xs lg:text-base text-textSecondary"
                >ou 5x de R$7,58</span
              >
            </div>
            <Cta :href="proUrl">EU QUERO</Cta>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
