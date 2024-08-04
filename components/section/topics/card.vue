<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <div
    class="bg-backgroundSecondary leading-tight w-full items-center rounded-xl p-6 flex flex-col gap-3"
  >
    <slot />
    <span class="text-sm lg:text-xl text-center font-bold">{{ text }}</span>
  </div>
</template>
