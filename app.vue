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
    class="relative text-text min-h-screen overflow-x-hidden py-20 lg:py-36 px-6 lg:px-44 flex flex-col gap-40"
  >
    <!-- Background tecnológico global -->
    <div class="fixed inset-0 overflow-hidden opacity-5 pointer-events-none">
      <!-- Grid pattern -->
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(182, 146, 230, 0.15) 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>

      <!-- Floating elements -->
      <div
        class="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-lg rotate-45 animate-spin"
        style="animation-duration: 20s"
      ></div>
      <div
        class="absolute top-1/4 right-20 w-16 h-16 border border-accent/20 rounded-full animate-bounce"
        style="animation-duration: 3s"
      ></div>
      <div
        class="absolute bottom-1/4 left-20 w-24 h-24 border border-primary/20 rounded-lg -rotate-12 animate-pulse"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-32 h-32 border border-accent/20 rounded-full animate-spin"
        style="animation-duration: 25s"
      ></div>

      <!-- Code snippets -->
      <div
        class="absolute top-1/3 left-1/4 text-primary/10 font-mono text-sm animate-pulse"
      >
        const developer = {<br />
        &nbsp;&nbsp;skills: ['fullstack'],<br />
        &nbsp;&nbsp;ready: true<br />
        };
      </div>
      <div
        class="absolute bottom-1/3 right-1/4 text-accent/10 font-mono text-sm animate-pulse"
        style="animation-delay: 1s"
      >
        function success() {<br />
        &nbsp;&nbsp;return 'career++'; <br />
        }
      </div>
    </div>

    <!-- Seções com z-index para ficar sobre o background -->
    <div class="relative z-10 flex flex-col gap-40">
      <SectionHomeVue />
      <SectionSummaryVue />
      <SectionTopicsVue />
      <SectionSalaryVue />
      <SectionModulesVue />
      <SectionPlansVue :accepted="accepted" />
      <SectionFaqVue />
      <SectionFooterVue />
    </div>
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

/* Animações personalizadas */
@keyframes slideRight {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(182, 146, 230, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(182, 146, 230, 0.6);
  }
}

/* Scroll reveal animations */
@media (prefers-reduced-motion: no-preference) {
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .animate-on-scroll.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .animate-on-scroll.delay-100 {
    transition-delay: 0.1s;
  }

  .animate-on-scroll.delay-200 {
    transition-delay: 0.2s;
  }

  .animate-on-scroll.delay-300 {
    transition-delay: 0.3s;
  }
}

/* Melhorar performance das animações */
.group:hover .transform,
.group:hover .transition-transform,
.hover\\:scale-105:hover,
.hover\\:scale-110:hover {
  will-change: transform;
}

.transition-colors,
.transition-opacity,
.transition-all {
  will-change: auto;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #251737;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #b692e6, #761fe7);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #761fe7, #b692e6);
}
</style>
