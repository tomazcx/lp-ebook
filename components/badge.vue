<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div
    class="bg-secondary flex justify-center items-center px-4 w-[190px] lg:w-[250px] text-xs lg:text-base font-bold py-1 rounded"
  >
    <span class="text-center uppercase">{{ text }}</span>
  </div>
</template>
