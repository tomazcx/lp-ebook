<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="relative group inline-block">
    <!-- Outer glow effect -->
    <div
      class="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full blur-sm opacity-40 lg:group-hover:opacity-70 transition-all duration-500 animate-pulse"
    ></div>

    <!-- Main badge container -->
    <div
      class="relative bg-gradient-to-r from-orange-500/25 via-yellow-500/25 to-orange-500/25 backdrop-blur-md border border-orange-400/50 flex justify-center items-center px-3 lg:px-5 py-1.5 lg:py-2.5 text-xs font-bold rounded-full shadow-2xl shadow-orange-500/30 lg:group-hover:shadow-orange-400/50 transition-all duration-500 w-fit lg:group-hover:scale-105"
    >
      <!-- Tech grid pattern overlay -->
      <div
        class="absolute inset-0 rounded-full opacity-20"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 255, 255, 0.2) 1px,
            transparent 0
          );
          background-size: 6px 6px;
        "
      ></div>

      <!-- Inner glow -->
      <div
        class="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-orange-300/15 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <!-- Animated icon with enhanced styling -->
      <div class="relative flex items-center gap-2">
        <!-- Pulsing dot with enhanced animation -->
        <div class="relative">
          <div class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <div
            class="absolute inset-0 w-2 h-2 bg-orange-300 rounded-full animate-ping opacity-50"
          ></div>
        </div>

        <!-- Enhanced text with gradient -->
        <span
          class="text-center uppercase whitespace-nowrap tracking-widest relative z-10 font-black text-transparent bg-gradient-to-r from-orange-200 via-yellow-200 to-orange-200 bg-clip-text lg:group-hover:from-orange-100 lg:group-hover:via-yellow-100 lg:group-hover:to-orange-100 transition-all duration-300"
        >
          {{ text }}
        </span>

        <!-- Chevron indicator - hidden on mobile -->
        <div
          class="w-0 lg:group-hover:w-3 transition-all duration-300 overflow-hidden hidden lg:block"
        >
          <PhosphorIconCaretRight class="text-orange-300" :size="12" />
        </div>
      </div>

      <!-- Corner accent particles -->
      <div
        class="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-70 animate-ping"
      ></div>
      <div
        class="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-orange-400 rounded-full opacity-50 animate-ping"
        style="animation-delay: 1s"
      ></div>

      <!-- Side accent lines - hidden on mobile -->
      <div
        class="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-orange-400 lg:group-hover:w-2 transition-all duration-300 -translate-x-2 hidden lg:block"
      ></div>
      <div
        class="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-orange-400 lg:group-hover:w-2 transition-all duration-300 translate-x-2 hidden lg:block"
      ></div>
    </div>

    <!-- Status indicator -->
    <div
      class="absolute -top-1 -left-1 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-emerald-400 rounded-full opacity-80 animate-pulse border border-emerald-300"
    ></div>
  </div>
</template>

<style scoped>
@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
</style>
