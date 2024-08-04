<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div
    class="bg-secondary flex justify-center items-center w-[214px] px-6 text-xs font-bold py-1.5 rounded-lg"
  >
    <span class="text-center uppercase">{{ text }}</span>
  </div>
</template>
