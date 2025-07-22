<script setup lang="ts">
const modules = [
  {
    icon: "html.svg",
    label: "HTML",
  },
  {
    icon: "css.svg",
    label: "CSS",
  },
  {
    icon: "js.svg",
    label: "JAVASCRIPT",
  },
  {
    icon: "git.svg",
    label: "GIT",
  },
  {
    icon: "bootstrap.svg",
    label: "BOOTSTRAP",
  },
  {
    icon: "sql.svg",
    label: "BANCO DE DADOS",
  },
  {
    icon: "node.svg",
    label: "NODE.JS",
  },
  {
    icon: "react.svg",
    label: "REACT",
  },
  {
    icon: "sc.png",
    label: "STYLED COMPONENTS",
  },
  {
    icon: "tailwind.svg",
    label: "TAILWINDCSS",
  },
  {
    icon: "ts.svg",
    label: "TYPESCRIPT",
  },
  {
    icon: "nest.svg",
    label: "NEST.JS",
  },
  {
    icon: "docker.svg",
    label: "DOCKER",
  },
];
</script>

<template>
  <section
    class="relative min-h-screen flex items-center py-16 lg:py-24 overflow-hidden"
  >
    <!-- Background futurístico tech -->
    <div class="absolute inset-0 overflow-hidden opacity-5">
      <!-- Matrix tech grid -->
      <div
        class="absolute inset-0"
        style="
          background-image: linear-gradient(
              rgba(34, 197, 94, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        "
      ></div>

      <!-- Floating code snippets -->
      <div
        class="absolute top-16 left-4 lg:left-20 font-mono text-emerald-400/20 text-xs lg:text-sm animate-pulse"
      >
        import { skills } from './fullstack';
      </div>
      <div
        class="absolute top-32 right-4 lg:right-16 font-mono text-blue-400/20 text-xs lg:text-sm animate-pulse delay-300"
      >
        const tech = await learn();
      </div>
      <div
        class="absolute bottom-32 left-4 lg:left-24 font-mono text-purple-400/20 text-xs lg:text-sm animate-pulse delay-700"
      >
        export { developer };
      </div>
      <div
        class="absolute bottom-48 right-4 lg:right-32 font-mono text-orange-400/20 text-xs lg:text-sm animate-pulse delay-500"
      >
        skills.map(tech => mastery);
      </div>

      <!-- Tech geometric elements -->
      <div
        class="absolute top-1/4 left-2 lg:left-20 w-16 h-16 lg:w-40 lg:h-40 border border-emerald-500/20 rounded-lg rotate-12 animate-float"
      ></div>
      <div
        class="absolute bottom-1/4 right-2 lg:right-10 w-20 h-20 lg:w-32 lg:h-32 border-2 border-blue-500/20 rounded-full animate-pulse"
      ></div>
      <div
        class="absolute top-1/2 right-1/4 w-12 h-12 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rotate-45 animate-spin-slow"
      ></div>

      <!-- Binary rain effect -->
      <div
        class="absolute top-1/3 left-1/3 font-mono text-emerald-400/10 text-xs animate-float"
      >
        01101000<br />01110100<br />01101101<br />01101100
      </div>
    </div>

    <!-- Particles system -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-100"
      ></div>
      <div
        class="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"
      ></div>
      <div
        class="absolute top-2/3 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-700"
      ></div>
    </div>

    <div class="w-full max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
      <!-- Enhanced header section -->
      <div class="text-center mb-16 lg:mb-20 animate-fade-in-up">
        <!-- Tech indicator badge -->
        <div
          class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full px-6 py-3 mb-8"
        >
          <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>

          <div class="flex gap-0.5">
            <div class="w-1 h-1 bg-emerald-400 rounded-full animate-ping"></div>
            <div
              class="w-1 h-1 bg-blue-400 rounded-full animate-ping delay-200"
            ></div>
            <div
              class="w-1 h-1 bg-purple-400 rounded-full animate-ping delay-400"
            ></div>
          </div>
        </div>

        <Heading>
          <template #title>
            <h2 class="text-center mb-6 relative">
              <span
                class="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                O que vou aprender?
              </span>
            </h2>
          </template>
          <template #subtitle>
            <div class="max-w-3xl mx-auto space-y-4">
              <p class="text-center text-lg lg:text-xl leading-relaxed">
                Confira a seguir uma lista de todas as
                <strong
                  class="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text"
                  >tecnologias</strong
                >
                abordadas ao longo dos capítulos do e-book:
              </p>

              <!-- Stats badges -->
              <div class="flex flex-wrap justify-center gap-4 lg:gap-6 mt-8">
                <div
                  class="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2"
                >
                  <PhosphorIconCode :size="20" class="text-emerald-400" />
                  <span class="text-emerald-300 font-semibold text-sm"
                    >{{ modules.length }} Tecnologias</span
                  >
                </div>
                <div
                  class="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2"
                >
                  <PhosphorIconStack :size="20" class="text-blue-400" />
                  <span class="text-blue-300 font-semibold text-sm"
                    >FullStack</span
                  >
                </div>
                <div
                  class="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2"
                >
                  <PhosphorIconRocket :size="20" class="text-purple-400" />
                  <span class="text-purple-300 font-semibold text-sm"
                    >Do Zero ao Pro</span
                  >
                </div>
              </div>
            </div>
          </template>
        </Heading>
      </div>

      <!-- Enhanced modules grid -->
      <div class="relative animate-fade-in-up delay-300">
        <!-- Background glow effect -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl"
        ></div>

        <div
          class="relative bg-backgroundSecondary/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 lg:p-10"
        >
          <!-- Section header -->
          <div class="text-center mb-8 lg:mb-12">
            <h3
              class="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"
            >
              Stack Tecnológico Completo
            </h3>
            <p class="text-textSecondary text-base lg:text-lg">
              Domine as tecnologias mais demandadas do mercado
            </p>

            <!-- Progress indicator -->
            <div class="flex justify-center mt-6">
              <div
                class="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2"
              >
                <div
                  class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                ></div>
                <span class="text-emerald-400 font-mono text-sm"
                  >LOADING_SKILLS...</span
                >
              </div>
            </div>
          </div>

          <!-- Modules list with enhanced styling -->
          <SectionModulesModuleList v-slot="data" :modules="modules">
            <SectionModulesModule :icon="data.icon" :label="data.label" />
          </SectionModulesModuleList>
        </div>
      </div>

      <!-- Bottom CTA section -->
      <div class="text-center mt-16 lg:mt-20 animate-fade-in-up delay-500">
        <div class="max-w-2xl mx-auto">
          <div
            class="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 lg:p-8"
          >
            <PhosphorIconLightbulb
              :size="48"
              class="text-emerald-400 mx-auto mb-4"
            />
            <h4
              class="text-xl lg:text-2xl font-bold mb-3 text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text"
            >
              Do Básico ao Avançado
            </h4>
            <p class="text-textSecondary text-base lg:text-lg leading-relaxed">
              Cada tecnologia é apresentada de forma didática e prática, com
              exemplos reais e projetos hands-on para consolidar seu
              aprendizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-500 {
  animation-delay: 0.5s;
}
</style>
