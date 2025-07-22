<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-2xl lg:text-3xl font-bold text-text leading-tight">
      <slot name="title" />
    </h2>

    <p class="text-base lg:text-lg leading-relaxed text-text/90 max-w-4xl">
      <slot name="subtitle" />
    </p>
  </div>
</template>
