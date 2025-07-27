<script setup lang="ts">
import LanguageSwitchy from './LanguageSwitch.vue';

</script>

<template>
  <div class="w-full fixed top-0 bg-primary z-40 shadow-sm">
    <div
      class="mx-auto max-w-screen-xl flex justify-between py-2 md:py-4 px-4 md:px-0"
    >
      <a href="/" class="flex space-x-2 items-center">
        <img src="/logo-white.svg" alt="PatentLab Logo" />
        <h2 class="text-white font-semibold text-4xl">PatentLab</h2>
      </a>
      <div class="flex md:space-y-0 space-x-2 md:space-x-4 items-center">
        <div class="flex space-x-2 items-center">
          <a
            href="tel:+998881027744"
            class="text-dark bg-accent px-2 md:px-4 py-2 rounded-md md:rounded-full flex items-center space-x-2 text-xl"
          >
            <i class="bx bxs-phone text-xl" aria-hidden="true"></i>
            <span class="hidden md:flex">+998 88 102 77 44</span>
          </a>
          <a
            href="https://t.me/Patentlab_uzb" target="_blank"
            rel="noopener"
            class="text-dark bg-accent px-2 md:px-4 py-2 rounded-md md:rounded-full flex items-center space-x-2 text-lg"
          >
            <i class="bx bxl-telegram text-xl" aria-hidden="true"></i>
            <span class="hidden md:block">{{ $t('nav.contactUs') }}</span>
          </a>
        </div>
        <LanguageSwitch />
      </div>
    </div>
  </div>
</template>
