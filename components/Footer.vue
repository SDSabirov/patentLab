<template>
  <section class="w-full bg-primary py-12 relative">
    <div class="absolute inset-0">
      <img
        src="/assets/images/map.png"
        alt="map"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="w-full max-w-screen-xl mx-auto px-4 md:px-0">
      <div class="flex flex-col md:flex-row md:items-between justify-center">
        <div class="w-full flex flex-col gap-4 items-center justify-center">
          <img src="/logo-white.svg" alt="logo" class="w-[70px]" />
          <h2 class="text-white font-semibold text-4xl">PatentLab</h2>
          <p class="text-lg text-white">Patentlash va yuridik hizmatlar</p>
        </div>
        <div class="grid grid-cols-2 gap-4 w-full mt-4 md:mt-0">
          <ul class="text-lg text-white flex flex-col gap-2 items-start">
            <li><a href="/">Asosiy</a></li>
            <li><a href="/">Xizmatlar</a></li>
            <li><a href="/">Natija</a></li>
          </ul>
          <ul class="text-lg text-white flex flex-col gap-2 items-start">
            <li><a href="/">Jarayon</a></li>
            <li><a href="/">Afzaliklarimiz</a></li>
            <li><a href="/">Savollarga javob</a></li>
          </ul>
        </div>
        <div class="w-full flex flex-col gap-4 items-center mt-4 md:mt-0">
          <a
            href="tel:+998881027744"
            class="text-white text-lg flex items-center space-x-2 py-2 h-8"
            ><span class="flex items-center"
              ><i class="bx bxs-phone" aria-hidden="true"></i></span
            ><span>+998 88 102 77 44</span></a
          >
          <a
            href="https://t.me/Patentlab_uzb"
            target="_blank"
            rel="noopener"
            class="text-dark bg-accent px-6 py-2 rounded-full flex items-center space-x-2 text-lg w-fit"
          >
            <i class="bx bxl-telegram text-xl" aria-hidden="true"></i>
            <span class="">Telegram</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
