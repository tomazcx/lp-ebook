<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  modules: {
    label: string;
    icon: string;
  }[];
}>();

const splitModules = computed(() => {
  const middleIndex = Math.ceil(props.modules.length / 2);
  return {
    firstColumn: props.modules.slice(0, middleIndex),
    secondColumn: props.modules.slice(middleIndex),
  };
});
</script>

<template>
  <!-- Grid responsivo para mobile -->
  <ul class="flex flex-col gap-4 lg:hidden">
    <slot
      v-for="module in modules"
      :key="'key-' + module.label"
      :label="module.label"
      :icon="module.icon"
    />
  </ul>

  <!-- Grid para desktop com melhor espaçamento -->
  <div class="hidden lg:flex lg:gap-6 lg:justify-center">
    <ul class="flex w-full flex-col gap-4 items-center">
      <slot
        v-for="module in splitModules.firstColumn"
        :key="'key-' + module.label"
        :label="module.label"
        :icon="module.icon"
      />
    </ul>
    <ul class="flex w-full flex-col gap-4 items-center">
      <slot
        v-for="module in splitModules.secondColumn"
        :key="'key-' + module.label"
        :label="module.label"
        :icon="module.icon"
      />
    </ul>
  </div>
</template>
