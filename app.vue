<script setup lang="ts">
useHead({
  title:
    "E-book Fullstack Completo: Aprenda a programar do zero e construa seus primeiros projetos",
  meta: [
    {
      name: "description",
      content:
        "Descubra como sair do zero e se tornar um programador fullstack com o método que me colocou no mercado. E-book de programação completo e direto ao ponto.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "E-book Fullstack Completo: Aprenda a programar do zero",
    },
    {
      property: "og:description",
      content:
        "Transforme sua carreira com o e-book que te mostra o caminho completo para se tornar fullstack.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://ebook.umporcentoprogramador.com.br",
    },
  ],
});

const { $fbq } = useNuxtApp();

const accepted = ref(false);
const route = useRoute();
const url = route.fullPath;
const params = new URLSearchParams(url.split("?")[1]);

const utmSource = params.get("utm_source");
const utmMedium = params.get("utm_medium");
const utmCampaign = params.get("utm_campaign");

onMounted(() => {
  const pixelPolicy = localStorage.getItem("pixel-policy");

  if (pixelPolicy === "true") {
    $fbq("track", "PageView", {
      ...(utmSource && { source: utmSource }),
      ...(utmMedium && { medium: utmMedium }),
      ...(utmCampaign && { campaign: utmCampaign }),
    });
    accepted.value = true;
  }
});

const sendPixelEvent = () => {
  $fbq("track", "PageView", {
    ...(utmSource && { source: utmSource }),
    ...(utmMedium && { source: utmMedium }),
    ...(utmCampaign && { source: utmCampaign }),
  });
  accepted.value = true;
};
</script>

<template>
  <div
    class="text-text min-h-screen overflow-x-hidden py-[73px] px-6 lg:py-36 lg:px-44 flex flex-col gap-36"
  >
    <!--    <CounterVue /> -->
    <SectionHomeVue />
    <SectionSummaryVue />
    <SectionTopicsVue />
    <SectionSalaryVue />
    <SectionModulesVue />
    <SectionPlansVue :accepted="accepted" />
    <SectionFaqVue />
    <SectionFooterVue />
  </div>
  <ClientOnly>
    <ModalCookies @accept="sendPixelEvent" />
  </ClientOnly>
</template>

<style>
* {
  scroll-behavior: smooth;
}

body {
  background-color: #13091f;
}
</style>
