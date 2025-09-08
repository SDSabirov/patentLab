<template>
  <section class="bg-white w-full py-12">
    <div
      class="max-w-screen-xl w-full mx-auto flex flex-col space-y-6 px-4 md:px-0"
    >
      <h2 class="text-3xl text-center w-full md:text-4xl font-semibold mb-6">
        <span class="text-primary">{{ $t('team.title') }}</span> {{ $t('team.highlight') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 items-center">
        <div class="flex flex-col space-y-4 items-center justify-between">
          <div class="flex items-center justify-center rounded-full overflow-hidden w-32 h-32">
            <img src="/assets/images/team/islomjon.png" alt="team member" class="w-full h-full object-cover" />
          </div>
          <h4 class="text-2xl font-semibold text-center">Usarov Islom Ilhom o'g'li</h4>
          <p class="text-xl text-primary">{{$t('team.jobTitles.specialist')}}</p>
          <!-- <p class="text-gray-600 text-lg text-center">
            Enjoys adventurous travel, seeks new cultures and offbeat
            destinations
          </p> -->

          <div class="flex space-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(169,169,169,1); transform: ; msfilter: "
            >
              <path
                d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(169,169,169, 1); transform: ; msfilter: "
            >
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-col space-y-4 items-center justify-between p-4">
          <div class="flex items-center justify-center rounded-full overflow-hidden w-32 h-32">
            <img src="/assets/images/team/2.png" alt="team member" class="w-full h-full object-cover"/>
          </div>
          <h4 class="text-2xl font-semibold text-center">Ochilov Oybek</h4>
          <p class="text-xl text-primary">{{$t('team.jobTitles.specialist')}}</p>
          <!-- <p class="text-gray-600 text-lg text-center">
            Pop music lover, seeks joy and exciting pop concerts
          </p> -->

          <div class="flex space-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(169,169,169,1); transform: ; msfilter: "
            >
              <path
                d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(169,169,169, 1); transform: ; msfilter: "
            >
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-col space-y-4 items-center justify-between p-4">
          <div class="flex items-center justify-center rounded-full overflow-hidden w-32 h-32">
            <img src="/assets/images/team/3.png" alt="team member" class="w-full h-full object-cover"/>
          </div>
          <h4 class="text-2xl font-semibold text-center">Rahmonov Sardor</h4>
          <p class="text-xl text-primary">{{$t('team.jobTitles.lawyer')}} , {{$t('team.jobTitles.specialist')}}</p>
          <!-- <p class="text-gray-600 text-lg text-center">
            Enjoys adventurous travel, seeks new cultures and offbeat
            destinations
          </p> -->

          <div class="flex space-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(169,169,169,1); transform: ; msfilter: "
            >
              <path
                d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(169,169,169, 1); transform: ; msfilter: "
            >
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-col space-y-4 items-center justify-between p-4">
          <div class="flex items-center justify-center rounded-full overflow-hidden w-32 h-32">
            <img src="/assets/images/team/4.jpg" alt="team member" class="w-full h-full object-cover"/>
          </div>
          <h4 class="text-2xl font-semibold text-center">Rahimova Irina Valentinovna</h4>
          <p class="text-xl text-primary">{{$t('team.jobTitles.specialist')}}</p>
          <!-- <p class="text-gray-600 text-lg text-center">
            Creative painter capturing beauty with imaginative artwork
          </p> -->

          <div class="flex space-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(169,169,169,1); transform: ; msfilter: "
            >
              <path
                d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(169,169,169, 1); transform: ; msfilter: "
            >
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
