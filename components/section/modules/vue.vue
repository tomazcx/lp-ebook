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
