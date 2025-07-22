<script setup lang="ts">
defineProps<{
  text: string;
  check: boolean;
  delay?: number;
}>();
</script>

<template>
  <li
    class="flex items-center gap-3 lg:gap-4 text-sm lg:text-base font-medium group hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 rounded-xl p-2 lg:p-3 transition-all duration-500 lg:hover:scale-102 animate-fade-in-item"
    :style="{ animationDelay: `${delay || 0}ms` }"
  >
    <!-- Enhanced icon with tech styling -->
    <div
      class="relative flex-shrink-0 lg:group-hover:scale-110 transition-transform duration-300"
    >
      <!-- Glow effect -->
      <div
        class="absolute inset-0 bg-emerald-400/30 rounded-full blur-md opacity-0 lg:group-hover:opacity-100 transition-all duration-500 animate-pulse"
        v-if="check"
      ></div>

      <!-- Icon container -->
      <div
        class="relative bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full p-1.5 lg:p-2 border border-emerald-400/30 backdrop-blur-sm lg:group-hover:border-emerald-400/60 transition-all duration-300"
        v-if="check"
      >
        <!-- Inner glow -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
        ></div>

        <PhosphorIconCheck
          class="text-emerald-400 relative z-10 lg:group-hover:text-emerald-300 transition-colors duration-300"
          :size="16"
        />
      </div>

      <div
        class="relative bg-red-500/20 rounded-full p-1.5 lg:p-2 border border-red-400/30"
        v-else
      >
        <PhosphorIconX class="text-red-400" :size="16" />
      </div>
    </div>

    <!-- Enhanced text with better typography -->
    <span
      :class="{
        'line-through text-textSecondary': !check,
        'text-text lg:group-hover:text-white transition-colors duration-300':
          check,
      }"
      class="leading-relaxed flex-1 lg:group-hover:translate-x-1 transition-transform duration-300"
    >
      {{ text }}
    </span>

    <!-- Tech accent indicator -->
    <div
      class="lg:flex items-center gap-2 opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-x-2 lg:group-hover:translate-x-0 hidden"
      v-if="check"
    >
      <!-- Animated dots -->
      <div class="flex gap-1">
        <div
          class="w-1 h-1 bg-emerald-400 rounded-full animate-ping"
          style="animation-delay: 0ms"
        ></div>
        <div
          class="w-1 h-1 bg-blue-400 rounded-full animate-ping"
          style="animation-delay: 200ms"
        ></div>
        <div
          class="w-1 h-1 bg-purple-400 rounded-full animate-ping"
          style="animation-delay: 400ms"
        ></div>
      </div>

      <!-- Progress bar -->
      <div
        class="w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 lg:group-hover:w-4 transition-all duration-500 rounded-full"
      ></div>
    </div>
  </li>
</template>

<style scoped>
@keyframes fade-in-item {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-item {
  animation: fade-in-item 0.6s ease-out forwards;
  opacity: 0;
}

.lg\:hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>
