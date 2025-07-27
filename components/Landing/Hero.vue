<template>
  <section
    class="w-screen min-h-screen md:h-[90%] bg-primary relative rounded-lg md:rounded-b-[68px]"
  >
    <div class="absolute h-full w-full inset-0">
      <img
        src="/assets/images/backgrounds/eiffel.png"
        class="absolute -bottom-6 left-[15%] hidden md:block"
        alt="Eiffel tower pattern"
      />
      <img
        src="/assets/images/backgrounds/patented.png"
        class="absolute bottom-[10%] right-4 md:right-[15%]"
        alt="Patent background"
      />
    </div>
    <div class="mx-auto max-w-screen-xl relative h-screen flex">
      <div
        class="flex flex-col space-y-8 w-full h-full items-center md:items-center justify-center md:w-[60%] md:py-[20%] bg-primary/80 px-4 py-12"
      >
        <h1 class="text-white text-xl md:text-6xl font-semibold leading-tight w-full">
          {{ $t('hero.title') }}
        </h1>
        <p class="text-white text-xl">
          {{ $t('hero.description') }}
        </p>
        <div
          class="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-8 w-full" 
        >
          <!-- Contact Button -->
          <a
            href="/"
            class="px-6 py-2 text-white text-xl border border-white rounded-full flex items-center space-x-4 justify-center"
          >
            <span>{{ $t('hero.contactBtn') }}</span>
            <i class="bx bx-right-arrow-alt text-2xl" aria-hidden="true"></i>
          </a>

          <!-- Videos Button -->
          <button
            @click="openModal"
            
            class="px-6 py-2 text-white text-xl rounded-full flex items-center space-x-4 justify-center "
          >
            <span
              class="bg-white/10 rounded-full p-2 flex items-center justify-center "
            >
              <i class="bx bxs-right-arrow text-xl" aria-hidden="true"></i>
            </span>
            <span>{{ $t('hero.videosBtn') }}</span>
            
          </button>
        </div>
      </div>
    </div>
    <div
      class="absolute -bottom-[22px] left-1/2 -translate-x-1/2 max-w-screen-xl hidden md:block"
    >
      <LandingPartners />
    </div>
  </section>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
    @click="closeModal"
  >
    <button
      class="absolute top-6 right-10 text-white text-4xl font-bold focus:outline-none"
      @click.stop="closeModal"
      aria-label="Close"
    >
      &times;
    </button>
    <div
      class="w-[90vw] max-w-2xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
      @click.stop
    >
      <iframe
        :src="youtubeEmbedUrl"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        class="w-full h-full"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const youtubeUrl = ref("https://www.youtube.com/watch?v=QgJVOQBxSr0");

function openModal() {
  isOpen.value = true;
}
function closeModal() {
  isOpen.value = false;
}

const youtubeEmbedUrl = computed(() => {
  // Extract video ID
  const url = youtubeUrl.value;
  let videoId = "";
  if (url.includes("youtube.com")) {
    const match = url.match(/[?&]v=([^&]+)/);
    videoId = match ? match[1] : "";
  } else if (url.includes("youtu.be")) {
    videoId = url.split("/").pop();
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : "";
});
</script>
