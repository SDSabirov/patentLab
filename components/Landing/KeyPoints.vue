<template>
  <section
    class="w-screen min-h-screen md:min-h-full bg-primary relative rounded-lg md:rounded-b-[68px] py-12 leading-loose"
  >
    <h2
      class="w-full max-w-4xl mx-auto text-center text-2xl md:text-4xl font-semibold text-white"
    >
      <span class="text-light">{{$t('keyPoints.title.start')}}</span> {{$t('keyPoints.title.rest')}}
    </h2>
    <!-- <p class="text-light font-semibold text-xl mx-auto w-full text-center mt-6">
      Yagona egasi bo‘lasiz – Ro‘yxatdan o‘tgan tovar belgisi sizga to‘liq
      egalik huquqini beradi.
    </p> -->
    <div class="w-full max-w-screen-xl mx-auto px-4 md:px-0 mt-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="w-full flex flex-col space-y-4 border border-light rounded-xl p-4">
          <div class="bg-light flex items-center justify-center h-14 w-14 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              style="fill: rgba(17, 128, 128, 1); transform: ; msfilter: "
            >
              <path
                d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
              ></path>
              <path
                d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"
              ></path>
            </svg>
          </div>
          <p class="text-lg leading-loose text-light">
            {{$t('keyPoints.list[0]')}}
          </p>
        </div>
        <div class="w-full flex flex-col space-y-4 border border-light rounded-xl p-4">
          <div class="bg-light flex items-center justify-center h-14 w-14 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              style="fill: rgba(17, 128, 128, 1); transform: ; msfilter: "
            >
              <path
                d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
              ></path>
              <path
                d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"
              ></path>
            </svg>
          </div>
          <p class="text-lg leading-loose text-light">
           {{$t('keyPoints.list[1]')}}
          </p>
        </div>
        <div class="w-full flex flex-col space-y-4 border border-light rounded-xl p-4">
          <div class="bg-light flex items-center justify-center h-14 w-14 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              style="fill: rgba(17, 128, 128, 1); transform: ; msfilter: "
            >
              <path
                d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
              ></path>
              <path
                d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"
              ></path>
            </svg>
          </div>
          <p class="text-lg leading-loose text-light">
            {{$t('keyPoints.list[2]')}}
          </p>
        </div>
        <div class="w-full flex flex-col space-y-4 border border-light rounded-xl p-4">
          <div class="bg-light flex items-center justify-center h-14 w-14 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              style="fill: rgba(17, 128, 128, 1); transform: ; msfilter: "
            >
              <path
                d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
              ></path>
              <path
                d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"
              ></path>
            </svg>
          </div>
          <p class="text-lg leading-loose text-light">
            {{$t('keyPoints.list[3]')}}
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center mt-6">
        <button @click="openFormModal" class="rounded-full text-xl text-primary bg-light flex items-center justify-center py-2 w-full md:w-1/4 hover:bg-opacity-90 transition-all">{{$t('keyPoints.button')}}</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const { openFormModal } = useFormModal()
</script>
