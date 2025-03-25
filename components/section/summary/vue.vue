<template>
  <section
    class="lg:grid lg:grid-cols-2 items-center gap-8"
    aria-labelledby="section-fullstack"
  >
    <img
      src="/book.png"
      alt="Capa do E-book Fullstack Completo"
      width="700"
      height="auto"
      class="hidden items-center lg:block lg:col-span-1"
      loading="lazy"
    />

    <Heading class="lg:col-span-1">
      <template #title>
        <h2 id="section-fullstack" class="text-3xl font-bold leading-tight">
          Domine desenvolvimento
          <strong class="text-primary">FullStack</strong> com nosso
          <br class="lg:hidden" />
          e-book de programação completo
        </h2>
      </template>

      <template #subtitle>
        <p class="text-lg mt-2">
          Este e-book abrange
          <strong>desde os fundamentos</strong> de HTML e CSS até
          <strong>tecnologias avançadas</strong> como Node.js, TypeScript e
          React. Cada módulo é acompanhado de
          <strong>projetos práticos</strong>, garantindo uma aprendizagem
          completa e aplicável. Aprenda no seu próprio ritmo e adquira as
          habilidades necessárias para uma
          <strong>carreira de sucesso</strong> no desenvolvimento web.
        </p>
      </template>
    </Heading>

    <img
      src="/book.png"
      alt="Capa do E-book Fullstack Completo"
      class="lg:hidden mx-auto"
      loading="lazy"
      width="300"
    />
  </section>
</template>
