<template>
  <section class="flex flex-col gap-10 relative">
    <!-- Background decorativo -->
    <div class="absolute inset-0 overflow-hidden opacity-5">
      <div
        class="absolute top-20 left-10 w-24 h-24 border-2 border-primary rounded-lg rotate-45"
      ></div>
      <div
        class="absolute bottom-10 right-20 w-32 h-32 border border-accent rounded-full"
      ></div>
      <div class="absolute top-1/2 right-10 text-primary font-mono text-sm">
        const skills = [<br />
        &nbsp;&nbsp;'frontend',<br />
        &nbsp;&nbsp;'backend'<br />
        ];
      </div>
    </div>

    <div class="flex flex-col gap-6 relative z-10">
      <div class="flex justify-center lg:justify-start">
        <Badge text="TUDO QUE VOCÊ PRECISA" />
      </div>

      <Heading>
        <template #title>
          <h2 class="text-center lg:text-left">
            Material completo, levando do
            <span class="text-primary">absoluto zero</span> aos
            <span class="text-primary">primeiros projetos</span>:
          </h2>
        </template>
      </Heading>
    </div>

    <SectionTopicsMobileCards class="lg:hidden" />
    <SectionTopicsDesktopCards class="hidden lg:grid" />
  </section>
</template>
