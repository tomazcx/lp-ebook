<template>
  <section class="flex flex-col gap-12 relative">
    <!-- Background decorativo -->
    <div class="absolute inset-0 overflow-hidden opacity-5">
      <div
        class="absolute top-10 right-10 w-28 h-28 border border-cta/30 rounded-lg rotate-45"
      ></div>
      <div
        class="absolute bottom-20 left-10 w-36 h-36 border-2 border-accent/30 rounded-full"
      ></div>
      <div class="absolute top-1/2 left-1/4 text-cta/20 font-mono text-sm">
        const salaryData = {<br />
        &nbsp;&nbsp;junior: 3882,<br />
        &nbsp;&nbsp;senior: 14738<br />
        };
      </div>
    </div>

    <div class="relative z-10">
      <Heading>
        <template #title>
          <h2 class="text-center text-4xl lg:text-5xl font-black">
            Qual o salário médio de um
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-cta to-ctaSecondary"
              >FullStack?</span
            >
          </h2>
        </template>
        <template #subtitle>
          <p class="text-center text-xl lg:text-2xl leading-relaxed">
            Veja os salários reais do mercado e
            <strong class="text-cta">descubra seu potencial de ganhos</strong>
            como desenvolvedor fullstack profissional.
          </p>
        </template>
      </Heading>
    </div>

    <div
      class="flex flex-col gap-6 lg:gap-8 relative z-10 w-full max-w-4xl mx-auto"
    >
      <SectionSalaryProfession
        profession="Júnior"
        salary="3.882,45"
        time="Iniciante"
      >
        <div
          class="bg-gradient-to-r from-cta to-ctaSecondary col-span-2 h-6 lg:h-12 w-1/4 rounded-full shadow-lg shadow-cta/25 relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[slideRight_3s_ease-in-out_infinite]"
          ></div>
        </div>
      </SectionSalaryProfession>

      <SectionSalaryProfession
        profession="Pleno"
        salary="7.409,37"
        time="2 a 4 anos"
      >
        <div
          class="bg-gradient-to-r from-primary to-accent col-span-2 h-6 lg:h-12 w-2/4 rounded-full shadow-lg shadow-primary/25 relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[slideRight_3s_ease-in-out_infinite]"
            style="animation-delay: 0.5s"
          ></div>
        </div>
      </SectionSalaryProfession>

      <SectionSalaryProfession
        profession="Sênior"
        salary="14.738,70"
        time="+4 anos"
      >
        <div
          class="bg-gradient-to-r from-accent via-primary to-cta col-span-2 h-6 lg:h-12 w-full rounded-full shadow-lg shadow-accent/25 relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[slideRight_3s_ease-in-out_infinite]"
            style="animation-delay: 1s"
          ></div>
        </div>
      </SectionSalaryProfession>
    </div>

    <!-- Fonte modernizada -->
    <div class="text-center relative z-10">
      <div
        class="inline-flex items-center gap-2 bg-backgroundSecondary/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2"
      >
        <PhosphorIconChartBar class="text-accent" :size="16" />
        <span class="font-medium text-sm lg:text-base text-textSecondary">
          fonte:
          <a
            target="_blank"
            href="https://pesquisa.codigofonte.com.br/2024"
            class="text-primary hover:text-accent transition-colors duration-300 underline"
          >
            pesquisa.codigofonte.com.br/2024
          </a>
        </span>
      </div>
    </div>
  </section>
</template>
