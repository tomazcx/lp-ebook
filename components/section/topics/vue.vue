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
    <SectionTopicsMobileCards class="lg:hidden" />
    <SectionTopicsDesktopCards class="hidden lg:grid" />
  </section>
</template>
