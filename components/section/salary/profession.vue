<script setup lang="ts">
defineProps<{
  profession: string;
  salary: string;
  time: string;
}>();
</script>

<template>
  <div class="grid grid-cols-3 items-center gap-6">
    <div class="flex flex-col col-span-1 font-bold">
      <span class="text-lg">{{ profession }}</span>
      <span class="text-xl">R${{ salary }}</span>
      <span class="text-sm">{{ time }}</span>
    </div>
    <slot />
  </div>
</template>
