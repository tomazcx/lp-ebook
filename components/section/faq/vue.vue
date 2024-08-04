<template>
  <section class="flex flex-col">
    <Heading>
      <template #title>
        <p class="text-center">Dúvida frequentes</p>
      </template>
    </Heading>
    <div>
      <SectionFaqQuestion
        question="É um curso em vídeo?"
        answer="Não! É um e-book abrangente e detalhado que vai te ensinar programação fullstack do 0 ao avançado."
      />
      <SectionFaqQuestion
        question="Por onde eu posso acessar o meu e-book?"
        answer="Após realizar a compra, você receberá um e-mail com o acesso ao seu e-book."
      />
      <SectionFaqQuestion
        question="O acesso é vitalício?"
        answer="Sim! Após adquirir o e-book, você terá acesso a ele a todas as atualizações futuras para sempre!"
      />
    </div>
  </section>
</template>
