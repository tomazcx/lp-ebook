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
  <!-- Mobile Grid - Stack vertical -->
  <div class="lg:hidden">
    <ul class="grid grid-cols-1 gap-4">
      <slot
        v-for="(module, index) in modules"
        :key="'mobile-' + module.label"
        :label="module.label"
        :icon="module.icon"
      />
    </ul>
  </div>

  <!-- Tablet Grid - 2 columns -->
  <div class="hidden lg:block xl:hidden">
    <div class="grid grid-cols-2 gap-6">
      <ul class="space-y-4">
        <slot
          v-for="(module, index) in splitModules.firstColumn"
          :key="'tablet-first-' + module.label"
          :label="module.label"
          :icon="module.icon"
        />
      </ul>
      <ul class="space-y-4">
        <slot
          v-for="(module, index) in splitModules.secondColumn"
          :key="'tablet-second-' + module.label"
          :label="module.label"
          :icon="module.icon"
        />
      </ul>
    </div>
  </div>

  <!-- Desktop Grid - 3 columns optimized -->
  <div class="hidden xl:block">
    <div class="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
      <!-- First Column -->
      <ul class="space-y-4">
        <slot
          v-for="(module, index) in modules.slice(
            0,
            Math.ceil(modules.length / 3)
          )"
          :key="'desktop-first-' + module.label"
          :label="module.label"
          :icon="module.icon"
        />
      </ul>

      <!-- Second Column -->
      <ul class="space-y-4">
        <slot
          v-for="(module, index) in modules.slice(
            Math.ceil(modules.length / 3),
            Math.ceil((modules.length * 2) / 3)
          )"
          :key="'desktop-second-' + module.label"
          :label="module.label"
          :icon="module.icon"
        />
      </ul>

      <!-- Third Column -->
      <ul class="space-y-4">
        <slot
          v-for="(module, index) in modules.slice(
            Math.ceil((modules.length * 2) / 3)
          )"
          :key="'desktop-third-' + module.label"
          :label="module.label"
          :icon="module.icon"
        />
      </ul>
    </div>
  </div>
</template>
