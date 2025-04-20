<template>
  <section
    class="w-screen min-h-screen md:h-[90%] bg-primary relative rounded-lg md:rounded-b-[68px] py-24"
  >
    <div
      class="flex flex-col space-y-12 w-full max-w-screen-xl mx-auto px-4 md:px-0"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="flex flex-col space-y-6 md:col-span-2 w-full items-start justify-between pb-6 order-2 md:order-none"
        >
          <div
            class="flex w-[78px] h-[78px] items-center justify-center rounded-full bg-light"
          >
            <img
              src="/assets/images/icons/050-worldwide.png"
              alt="globe icon"
            />
          </div>
          <h2 class="text-2xl font-semibold text-light md:text-4xl">
            Tovar belgisini ro‘yxatdan o‘tkazish (patent) nima?
          </h2>
          <p class="text-lg text-light leading-loose md:text-xl">
            Patent – bu brendni huquqiy himoya qilish usuli. Agar kompaniya o‘z
            nomi va logotipini rasmiy ro‘yxatdan o‘tkazsa, u boshqa shaxslar
            tomonidan noqonuniy ishlatilishining oldini oladi. Bu nafaqat
            brendni mustahkamlash, balki biznesning qonuniy egasi sifatida tan
            olinishi uchun ham muhimdir. Qonuniy himoyaga ega bo‘lgan brend esa
            ishonchli va xavfsiz hisoblanadi.
          </p>
        </div>
        <div class="relative w-full h-[460px]">
          <div
            class="bg-light h-[95%] absolute bottom-0 right-0 w-[95%] rounded-xl z-10 order-1 md:order-none"
          ></div>

          <img
            src="/assets/images/certificate.png"
            alt="patent certificate z-40"
            class="absolute top-0 left-0 h-[95%] w-[95%] z-20"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:col-span-2">
        <div class="relative w-full h-[400px] md:col-span-2 flex items-center justify-start">
          <img
            src="/assets/images/graph.png"
            alt="patent certificate z-40"
            class="w-[80%] "
          />
        </div>
        <div
          class="flex flex-col space-y-6 w-full items-start justify-center pb-6"
        >
          <h2 class="text-2xl font-semibold text-light md:text-4xl">
            Ko‘p patent vakillari faqat ro‘yxatdan o‘tkazish bilan cheklanadi,
            lekin:
          </h2>
          <ul class="text-lg text-light leading-loose md:text-xl">
            <li class="flex items-center space-x-2">
              <span>❌</span
              ><span> Brend nusxalanishining oldini olmaydi </span>
            </li>
            <li class="flex items-center space-x-2">
              <span>❌</span>
              <span
                >Raqobatchilar nomingizdan foydalanib, o‘z mahsulotlarini
                sotishining oldini olmaydi</span
              >
            </li>
            <li class="flex items-center space-x-2"><span>❌</span><span>Sud jarayonlarida sizga yuridik yordam bermaydi</span></li>
          </ul>
        </div>
      </div>
      <div class="flex items-center justify-center w-full ">
        <a href="/" class="w-[320px] text-primary bg-light py-2 flex items-center justify-center text-xl rounded-full">Patent narxini bilish</a>
      </div>
    </div>
  </section>
</template>
