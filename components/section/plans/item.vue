<script setup lang="ts">
defineProps<{
  text: string;
  check: boolean;
}>();
</script>

<template>
  <li class="grid grid-cols-12 items-center gap-1.5 text-sm lg:text-lg font-bold">
    <PhosphorIconCheck class="text-accent col-span-1" :size="24" v-if="check" />
    <PhosphorIconX :size="20" v-else />
    <span :class="{ 'line-through text-textSecondary': !check, 'col-span-11':true }">{{ text }}</span>
  </li>
</template>
