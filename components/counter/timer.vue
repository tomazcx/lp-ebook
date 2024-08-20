<script setup lang="ts">
defineProps<{
  hours: string;
  minutes: string;
  seconds: string;
}>();
</script>

<template>
  <div class="flex text-lg lg:text-2xl gap-4 items-center">
    <div class="flex flex-col lg:gap-1 items-center">
      <span class="py-3 px-1.5 bg-white rounded text-black">{{ hours }}</span>
      <span class="text-[10px] lg:text-xs">Horas</span>
    </div>
    <div class="flex flex-col lg:gap-1 items-center">
      <span class="py-3 px-1.5 bg-white rounded text-black">{{ minutes }}</span>
      <span class="text-[10px] lg:text-xs">Min</span>
    </div>
    <div class="flex flex-col lg:gap-1 items-center">
      <span class="py-3 px-1.5 bg-white rounded text-black">{{ seconds }}</span>
      <span class="text-[10px] lg:text-xs">Seg</span>
    </div>
  </div>
</template>
