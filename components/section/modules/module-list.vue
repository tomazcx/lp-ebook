<script setup lang="ts">
defineProps<{
  modules: {
    label: string;
    icon: string;
  }[];
}>();
</script>

<template>
  <ul class="flex flex-col gap-2 items-center lg:hidden">
    <slot
      v-for="module in modules"
      :key="'key-' + module.label"
      :label="module.label"
      :icon="module.icon"
    />
  </ul>
  <ul class="lg:flex-col lg:gap-2 lg:items-center hidden lg:flex">
    <slot
      v-for="module in modules"
      :key="'key-' + module.label"
      :label="module.label"
      :icon="module.icon"
    />
  </ul>
</template>
