<template>
  <div class="flex space-x-2 items-center">
    <button
      v-for="loc in locales"
      :key="loc.code"
      @click="setLocale(loc.code)"
      class="text-lg text-white"
      :class="{ 'font-bold underline': locale === loc.code }"
    >
      {{ labelMap[loc.code] || loc.name }}
    </button>
  </div>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n()
const labelMap = { uz: 'Uz', ru: 'Py' }
</script>