<template>
  <section
    class="w-screen min-h-screen md:h-[90%] bg-primary relative rounded-lg md:rounded-b-[68px] py-24"
  >
    <div
      class="flex flex-col space-y-12 w-full max-w-screen-xl mx-auto px-4 md:px-0"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="flex flex-col md:col-span-2 w-full items-start justify-start pb-6 order-2 md:order-none"
        >
          <div
            class="flex w-[78px] h-[78px] items-center justify-center rounded-full bg-light mb-8"
          >
            <img
              src="/assets/images/icons/050-worldwide.png"
              alt="globe icon"
            />
          </div>
          
          <h2 class="text-2xl font-semibold text-light md:text-4xl mb-6">
            {{$t('howTo.section1.title')}}
          </h2>
          <p class="text-lg text-light leading-loose md:text-2xl">
            {{$t('howTo.section1.text')}}
          </p>
        </div>
        <div class="relative w-full h-[460px]">
          <div
            class="bg-light h-[95%] absolute bottom-0 right-0 w-[95%] rounded-xl z-10 order-1 md:order-none"
          ></div>

          <img
            src="/assets/images/certificate.jpg"
            alt="patent certificate z-40"
            class="absolute top-0 left-0 h-[95%] w-[95%] z-20 rounded-xl cursor-pointer"
            @click="openModal"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div class="relative w-full h-[400px]  flex items-center justify-start">
          <img
            src="/assets/images/graph.png"
            alt="patent certificate z-40"
            class="w-full "
          />
        </div>
        <div
          class="flex flex-col space-y-6 w-full items-start justify-center pb-6 md:col-span-2"
        >
          <h2 class="text-2xl font-semibold text-light md:text-4xl">
            {{$t('howTo.section2.title')}}
          </h2>
          <ul class="text-lg text-light leading-loose md:text-2xl">
            <li class="flex items-center space-x-2">
              <span>❌</span
              ><span> {{$t('howTo.section2.bullets[0]')}} </span>
            </li>
            <li class="flex items-center space-x-2">
              <span>❌</span>
              <span
                >{{$t('howTo.section2.bullets[1]')}}</span
              >
            </li>
            <li class="flex items-center space-x-2"><span>❌</span><span>{{$t('howTo.section2.bullets[2]')}}</span></li>
          </ul>
        </div>
      </div>
      <div class="flex items-center justify-center w-full ">
        <a href="/" class="w-[320px] text-primary bg-light py-2 flex items-center justify-center text-xl rounded-full">{{$t('howTo.button')}}</a>
      </div>
    </div>
     
  </section>
    <!-- MODAL OVERLAY (Tailwind) -->
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
    <img
      src="/assets/images/certificate.jpg"
      alt="Patent certificate"
      class="max-w-[100vw] max-h-[95vh] shadow-2xl"
      @click.stop
    />
  </div>
</template>
<script setup>
const isOpen = ref(false)
function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}</script>