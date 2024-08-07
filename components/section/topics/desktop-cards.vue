<template>
  <div class="grid grid-cols-4 gap-4">
    <SectionTopicsCard text="14 módulos sobre desenvolvimento fullstack">
      <PhosphorIconBook class="text-accent" :size="56" />
    </SectionTopicsCard>
    <SectionTopicsCard text="Explicações fáceis e intuitivas.">
      <PhosphorIconSmileyWink class="text-accent" :size="56" />
    </SectionTopicsCard>
    <SectionTopicsCard text="Projetos práticos para portfólio.">
      <PhosphorIconCodeBlock class="text-accent" :size="56" />
    </SectionTopicsCard>
    <SectionTopicsCard
      text="Exercícios para você não ficar só na teoria."
    >
      <PhosphorIconChecks class="text-accent" :size="56" />
    </SectionTopicsCard>
  </div>
</template>
