<template>
  <section class="w-screen h-full max-w-screen overflow-hidden relative">
    <div class="absolute inset-0 -top-[80px] w-full h-full -z-10">
      <img
        src="/assets/images/backgrounds/bgpattern.png"
        class="w-full object-cover opacity-80"
        alt="background pattern"
      />
    </div>
    <div class="max-w-screen-xl mx-auto w-full py-20 px-4 md:px-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="bg-primary text-white rounded-lg flex flex-col space-y-4 w-full h-full p-4 items-start justify-center"
        >
          <h2 class="text-2xl md:text-4xl">{{ $t('stats.experience.value') }}</h2>
          <p class="text-lg md:text-xl">
            {{ $t('stats.experience.desc') }}
          </p>
        </div>
        <!-- <div
          class="bg-primary text-white rounded-lg flex flex-col space-y-4 w-full h-full p-4 items-start justify-center"
        >
          <h2 class="text-2xl md:text-4xl">{{ $t('stats.team.value') }}</h2>
          <p class="text-lg md:text-xl">{{ $t('stats.team.desc') }}</p>
        </div> -->
        <div
          class="bg-primary text-white rounded-lg flex flex-col space-y-4 w-full h-full p-4 items-start justify-center"
        >
          <h2 class="text-2xl md:text-4xl">{{ $t('stats.clients.value') }}</h2>
          <p class="text-lg md:text-xl">
            {{ $t('stats.team.desc') }}
          </p>
        </div>
      </div>
      <div class="flex flex-col space-y-6 items-center justify-center mt-10">
        <h1
          class="text-2xl md:text-5xl text-primary leading-loose font-semibold text-center"
        >
          <span class="text-dark">{{ $t('trustedBy.titleFirst') }}</span>  {{ $t('trustedBy.titleRest') }}
        </h1>
        <div class="flex justify-between md:flex-col gap-2 md:gap-6 ">
            <div class="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 w-1/2 md:w-full">
          <div
            class="flex p-2 px-4 items-center justify-center bg-primary text-white text-lg md:text-xl rounded-full w-full whitespace-nowrap"
          >
            <p>{{$t('sectors[0]')}}</p>
          </div>
          <div
            class="flex p-2 px-4 items-center justify-center bg-primary text-white text-lg md:text-xl rounded-full w-full whitespace-nowrap"
          >
            <p>{{$t('sectors[1]')}}</p>
          </div>
          <div
            class="flex p-2 px-4 items-center justify-center bg-primary text-white text-lg md:text-xl rounded-full w-full whitespace-nowrap"
          >
            <p>{{$t('sectors[2]')}}</p>
          </div>
          <div
            class="flex p-2 px-4 items-center justify-center bg-primary text-white text-lg md:text-xl rounded-full w-full whitespace-nowrap"
          >
            <p>{{$t('sectors[3]')}}</p>
          </div>
          <div
            class="flex p-2 px-4 items-center justify-center bg-primary text-white text-lg md:text-xl rounded-full w-full whitespace-nowrap"
          >
            <p>{{$t('sectors[4]')}}</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 w-1/2 md:w-full">
          <div
            class="flex p-2 px-4 items-center justify-center bg-primary text-white md:col-start-2 text-lg md:text-xl rounded-full w-full whitespace-nowrap"
          >
            <p>{{$t('sectors[5]')}}</p>
          </div>
          <div
            class="flex p-2 px-4 items-center justify-center bg-primary text-white text-lg md:text-xl rounded-full w-full whitespace-nowrap"
          >
            <p>{{$t('sectors[6]')}}</p>
          </div>
          <div
            class="flex p-2 px-4 items-center justify-center bg-primary text-white text-lg md:text-xl rounded-full w-full whitespace-nowrap"
          >
            <p>{{$t('sectors[7]')}}</p>
          </div>
          <div
            class="flex p-2 px-4 items-center justify-center bg-primary text-white text-lg md:text-xl rounded-full w-full whitespace-nowrap"
          >
            <p>{{$t('sectors[8]')}}</p>
          </div>
        
        </div>
        </div>
        <LandingBrands/>
      </div>
    </div>
  </section>
</template>
<script setup>

</script>