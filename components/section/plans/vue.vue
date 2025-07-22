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
  <section id="plans" class="relative min-h-screen flex items-center py-20">
    <!-- Background futurístico com grid -->
    <div class="absolute inset-0 overflow-hidden opacity-5">
      <!-- Grid technology pattern -->
      <div
        class="absolute inset-0"
        style="
          background-image: linear-gradient(
              rgba(59, 130, 246, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        "
      ></div>

      <!-- Floating code elements -->
      <div
        class="absolute top-20 left-10 font-mono text-blue-400/20 text-sm animate-pulse"
      >
        const dev = 'you';
      </div>
      <div
        class="absolute top-40 right-16 font-mono text-emerald-400/20 text-sm animate-pulse delay-300"
      >
        function success() { return true; }
      </div>
      <div
        class="absolute bottom-32 left-20 font-mono text-purple-400/20 text-sm animate-pulse delay-700"
      >
        // unlock potential
      </div>
      <div
        class="absolute bottom-60 right-32 font-mono text-orange-400/20 text-sm animate-pulse delay-500"
      >
        npm install career-boost
      </div>

      <!-- Geometric tech elements -->
      <div
        class="absolute top-1/4 left-8 w-24 h-24 border border-blue-500/20 rotate-45 animate-spin-slow"
      ></div>
      <div
        class="absolute bottom-1/4 right-8 w-32 h-32 border border-emerald-500/20 rounded-full animate-pulse"
      ></div>
      <div
        class="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rotate-12 animate-float"
      ></div>
    </div>

    <!-- Particles background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-100"
      ></div>
      <div
        class="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-300"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"
      ></div>
      <div
        class="absolute top-2/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-700"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header section with enhanced typography -->
      <div class="text-center mb-16 animate-fade-in-up">
        <Heading>
          <template #title>
            <h2 class="text-center mb-4 relative">
              <span
                class="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
              >
                Adquira agora o seu E-book FullStack Pro
              </span>
            </h2>
          </template>
        </Heading>

        <p class="text-textSecondary max-w-2xl mx-auto text-lg leading-relaxed">
          Transforme sua carreira com o pacote completo para se tornar um
          desenvolvedor FullStack profissional
        </p>
      </div>

      <!-- Main plan card with enhanced design -->
      <div class="flex justify-center">
        <div
          class="lg:max-w-[480px] w-full max-w-md transform hover:scale-105 transition-all duration-500 animate-fade-in-up delay-200"
        >
          <!-- Glow effect container -->
          <div class="relative group">
            <!-- Outer glow -->
            <div
              class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-glow"
            ></div>

            <!-- Card container -->
            <div
              class="relative bg-backgroundSecondary rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm"
            >
              <!-- Header with premium styling -->
              <div class="relative overflow-hidden">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 opacity-90"
                ></div>
                <div class="absolute inset-0 bg-black/20"></div>

                <!-- Tech pattern overlay -->
                <div
                  class="absolute inset-0 opacity-20"
                  style="
                    background-image: radial-gradient(
                      circle at 2px 2px,
                      rgba(255, 255, 255, 0.3) 1px,
                      transparent 0
                    );
                    background-size: 20px 20px;
                  "
                ></div>

                <div class="relative z-10 text-center py-6 px-8">
                  <div class="inline-flex items-center gap-2 mb-3">
                    <div
                      class="w-2 h-2 bg-white rounded-full animate-pulse"
                    ></div>
                    <span class="text-white font-mono text-sm tracking-widest"
                      >PACOTE</span
                    >
                    <div
                      class="w-2 h-2 bg-white rounded-full animate-pulse"
                    ></div>
                  </div>
                  <h3 class="text-white text-2xl font-bold tracking-wide">
                    FULLSTACK PRO
                  </h3>
                  <div class="w-16 h-0.5 bg-white/50 mx-auto mt-2"></div>
                </div>
              </div>

              <!-- Body content -->
              <div class="p-8 space-y-8">
                <!-- Product header with enhanced badge -->
                <div class="space-y-4">
                  <div class="flex gap-3 items-start">
                    <div class="relative">
                      <div
                        class="absolute inset-0 bg-emerald-400/20 rounded-full blur-md animate-pulse"
                      ></div>
                      <PhosphorIconShieldCheck
                        class="text-emerald-400 relative z-10 drop-shadow-lg"
                        :size="40"
                      />
                    </div>
                    <div class="flex-1">
                      <SectionPlansBadge text="melhor custo benefício" />
                      <div class="mt-2">
                        <h4
                          class="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text"
                        >
                          Sua jornada FullStack completa
                        </h4>
                        <p class="text-textSecondary text-sm mt-1">
                          Tudo que você precisa em um só lugar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Enhanced benefits list -->
                <div class="space-y-3">
                  <h5 class="font-semibold text-lg flex items-center gap-2">
                    <div
                      class="w-1 h-6 bg-gradient-to-b from-blue-400 to-emerald-400 rounded-full"
                    ></div>
                    O que você vai receber:
                  </h5>
                  <ul class="space-y-2">
                    <SectionPlansItem
                      v-for="(item, index) in items"
                      :key="'key-' + item.name"
                      :check="true"
                      :text="item.name"
                      :delay="index * 100"
                    />
                  </ul>
                </div>

                <!-- Enhanced pricing section -->
                <div class="relative">
                  <!-- Background accent -->
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl -m-4"
                  ></div>

                  <div class="relative z-10 text-center space-y-6 py-6">
                    <!-- Price display -->
                    <div class="space-y-2">
                      <p class="text-textSecondary font-medium">
                        💳 Investimento inteligente
                      </p>

                      <div class="flex items-center justify-center gap-3">
                        <span class="text-textSecondary line-through text-xl"
                          >R$97,90</span
                        >
                        <div
                          class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold"
                        >
                          -61%
                        </div>
                      </div>

                      <div
                        class="text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"
                      >
                        R$37,90
                      </div>

                      <p class="text-textSecondary">
                        ou
                        <span class="text-white font-semibold"
                          >5x de R$7,58</span
                        >
                        sem juros
                      </p>

                      <div
                        class="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mt-3"
                      >
                        <div
                          class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                        ></div>
                        <span class="text-emerald-400 text-sm font-medium"
                          >Preço promocional</span
                        >
                      </div>
                    </div>

                    <!-- Enhanced CTA -->
                    <div class="space-y-4">
                      <div class="relative group">
                        <div
                          class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse"
                        ></div>
                        <Cta
                          :href="proUrl"
                          class="relative block bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                        >
                          <span class="flex items-center justify-center gap-3">
                            <PhosphorIconRocket :size="24" />
                            QUERO COMEÇAR AGORA
                            <PhosphorIconArrowRight :size="20" />
                          </span>
                        </Cta>
                      </div>

                      <div
                        class="flex items-center justify-center gap-6 text-sm text-textSecondary"
                      >
                        <div class="flex items-center gap-2">
                          <PhosphorIconShield
                            :size="16"
                            class="text-emerald-400"
                          />
                          <span>Acesso imediato</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <PhosphorIconInfinity
                            :size="16"
                            class="text-blue-400"
                          />
                          <span>Vitalício</span>
                        </div>
                      </div>

                      <p class="text-xs text-textSecondary/70">
                        🔒 Pagamento 100% seguro • Satisfação garantida
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes glow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(12deg);
  }
  50% {
    transform: translateY(-10px) rotate(12deg);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-glow {
  animation: glow 3s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}
</style>
