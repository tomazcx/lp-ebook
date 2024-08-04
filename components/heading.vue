<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl font-extrabold text-text">
      <slot name="title" />
    </h2>
    <p class="text-[16px] leading-normal">
      <slot name="subtitle" />
    </p>
  </div>
</template>
