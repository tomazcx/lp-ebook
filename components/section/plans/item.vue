<script setup lang="ts">
defineProps<{
  text: string;
  check: boolean;
}>();
</script>

<template>
  <li class="flex  items-center gap-1.5 text-xs lg:text-sm font-bold">
    <PhosphorIconCheck class="text-accent" :size="20" v-if="check" />
    <PhosphorIconX :size="20" v-else />
    <span :class="{ 'line-through text-textSecondary': !check }">{{ text }}</span>
  </li>
</template>
