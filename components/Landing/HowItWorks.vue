<template>
  <section
    class="w-screen md:h-[90%] bg-primary relative rounded-lg md:rounded-b-[68px] py-12"
    id="howitworks"
  >
    <div
      class="w-full max-w-screen-xl px-4 md:px-0 flex flex-col items-center justify-center mx-auto"
    >
      <h2
        class="text-light text-3xl md:text-5xl font-semibold text-center w-full text-center"
      >
        {{$t('howWeWork.title')}}
      </h2>
      <div class="flex flex-col md:flex-row gap-4 w-full mt-12">
        <div
          class="flex flex-col gap-4 items-center justify-start w-full md-1/3 px-4 relative"
        >
          <div class="rounded-t-xl rounded-r-xl bg-light p-4">
            <div class="bg-accent h-12 w-12 p-2 rounded-lg">
              <img src="/assets/images/icons/phone.png" alt="icon" />
            </div>
          </div>
          <h3
            class="text-2xl text-white tracking-wide text-center font-semibold text-center"
          >
            {{$t('howWeWork.steps[0].title')}}
          </h3>
          <p class="text-xl leading-loose text-white text-center">
            {{$t('howWeWork.steps[0].desc')}}
          </p>
          <img
            src="/assets/images/icons/arrow-bend-up.svg"
            alt="arrow"
            class="hidden md:block absolute top-[4%] -right-[35%]"
          />
        </div>
        <div
          class="flex flex-col gap-4 items-center justify-start w-full md-1/3 px-4 relative"
        >
          <div class="rounded-t-xl rounded-r-xl bg-light p-4">
            <div class="bg-accent h-12 w-12 p-2 rounded-lg">
              <img
                src="/assets/images/icons/document.png"
                alt="icon"
                class="w-full h-full"
              />
            </div>
          </div>
          <h3
            class="text-2xl text-white tracking-wide text-center font-semibold text-center"
          >
             {{$t('howWeWork.steps[1].title')}}
          </h3>
          <p class="text-xl leading-loose text-white text-center">
            {{$t('howWeWork.steps[1].desc')}}
          </p>
          <img
            src="/assets/images/icons/arrow-bend-down.svg"
            alt="arrow"
            class="hidden md:block absolute top-[20%] -right-[35%]"
          />
        </div>
        <div
          class="flex flex-col gap-4 items-center justify-start w-full md-1/3 px-4"
        >
          <div class="rounded-t-xl rounded-r-xl bg-light p-4">
            <div class="bg-accent h-12 w-12 p-2 rounded-lg">
              <img
                src="/assets/images/icons/document.png"
                class="w-full h-full"
                alt="icon"
              />
            </div>
          </div>
          <h3
            class="text-2xl text-white tracking-wide text-center font-semibold text-center"
          >
             {{$t('howWeWork.steps[2].title')}}
          </h3>
          <p class="text-xl leading-loose text-white text-center">
            {{$t('howWeWork.steps[2].desc')}}
          </p>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row gap-4 w-full mt-6 items-center justify-center"
      >
        <div
          class="flex flex-col gap-4 items-center justify-center w-full md:w-1/3 relative"
        >
          <div class="rounded-t-xl rounded-r-xl bg-light p-4">
            <div class="bg-accent h-12 w-12 p-2 rounded-lg">
              <img
                src="/assets/images/icons/user-check.png"
                alt="icon"
                class="w-full h-full"
              />
            </div>
          </div>
          <h3
            class="text-2xl text-white tracking-wide font-semibold capitalize text-center"
          >
            {{$t('howWeWork.steps[3].title')}}
          </h3>
          <p class="text-xl leading-loose text-white text-center">
            {{$t('howWeWork.steps[3].desc')}}
          </p>
          <img src="/assets/images/icons/arrow-bend-down.svg" alt="arrow" class="hidden md:block absolute top-[30%] -right-[30%]">
        </div>
        <div
          class="flex flex-col gap-4 items-center justify-center w-full md:w-1/3"
        >
          <div class="rounded-t-xl rounded-r-xl bg-light p-4">
            <div class="bg-accent h-12 w-12 p-2 rounded-lg">
              <img
                src="/assets/images/icons/phone.png"
                alt="icon"
                class="w-full h-full"
              />
            </div>
          </div>
          <h3
            class="text-2xl text-white tracking-wide font-semibold capitalize text-center"
          >
             {{$t('howWeWork.steps[4].title')}}
          </h3>
          <p class="text-xl leading-loose text-white text-center">
            {{$t('howWeWork.steps[4].desc')}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
