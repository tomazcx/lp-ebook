<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  icon: string;
  label: string;
}>();

// Calcular categoria automaticamente baseada no label
const category = computed(() => {
  const label = props.label.toLowerCase();

  if (
    label.includes("html") ||
    label.includes("css") ||
    label.includes("react")
  )
    return "Frontend";
  if (
    label.includes("node") ||
    label.includes("nest") ||
    label.includes("sql") ||
    label.includes("banco")
  )
    return "Backend";
  if (label.includes("javascript") || label.includes("typescript"))
    return "Core";
  if (label.includes("bootstrap") || label.includes("tailwind"))
    return "Framework";
  if (label.includes("styled")) return "Styling";
  if (label.includes("git")) return "Tools";
  if (label.includes("docker")) return "DevOps";

  return "Tech";
});

// Simulação de index para animação
const animationDelay = computed(() => {
  return Math.random() * 500; // Delay aleatório entre 0-500ms
});
</script>

<template>
  <li
    class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-backgroundSecondary to-backgroundSecondary/80 backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:scale-105 animate-slide-in"
    :style="{ animationDelay: `${animationDelay}ms` }"
  >
    <!-- Glow effect on hover -->
    <div
      class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"
    ></div>

    <!-- Card content -->
    <div class="relative flex items-center gap-4 p-4 lg:p-5">
      <!-- Icon container with tech effects -->
      <div class="relative flex-shrink-0">
        <!-- Icon glow background -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150"
        ></div>

        <!-- Icon background -->
        <div
          class="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-3 lg:p-4 group-hover:border-emerald-400/40 transition-all duration-300"
        >
          <!-- Tech pattern overlay -->
          <div
            class="absolute inset-0 rounded-xl opacity-20"
            style="
              background-image: radial-gradient(
                circle at 1px 1px,
                rgba(34, 197, 94, 0.3) 1px,
                transparent 0
              );
              background-size: 8px 8px;
            "
          ></div>

          <!-- Icon with enhanced styling -->
          <img
            :width="icon.split('.')[1] === 'png' ? '36px' : '28px'"
            :height="icon.split('.')[1] === 'png' ? '36px' : '28px'"
            :src="'/' + icon"
            :alt="label"
            class="relative z-10 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300 group-hover:scale-110"
            loading="lazy"
          />

          <!-- Corner accent -->
          <div
            class="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"
          ></div>
        </div>
      </div>

      <!-- Content section -->
      <div class="flex-1 min-w-0">
        <!-- Category badge -->
        <div
          class="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1 mb-2"
        >
          <div
            class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"
          ></div>
          <span class="text-emerald-400 text-xs font-medium">{{
            category
          }}</span>
        </div>

        <!-- Tech name -->
        <h4
          class="text-base lg:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300"
        >
          {{ label }}
        </h4>

        <!-- Status indicator -->
        <div
          class="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div class="flex gap-1">
            <div class="w-1 h-1 bg-emerald-400 rounded-full animate-ping"></div>
            <div
              class="w-1 h-1 bg-blue-400 rounded-full animate-ping delay-100"
            ></div>
            <div
              class="w-1 h-1 bg-purple-400 rounded-full animate-ping delay-200"
            ></div>
          </div>
          <span class="text-emerald-400 text-xs font-mono">READY_TO_LEARN</span>
        </div>
      </div>

      <!-- Progress indicator -->
      <div class="flex-shrink-0 hidden lg:block">
        <div
          class="w-8 h-8 rounded-full border-2 border-emerald-500/20 bg-emerald-500/10 flex items-center justify-center group-hover:border-emerald-400/60 group-hover:bg-emerald-500/20 transition-all duration-300"
        >
          <PhosphorIconCheck
            class="text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
            :size="16"
          />
        </div>
      </div>
    </div>

    <!-- Animated background elements -->
    <div
      class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:w-full transition-all duration-700"
    ></div>
  </li>
</template>

<style scoped>
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.6s ease-out forwards;
  opacity: 0;
}
</style>
