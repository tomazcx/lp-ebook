<script setup lang="ts">
const show = ref(false);

const emit = defineEmits(['accept'])

onMounted(() => {
  const answer = localStorage.getItem("pixel-policy");

  if (!answer) {
    show.value = true;
  }
});

const accept = () => {
  show.value = false;
  localStorage.setItem("pixel-policy", "true")
  emit('accept')
};

const decline = () => {
  show.value = false;
  localStorage.setItem("pixel-policy", "false")
};
</script>

<template>
  <div
    v-if="show"
    class="bg-backgroundSecondary z-50 w-11/12 fixed bottom-12 left-1/2 -translate-x-1/2 lg:gap-24 text-sm lg:text-base flex-col lg:flex-row shadow-lg rounded-lg border border-accent text-text py-2 px-4 gap-4 flex justify-between"
  >
    <span
      >Nós utilizamos o Meta Pixel para coletar informações de navegação e
      ajudar a melhorar nossos serviços. Esta coleta não será usada para
      personalização de conteúdos. 
      </span
    >
    <div class="flex items-center lg:gap-4 flex-col lg:flex-row gap-2">
      <button
        @click="accept"
        class="bg-accent hover:bg-primary w-full transition-colors px-4 rounded-lg py-2 lg:py-1"
      >
        Aceitar
      </button>
      <button
        @click="decline"
        class="border border-accent hover:bg-primary hover:border-primary w-full transition-colors px-4 rounded-lg py-2 lg:py-1"
      >
        Recusar
      </button>
    </div>
  </div>
</template>
