<script setup lang="ts">
const modules = [
  {
    icon: "html",
    label: "HTML",
  },
  {
    icon: "css",
    label: "CSS",
  },
  {
    icon: "js",
    label: "JAVASCRIPT",
  },
  {
    icon: "git",
    label: "GIT",
  },
  {
    icon: "bootstrap",
    label: "BOOTSTRAP",
  },
  {
    icon: "sql",
    label: "BANCO DE DADOS",
  },
  {
    icon: "node",
    label: "NODE.JS",
  },
  {
    icon: "react",
    label: "REACT",
  },
  {
    icon: "sc",
    label: "STYLED COMPONENTS",
  },
  {
    icon: "tailwind",
    label: "TAILWINDCSS",
  },
  {
    icon: "ts",
    label: "TYPESCRIPT",
  },
  {
    icon: "nest",
    label: "NEST.JS",
  },
  {
    icon: "docker",
    label: "DOCKER",
  },
];
</script>

<template>
  <section class="flex flex-col gap-8">
    <Heading>
      <template #title>
        <p class="text-center">O que vou aprender?</p>
      </template>
      <template #subtitle>
        <p class="text-center">
          Confira a seguir uma lista de todas as
          <strong>tecnologias </strong>abordadas ao longo dos capítulos do
          e-book:
        </p>
      </template>
    </Heading>
    <SectionModulesModuleList v-slot="data" :modules="modules">
      <SectionModulesModule :icon="data.icon" :label="data.label" />
    </SectionModulesModuleList>
  </section>
</template>
