<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");
const endDate = new Date("2024-08-21T13:50:00").getTime();
let timer = null;

const startCountdown = () => {
  timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance > 0) {
      const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      hours.value = String(h).padStart(2, "0");
      minutes.value = String(m).padStart(2, "0");
      seconds.value = String(s).padStart(2, "0");
    } else {
      clearInterval(timer);
      hours.value = "00";
      minutes.value = "00";
      seconds.value = "00";
    }
  }, 1000);
};

onMounted(() => {
  startCountdown();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <header
    class="z-50 flex justify-center shadow-lg bg-backgroundSecondary left-1/2 -translate-x-1/2 items-center w-full lg:gap-12 gap-4 fixed top-0 py-4 px-4"
  >
    <!--    <div class="hidden lg:block">
      <CounterTimer :hours :minutes :seconds />
    </div> -->

    <div class="font-bold text-sm lg:text-xl text-center">
      <span class="bg-secondary rounded px-4 py-0.5 mr-1">50%</span> de desconto
      <span class="inline lg:hidden"><span class="text-xl">·</span> PROMOÇÃO BLACK NOVEMBER</span>
    </div>

    <h1 class="font-bold hidden lg:block text-xs lg:text-xl text-center">
      APROVEITE A PROMOÇÃO BLACK NOVEMBER
    </h1>

    <!--    <div class="block lg:hidden">
      <CounterTimer :hours :minutes :seconds />
    </div> -->

    <a
      href="#plans"
      class="rounded-lg hidden lg:block py-2 px-8 bg-cta hover:bg-ctaSecondary text-base lg:text-xl font-bold"
      >Comprar com desconto</a
    >
  </header>
</template>
