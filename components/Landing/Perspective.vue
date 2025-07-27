<template>
  <section class="w-screen h-full max-w-screen overflow-hidden relative">
    <div class="absolute inset-0 -top-[80px] w-full h-full -z-10">
      <img
        src="/assets/images/backgrounds/bgpattern.png"
        class="w-full object-scaledown opacity-80"
        alt="background pattern"
      />
    </div>
    <div class="max-w-screen-xl mx-auto w-full py-20 px-4 md:px-0">
      <h2
        class="w-full max-w-2xl mx-auto text-center text-primary text-2xl md:text-5xl font-semibold mb-6"
      >
        {{$t('perspective.title')}}
      </h2>
      <p class="text-lg text-center leading-loose">
        {{$t('perspective.desc')}}
      </p>
      <div
        class="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-[15%] md:justify-start py-6"
      >
        <div
          class="flex flex-col space-y-2 items-start justify-center bg-light p-4 w-full md:w-1/3 rounded-xl"
        >
          <h3
            class="font-jakarta text-[50px] leading-loose font-extrabold text-light drop-shadow-[0_1px_1px_rgba(17,128,128,1)]"
          >
            {{$t('perspective.items[0].number')}}
          </h3>
          <p class="text-xl leading-loose">
            {{$t('perspective.items[0].text')}}
          </p>
        </div>
        <div
          class="flex flex-col space-y-2 items-start justify-center bg-light p-4 w-full md:w-1/3 rounded-xl"
        >
          <h3
            class="font-jakarta text-[50px] leading-loose font-extrabold text-light drop-shadow-[0_1px_1px_rgba(17,128,128,1)]"
          >
            {{$t('perspective.items[1].number')}}
          </h3>
          <p class="text-xl leading-loose">
           {{$t('perspective.items[1].text')}}
          </p>
        </div>
      </div>
      <div
        class="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-[15%] md:justify-end py-6"
      >
        <div
          class="flex flex-col space-y-2 items-start justify-center bg-light p-4 w-full md:w-1/3 rounded-xl"
        >
          <h3
            class="font-jakarta text-[50px] leading-loose font-extrabold text-light drop-shadow-[0_1px_1px_rgba(17,128,128,1)]"
          >
            {{$t('perspective.items[2].number')}}
          </h3>
          <p class="text-xl leading-loose">
            {{$t('perspective.items[2].text')}}
          </p>
        </div>
        <div
          class="flex flex-col space-y-2 items-start justify-center bg-light p-4 w-full md:w-1/3 rounded-xl"
        >
          <h3
            class="font-jakarta text-[50px] leading-loose font-extrabold text-light drop-shadow-[0_1px_1px_rgba(17,128,128,1)]"
          >
            {{$t('perspective.items[3].number')}}
          </h3>
          <p class="text-xl leading-loose">
           {{$t('perspective.items[3].text')}}
          </p>
        </div>
      </div>
    </div>
    <div class="w-full overflow-hidden pb-8">
      <div class="grid grid-cols-3 gap-6 w-[105%] mb-6 mx-auto">
        <img
          src="/assets/images/brands/2.png"
          alt="brand showcase"
          class="w-full h-56 object-scaledown rounded-xl"
        />
        <img
          src="/assets/images/brands/3.png"
          alt="brand showcase"
          class="w-full h-56 object-scaledown rounded-xl"
        />
        <img
          src="/assets/images/brands/5.png"
          alt="brand showcase"
          class="w-full h-56 object-scaledown rounded-xl"
        />
      </div>
      <div class="flex gap-6 w-full justify-center items-center hidden md:flex max-w-[80%] mx-auto">
        <img
          src="/assets/images/brands/1.png"
          alt="brand showcase"
          class="w-full h-56 object-scaledown rounded-xl"
        />
        <img
          src="/assets/images/brands/4.png"
          alt="brand showcase"
          class="w-full h-56 object-scaledown rounded-xl"
        />
      </div>
    </div>
  </section>
</template>
