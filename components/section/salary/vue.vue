<template>
  <section class="flex flex-col gap-6">
    <Heading>
      <template #title>
        <p class="text-center">
          Qual o salário médio de um
          <span class="text-primary">FullStack?</span>
        </p>
      </template>
    </Heading>
    <div class="flex flex-col gap-2">
      <SectionSalaryProfession
        profession="Júnior"
        salary="3.882,45"
        time="Iniciante"
      >
        <div class="bg-accent col-span-2 h-5 w-1/4"></div>
      </SectionSalaryProfession>
      <SectionSalaryProfession
        profession="Pleno"
        salary="7.409,37"
        time="2 a 4 anos"
      >
        <div class="bg-accent col-span-2 h-5 w-2/4"></div>
      </SectionSalaryProfession>
      <SectionSalaryProfession
        profession="Sênior"
        salary="14.738,70"
        time="+4 anos"
      >
        <div class="bg-accent col-span-2 h-5 w-full"></div>
      </SectionSalaryProfession>
    </div>
    <span class="font-bold text-[8px]"
      >fonte:
      <a target="_blank" href=" https://pesquisa.codigofonte.com.br/2024">
        https://pesquisa.codigofonte.com.br/2024</a
      ></span
    >
  </section>
</template>
