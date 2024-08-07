<template>
  <section class="lg:grid lg:grid-cols-2">
    <img src="/book.png" width="450" class="hidden items-center lg:block lg:col-span-1" />
    <Heading class="lg:col-span-1">
      <template #title>
        Domine Desenvolvimento <span class="text-primary"> FullStack </span> com
        Nosso <br class="lg:hidden" />
        E-book Completo
      </template>
      <template #subtitle>
        Este e-book abrange <strong> desde os fundamentos</strong> de HTML e CSS
        até <span>tecnologias avançadas</span> como Node.js, TypeScript e React.
        Cada módulo é acompanhado de <strong>projetos práticos</strong>,
        garantindo uma aprendizagem completa e prática. Aprenda no seu próprio
        ritmo e adquira as habilidades necessárias para uma
        <strong>carreira de sucesso</strong> no desenvolvimento web.
      </template>
    </Heading>
    <img src="/book.png" class="lg:hidden mx-auto" />
  </section>
</template>
