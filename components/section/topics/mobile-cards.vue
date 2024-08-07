<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2">
      <SectionTopicsCard text="14 módulos sobre desenvolvimento fullstack">
        <PhosphorIconBook class="text-accent" :size="48" />
      </SectionTopicsCard>
      <SectionTopicsCard text="Explicações fáceis e intuitivas.">
        <PhosphorIconSmileyWink class="text-accent" :size="48" />
      </SectionTopicsCard>
    </div>
    <SectionTopicsCard text="Projetos práticos para portfólio.">
      <PhosphorIconCodeBlock class="text-accent" :size="48" />
    </SectionTopicsCard>
    <SectionTopicsCard
      text="Exercícios para você não ficar só na teoria."
    >
      <PhosphorIconChecks class="text-accent" :size="48" />
    </SectionTopicsCard>
  </div>
</template>
