<template>
  <section
    class="relative lg:grid lg:grid-cols-2 items-center gap-16 lg:gap-20"
    aria-labelledby="section-programming"
    role="main"
    itemscope
    itemtype="https://schema.org/EducationalOrganization"
  >
    <!-- Background decorativo -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div
        class="absolute top-20 left-10 w-32 h-32 border border-primary/30 rounded-lg rotate-12"
      ></div>
      <div
        class="absolute bottom-10 right-20 w-40 h-40 border-2 border-accent/30 rounded-full"
      ></div>
      <div class="absolute top-1/2 right-10 text-primary/20 font-mono text-sm">
        &lt;Book<br />
        &nbsp;&nbsp;title="FullStack"<br />
        &nbsp;&nbsp;level="Pro"<br />
        /&gt;
      </div>
    </div>

    <!-- Imagem do livro com efeitos -->
    <div class="hidden lg:block lg:col-span-1 relative group">
      <!-- Efeito de brilho ao redor da imagem -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <!-- Container da imagem -->
      <div
        class="relative bg-gradient-to-br from-backgroundSecondary/80 to-backgroundSecondary/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-2xl shadow-primary/10 group-hover:shadow-primary/25 transition-all duration-500"
      >
        <!-- Decorações tecnológicas -->
        <div class="absolute top-4 right-4 text-primary/30 font-mono text-xs">
          📖
        </div>
        <div class="absolute bottom-4 left-4 text-accent/30 font-mono text-xs">
          &lt;/&gt;
        </div>

        <img
          src="/book.png"
          alt="Ebook de Programação Completo - Aprenda HTML, CSS, JavaScript, React, Node.js do zero com projetos práticos de desenvolvimento web"
          width="500"
          height="700"
          class="relative z-10 mx-auto transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        <!-- Indicadores de qualidade -->
        <div
          class="absolute -bottom-4 -right-4 bg-gradient-to-r from-cta to-ctaSecondary rounded-full p-3 shadow-lg"
        >
          <PhosphorIconStar class="text-white" :size="24" />
        </div>
      </div>
    </div>

    <!-- Conteúdo textual -->
    <div class="lg:col-span-1 relative z-10">
      <Heading>
        <template #title>
          <h2 id="section-programming" itemprop="name">
            Domine programação e
            <strong class="text-primary">desenvolvimento web</strong> com nosso
            e-book completo
          </h2>
        </template>

        <template #subtitle>
          <p>
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

      <!-- Destaques visuais -->
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          class="flex items-center gap-3 bg-backgroundSecondary/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4"
        >
          <div class="w-3 h-3 bg-cta rounded-full animate-pulse"></div>
          <span class="text-sm lg:text-base font-medium"
            >14 módulos completos</span
          >
        </div>
        <div
          class="flex items-center gap-3 bg-backgroundSecondary/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4"
        >
          <div class="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <span class="text-sm lg:text-base font-medium"
            >Projetos práticos</span
          >
        </div>
        <div
          class="flex items-center gap-3 bg-backgroundSecondary/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4"
        >
          <div class="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          <span class="text-sm lg:text-base font-medium"
            >Metodologia comprovada</span
          >
        </div>
        <div
          class="flex items-center gap-3 bg-backgroundSecondary/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4"
        >
          <div class="w-3 h-3 bg-ctaSecondary rounded-full animate-pulse"></div>
          <span class="text-sm lg:text-base font-medium">Acesso vitalício</span>
        </div>
      </div>
    </div>

    <!-- Imagem mobile com efeitos -->
    <div class="lg:hidden mx-auto relative group mt-8">
      <div
        class="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50"
      ></div>
      <div
        class="relative bg-gradient-to-br from-backgroundSecondary/80 to-backgroundSecondary/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-xl shadow-primary/10"
      >
        <img
          src="/book.png"
          alt="Ebook de Programação Completo - Curso completo de desenvolvimento web e programação do zero ao primeiro projeto"
          class="mx-auto transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width="280"
          height="392"
        />
      </div>
    </div>
  </section>
</template>
