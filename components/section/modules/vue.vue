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
  <section class="flex flex-col gap-12 relative">
    <!-- Background tecnológico -->
    <div class="absolute inset-0 overflow-hidden opacity-5">
      <div
        class="absolute top-10 left-20 w-40 h-40 border border-primary rounded-lg rotate-12"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent rounded-full"
      ></div>
      <div class="absolute top-1/3 right-1/4 text-primary font-mono text-sm">
        import { skills } from './fullstack';<br />
        export default skills;
      </div>
      <div class="absolute bottom-1/3 left-1/4 text-accent font-mono text-sm">
        const stack = ['frontend', 'backend'];
      </div>
    </div>

    <div class="relative z-10">
      <Heading>
        <template #title>
          <h2 class="text-center">O que vou aprender?</h2>
        </template>
        <template #subtitle>
          <p class="text-center">
            Confira a seguir uma lista de todas as
            <strong class="text-primary">tecnologias</strong> abordadas ao longo
            dos capítulos do e-book:
          </p>
        </template>
      </Heading>
    </div>

    <div class="relative z-10">
      <SectionModulesModuleList v-slot="data" :modules="modules">
        <SectionModulesModule :icon="data.icon" :label="data.label" />
      </SectionModulesModuleList>
    </div>
  </section>
</template>
