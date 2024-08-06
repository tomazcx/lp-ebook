<script setup lang="ts">
defineProps<{
  question: string;
  answer: string;
}>();

const active = ref(false);
</script>

<template>
  <div>
    <div
      @click="active = !active"
      class="flex cursor-pointer flex-col py-8 border-b border-text"
    >
      <div class="flex justify-between items-center">
        <span class="text-xl lg:text-2xl font-bold">{{ question }}</span>
        <PhosphorIconControl
          :class="{ 'text-accent': true, 'rotate-180': !active }"
          :size="32"
        />
      </div>
      <span v-if="active" class="mt-8 lg:text-lg">{{ answer }}</span>
    </div>
  </div>
</template>
