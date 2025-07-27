<template>
  <section
    class="w-screen md:h-[90%] bg-primary relative rounded-lg md:rounded-b-[68px] py-12"
  >
    <div
      class="mx-auto max-w-screen-xl relative flex flex-col px-4 md:px-0 items-center justify-center"
    > 
        <h2 class="text-3xl md:text-4xl max-w-3xl font-semibold text-center mb-6">{{$t('services.title')}} <span class="text-light">{{ $t('services.highlight') }}</span></h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="flex flex-col justify-center gap-6 md:gap-12 w-full h-full">
          <h3
            class="bg-light text-primary w=full md:w-[90%] md:self-start rounded-xl text-center py-2 text-2xl md:text-4xl h-26"
          >
            {{ $t('services.items[0]') }}
          </h3>
          <h3
            class="bg-light text-primary w=full md:w-[90%] md:self-end rounded-xl text-center py-2 text-2xl md:text-4xl h-26"
          >
           {{ $t('services.items[1]') }}
          </h3>
          <h3
            class="bg-light text-primary w=full md:w-[90%] md:self-start rounded-xl text-center py-2 text-2xl md:text-4xl h-26"
          >
            {{ $t('services.items[2]') }}
          </h3>
        </div>
        <div class="rounded-xl overflow-hidden hidden md:flex">
          <img
            src="/assets/images/brand.png"
            alt="brand image"
            class="object-cover"
          />
        </div>
        <div class="flex flex-col justify-center gap-6 md:gap-12 w-full h-full">
          <h3
            class="bg-light text-primary w=full md:w-[90%] md:self-end rounded-xl text-center py-2 text-2xl md:text-4xl h-26"
          >
            {{ $t('services.items[3]') }}
          </h3>
          <h3
            class="bg-light text-primary w=full md:w-[90%] md:self-start rounded-xl text-center py-2 text-2xl md:text-4xl h-26"
          >
           {{ $t('services.items[4]') }}
          </h3>
          <h3
            class="bg-light text-primary w=full md:w-[90%] md:self-end rounded-xl text-center py-2 text-2xl md:text-4xl h-26"
          >
           {{ $t('services.items[5]') }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
