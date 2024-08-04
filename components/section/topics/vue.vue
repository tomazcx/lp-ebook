<template>
  <section class="flex flex-col gap-6">
    <div class="flex flex-col gap-3">
      <Badge text="TUDO QUE VOCÊ PRECISA" />
      <Heading>
        <template #title
          >Material completo, levando do
          <span class="text-primary">absoluto zero</span> ao
          <span class="text-primary"></span> seus
          <span class="text-primary">primeiros projetos</span>:
        </template>
      </Heading>
    </div>
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
        text="Exercícios práticos para você não fica só na teoria."
      >
        <PhosphorIconChecks class="text-accent" :size="48" />
      </SectionTopicsCard>
    </div>
  </section>
</template>
