<template>
    <section
      class="w-screen min-h-screen md:h-[90%] bg-primary relative rounded-lg md:rounded-b-[68px]"
    >
      <div class="absolute h-full w-full inset-0">
        <img
          src="/assets/images/backgrounds/eiffel.png"
          class="absolute -bottom-6 left-[15%] hidden md:block"
          alt="Eiffel tower pattern"
        />
        <img
          src="/assets/images/backgrounds/patented.png"
          class="absolute bottom-[10%] right-4 md:right-[15%]"
          alt="Patent background"
        />
      </div>
      <div class="mx-auto max-w-screen-xl relative h-screen flex  ">
        <div
          class="flex flex-col space-y-6 w-full h-full items-center md:items-center justify-center md:w-1/2 md:py-[20%] bg-primary/80 px-4 py-12"
        >
          <h1 class="text-white text-xl md:text-6xl font-semibold leading-tight">
            "1 oy ichida brendingizni nafaqat patentlaymiz, balki qonuniy himoya qilamiz!"
          </h1>
          <p class="text-white text-xl">
            "Ko‘pchilik agentliklar patent olishga yordam beradi, ammo sizning brendingizni real himoya qila olmaydi. Patentlab esa sizning brendingizni to‘liq himoya qiladi!"
          </p>
          <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6">
            <!-- Contact Button -->
            <a
              href="/"
              class="px-6 py-2 text-white text-xl border border-white rounded-full flex items-center space-x-4"
            >
              <span>Biz bilan bog'laning</span>
              <i class="bx bx-right-arrow-alt text-2xl" aria-hidden="true"></i>
            </a>
  
            <!-- Videos Button -->
            <a
              href="/"
              class="px-6 py-2 text-white text-xl rounded-full flex items-center space-x-4"
            >
              <span
                class="bg-white/10 rounded-full p-2 flex items-center justify-center"
              >
                <i class="bx bxs-right-arrow text-xl" aria-hidden="true"></i>
              </span>
              <span>Videolarimiz</span>
            </a>
          </div>
        </div>
      </div>
      <div class="absolute -bottom-[22px] left-1/2 -translate-x-1/2 max-w-screen-xl hidden md:block">
        <LandingPartners />
      </div>
    </section>
  </template>