<script setup lang="ts">
defineProps<{
  icon: string;
  label: string;
}>();
</script>

<template>
  <li
    class="rounded bg-backgroundSecondary flex gap-5 items-center px-4 py-2.5 w-full"
  >
    <img :width="icon.split('.')[1] === 'png' ? '42px' : '28px'" :src="'/' + icon " />
    <span class="text-base font-bold">{{ label }}</span>
  </li>
</template>
