<template>
  <section class="w-full bg-white py-12">
    <div
      class="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center space-y-6 px-4 md:px-0"
    >
      <h1
        class="text-2xl md:text-5xl font-semibold w-full text-center max-w-3xl"
      >
        {{ $t('keyPoints2.title.main') }}
        <span class="text-primary">{{ $t('keyPoints2.title.highlight') }}</span>
      </h1>
      <div
        class="flex flex-col space-y-4 justify-between md:flex-row md:space-y-0 w-full gap-4"
      ><div
          class="w-full md:w-1/2 bg-white border border-gray-200 shadow-md flex flex-col p-4 px-6 rounded-xl space-y-6"
        >
          <div class="flex space-x-4 items-center">
            <div
              class="h-12 w-12 bg-light border border-primary text-primary flex items-center justify-center p-2 rounded-full"
            >
              <p class="font-jakarta font-semibold text-2xl">{{ $t('keyPoints2.points[0].number') }}</p>
            </div>
            <h2
              class="font-semibold text-2xl md:text-3xl text-primary leading-loose tracking-wide"
            >
              {{ $t('keyPoints2.points[0].title') }}
            </h2>
          </div>
          <p class="text-black text-xl tracking-wide">
            {{ $t('keyPoints2.points[0].desc') }}
          </p>
        </div>
        <div
          class="w-full md:w-1/2 bg-white border border-gray-200 shadow-md flex flex-col p-4 px-6 rounded-xl space-y-6"
        >   
            
          <div class="flex space-x-4 items-center">
            <div
              class="h-12 w-12 bg-light border border-primary text-primary flex items-center justify-center p-2 rounded-full"
            >
              <p class="font-jakarta font-semibold text-2xl">2</p>
            </div>
            <h2
              class="font-semibold text-2xl md:text-3xl text-primary leading-loose tracking-wide"
            >
            {{ $t('keyPoints2.points[1].title') }}
            </h2>
          </div>
          <p class="text-black text-xl tracking-wide">
            {{ $t('keyPoints2.points[1].desc') }}
          </p>
        </div>
        
        
        
      </div>
      <div
        class="flex flex-col space-y-4 justify-between md:flex-row md:space-y-0 w-full gap-4"
      >
        <div
          class="w-full md:w-1/2 bg-white border border-gray-200 shadow-md flex flex-col p-4 px-6 rounded-xl space-y-6"
        >
          <div class="flex space-x-4 items-center">
            <div
              class="h-12 w-12 bg-light border border-primary text-primary flex items-center justify-center p-2 rounded-full"
            >
              <p class="font-jakarta font-semibold text-2xl">3</p>
            </div>
            <h2
              class="font-semibold text-2xl md:text-3xl text-primary leading-loose tracking-wide"
            >
            {{ $t('keyPoints2.points[2].title') }}
            </h2>
          </div>
          <p class="text-black text-xl tracking-wide">
            {{ $t('keyPoints2.points[2].desc') }}
          </p>
        </div>
        <div
          class="w-full md:w-1/2 bg-white border border-gray-200 shadow-md flex flex-col p-4 px-6 rounded-xl space-y-6"
        >
          <div class="flex space-x-4 items-center">
            <div
              class="h-12 w-12 bg-light border border-primary text-primary flex items-center justify-center p-2 rounded-full"
            >
              <p class="font-jakarta font-semibold text-2xl">4</p>
            </div>
            <h2
              class="font-semibold text-2xl md:text-3xl text-primary leading-loose tracking-wide"
            >
            {{ $t('keyPoints2.points[3].title') }}
            </h2>
          </div>
          <p class="text-black text-xl tracking-wide">
            {{ $t('keyPoints2.points[3].desc') }}
          </p>
        </div>
        
        
      </div>
      <div
        class="flex flex-col space-y-4 justify-between md:flex-row md:space-y-0 w-full gap-4 md:justify-center"
      >
        <div
          class="w-full md:w-1/2 bg-white border border-gray-200 shadow-md flex flex-col p-4 px-6 rounded-xl space-y-6"
        >
          <div class="flex space-x-4 items-center">
            <div
              class="h-12 w-12 bg-light border border-primary text-primary flex items-center justify-center p-2 rounded-full"
            >
              <p class="font-jakarta font-semibold text-2xl">5</p>
            </div>
            <h2
              class="font-semibold text-2xl md:text-3xl text-primary leading-loose tracking-wide"
            >
           {{ $t('keyPoints2.points[4].title') }}
            </h2>
          </div>
          <p class="text-black text-xl tracking-wide">
            {{ $t('keyPoints2.points[4].desc') }}
          </p>
        </div>
       
        
        
      </div>
    </div>
  </section>
</template>
