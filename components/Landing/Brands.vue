<template>
  <div class="w-full">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div
        v-for="(client, index) in clients"
        :key="index"
        class="flex flex-col items-center justify-center p-4 rounded-lg"
        :class="{ 'hidden md:flex': !showAll && index >= 4 }"
      >
        <img :src="client.logo" class="w-[160px]" :alt="client.alt" />
        <p class="whitespace-nowrap text-black text-lg font-semibold">
          {{ client.name }}
        </p>
      </div>
    </div>

    <!-- Toggle Button: Only shows on mobile -->
    <div class="mt-4 text-center md:hidden">
      <button
        class="px-6 py-2 text-white bg-primary rounded-full"
        @click="toggleShow"
      >
        {{ showAll ? "Yopish" : "Barchasini ko‘rish" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import evos from "@/assets/images/clients/evos.png";
import safia from "@/assets/images/clients/safia.png";
import goldenhouse from "@/assets/images/clients/goldenhouse.png";
import sag from "@/assets/images/clients/SAG.png";
import asialuxe from "@/assets/images/clients/asialuxe.png";
import evroplaza from "@/assets/images/clients/evroplaza.png";
import ansormed from "@/assets/images/clients/ansormed.png";
import zarhal from "@/assets/images/clients/zarhal.png";
import medexpert from "@/assets/images/clients/medexpert.png";
import turfa from "@/assets/images/clients/turfa.png";
import newport from "@/assets/images/clients/newport.png";
import zira from "@/assets/images/clients/zira.png";

const showAll = ref(false);
const isMediumAndUp = ref(false);


const toggleShow = () => {
  showAll.value = !showAll.value
}
const clients = [
  { logo: evos, name: "EVOS", alt: "Evos logo" },
  { logo: safia, name: "Safia", alt: "Safia logo" },
  { logo: goldenhouse, name: "Golden House", alt: "Golden House logo" },
  { logo: sag, name: "SAG", alt: "SAG logo" },
  { logo: asialuxe, name: "Asialuxe Travel", alt: "Asialuxe logo" },
  { logo: evroplaza, name: "Evro Plaza", alt: "Evro Plaza logo" },
  { logo: ansormed, name: "Ansor Med", alt: "Ansor Med logo" },
  { logo: zarhal, name: "Zarhal Restaurant", alt: "Zarhal Restaurant logo" },
  { logo: medexpert, name: "Med Expert", alt: "Med expert logo" },
  { logo: turfa, name: "Turfa Tour", alt: "Turfa logo" },
  { logo: newport, name: "Newport", alt: "Newport logo" },
  { logo: zira, name: "Zi-ra", alt: "Zira logo" },
];

// Track screen size to always show all on medium+
onMounted(() => {
  const checkScreen = () => {
    isMediumAndUp.value = window.innerWidth >= 768;
  };
  checkScreen();
  window.addEventListener("resize", checkScreen);
});
</script>
