<script setup lang="ts">
useHead({
  title: "E-book Fullstack Completo",
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
    <CounterVue />
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
