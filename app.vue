<script setup lang="ts">
useHead({
  title:
    "Ebook de Programação Completo | Aprenda Desenvolvimento Web do Zero | Curso de Programação Online",
  meta: [
    {
      name: "description",
      content:
        "📖 Ebook de programação completo para aprender desenvolvimento web do zero. Domine HTML, CSS, JavaScript, React, Node.js com projetos práticos. Curso de programação online direto ao ponto que formou centenas de programadores profissionais.",
    },
    {
      name: "keywords",
      content:
        "ebook de programação, curso programação online, aprender programação do zero, desenvolvimento web, programador, curso de programação, ebook programador, livro programação, programação web, tutorial programação, material didático programação, guia programação completo",
    },
    {
      name: "author",
      content: "Um Por Cento Programador",
    },
    {
      name: "robots",
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "language",
      content: "pt-BR",
    },
    {
      name: "geo.region",
      content: "BR",
    },
    {
      name: "geo.country",
      content: "Brazil",
    },
    {
      name: "distribution",
      content: "global",
    },
    {
      name: "rating",
      content: "general",
    },
    {
      property: "og:title",
      content:
        "Ebook de Programação Completo | Aprenda Desenvolvimento Web do Zero ao Profissional",
    },
    {
      property: "og:description",
      content:
        "📖 O ebook de programação mais completo do Brasil. Transforme sua carreira aprendendo desenvolvimento web do zero com projetos práticos. HTML, CSS, JavaScript, React, Node.js e muito mais!",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://ebook.umporcentoprogramador.com.br",
    },
    {
      property: "og:site_name",
      content:
        "Um Por Cento Programador - Ebook de Programação e Desenvolvimento Web",
    },
    {
      property: "og:locale",
      content: "pt_BR",
    },
    {
      property: "og:image",
      content: "https://ebook.umporcentoprogramador.com.br/book.png",
    },
    {
      property: "og:image:alt",
      content: "Capa do Ebook de Programação e Desenvolvimento Web Completo",
    },
    {
      property: "og:image:width",
      content: "500",
    },
    {
      property: "og:image:height",
      content: "700",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content:
        "Ebook de Programação Completo | Do Zero ao Programador Profissional",
    },
    {
      name: "twitter:description",
      content:
        "📖 Ebook completo para aprender programação e desenvolvimento web do zero. HTML, CSS, JS, React, Node.js com projetos práticos!",
    },
    {
      name: "twitter:image",
      content: "https://ebook.umporcentoprogramador.com.br/book.png",
    },
    {
      name: "twitter:image:alt",
      content: "Ebook de Programação e Desenvolvimento Web Completo",
    },
    {
      name: "theme-color",
      content: "#B692E6",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    {
      name: "msapplication-TileColor",
      content: "#B692E6",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ebook.umporcentoprogramador.com.br",
    },
    {
      rel: "alternate",
      type: "application/rss+xml",
      title: "Ebook de Programação - RSS",
      href: "https://ebook.umporcentoprogramador.com.br/rss.xml",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Book",
        name: "Ebook de Programação Completo: Aprenda Desenvolvimento Web do Zero",
        author: {
          "@type": "Person",
          name: "Um Por Cento Programador",
        },
        description:
          "Ebook completo de programação para aprender desenvolvimento web do zero. Domine HTML, CSS, JavaScript, React, Node.js com projetos práticos e torne-se um programador profissional.",
        genre: "Educação, Tecnologia, Programação",
        inLanguage: "pt-BR",
        numberOfPages: "300+",
        publisher: {
          "@type": "Organization",
          name: "Um Por Cento Programador",
        },
        offers: {
          "@type": "Offer",
          price: "37.90",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
          validFrom: "2024-01-01",
        },
        keywords:
          "ebook programação, curso programação online, aprender programação, desenvolvimento web, programador, tutorial programação, livro programação digital",
        educationalLevel: "Iniciante a Intermediário",
        teaches: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "TypeScript",
          "Bootstrap",
          "Tailwind CSS",
          "Git",
          "Docker",
          "SQL",
        ],
        image: "https://ebook.umporcentoprogramador.com.br/book.png",
        url: "https://ebook.umporcentoprogramador.com.br",
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Ebook de Programação e Desenvolvimento Web Completo",
        description:
          "Curso completo em formato ebook para aprender programação e desenvolvimento web do zero ao primeiro projeto profissional",
        provider: {
          "@type": "Organization",
          name: "Um Por Cento Programador",
          url: "https://ebook.umporcentoprogramador.com.br",
        },
        educationalLevel: "Beginner",
        inLanguage: "pt-BR",
        courseMode: "self-paced",
        teaches: [
          "Programação Web",
          "Desenvolvimento Web",
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "Programação Frontend",
          "Programação Backend",
        ],
        totalTime: "P30D",
        offers: {
          "@type": "Offer",
          price: "37.90",
          priceCurrency: "BRL",
          category: "ebook",
        },
      }),
    },
  ],
});

const { $fbq } = useNuxtApp() as { $fbq: any };

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
    itemscope
    itemtype="https://schema.org/WebPage"
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
