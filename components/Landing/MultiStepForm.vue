<template>
  <!-- Modal Overlay -->
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isFormModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
        @click="handleOverlayClick"
      >
        <!-- Modal Container -->
        <div
          class="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <div class="p-8">
            <!-- Close Button -->
            <div class="flex justify-end mb-4">
              <button
                @click="closeFormModal"
                class="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <!-- Form Title -->
            <h2 v-if="!isSubmitted" class="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-6">
              {{ $t('multiStepForm.title') }}
            </h2>

            <!-- Progress Indicator -->
            <div v-if="!isSubmitted" class="mb-8">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm text-gray-600">
                  {{ $t('multiStepForm.progress') }} {{ currentStep }} {{ $t('multiStepForm.of') }} {{ totalSteps }}
                </span>
                <span class="text-sm text-gray-600">{{ Math.round((currentStep / totalSteps) * 100) }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-primary h-2 rounded-full transition-all duration-300"
                  :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
                ></div>
              </div>
            </div>

            <!-- Step 1: Name and Role -->
            <div v-show="currentStep === 1 && !isSubmitted" class="space-y-6">
              <!-- Question 1: Name -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">
                  {{ $t('multiStepForm.step1.question1') }}
                </label>
                <input
                  v-model="formData.name"
                  type="text"
                  class="rounded-full border border-gray-300 h-14 px-6 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  :placeholder="$t('multiStepForm.step1.namePlaceholder')"
                >
              </div>

              <!-- Question 2: Role -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-4">
                  {{ $t('multiStepForm.step1.question2') }}
                </label>
                <div class="space-y-3">
                  <label
                    v-for="role in rolesList"
                    :key="role"
                    class="flex items-center space-x-3 cursor-pointer group p-4 border border-gray-200 rounded-xl hover:border-primary hover:bg-primary hover:bg-opacity-5 transition-all"
                    :class="{ 'border-primary bg-primary bg-opacity-5': formData.role === role }"
                  >
                    <input
                      type="radio"
                      v-model="formData.role"
                      :value="role"
                      class="w-5 h-5 text-primary border-gray-300 focus:ring-primary cursor-pointer"
                    >
                    <span class="text-gray-700 group-hover:text-primary transition-colors">
                      {{ $t(`multiStepForm.step1.roles.${role}`) }}
                    </span>
                  </label>

                  <!-- Other role text field -->
                  <div v-if="formData.role === 'other'" class="ml-8 mt-2">
                    <input
                      v-model="formData.otherRole"
                      type="text"
                      class="rounded-full border border-gray-300 h-12 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      :placeholder="$t('multiStepForm.step1.otherPlaceholder')"
                    >
                  </div>
                </div>
              </div>

              <div class="flex justify-end mt-8">
                <button
                  @click="nextStep"
                  :disabled="!formData.name || !formData.role || (formData.role === 'other' && !formData.otherRole)"
                  class="rounded-full bg-primary text-white text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
                >
                  {{ $t('multiStepForm.buttons.next') }}
                </button>
              </div>
            </div>

            <!-- Step 2: Brand Info -->
            <div v-show="currentStep === 2 && !isSubmitted" class="space-y-6">
              <!-- Question 1: Brand Name -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">
                  {{ $t('multiStepForm.step2.question1') }}
                </label>
                <input
                  v-model="formData.brandName"
                  type="text"
                  class="rounded-full border border-gray-300 h-14 px-6 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  :placeholder="$t('multiStepForm.step2.brandPlaceholder')"
                >
              </div>

              <!-- Question 2: Has Logo -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-4">
                  {{ $t('multiStepForm.step2.question2') }}
                </label>
                <div class="space-y-3">
                  <label
                    v-for="option in logoOptions"
                    :key="option"
                    class="flex items-center space-x-3 cursor-pointer group p-4 border border-gray-200 rounded-xl hover:border-primary hover:bg-primary hover:bg-opacity-5 transition-all"
                    :class="{ 'border-primary bg-primary bg-opacity-5': formData.hasLogo === option }"
                  >
                    <input
                      type="radio"
                      v-model="formData.hasLogo"
                      :value="option"
                      class="w-5 h-5 text-primary border-gray-300 focus:ring-primary cursor-pointer"
                    >
                    <span class="text-gray-700 group-hover:text-primary transition-colors">
                      {{ $t(`multiStepForm.step2.hasLogo.${option}`) }}
                    </span>
                  </label>
                </div>
              </div>

              <!-- Question 3: Industry -->
              <div>
                <label class="block text-lg font-medium text-gray-700 mb-2">
                  {{ $t('multiStepForm.step2.question3') }}
                </label>
                <input
                  v-model="formData.industry"
                  type="text"
                  class="rounded-full border border-gray-300 h-14 px-6 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  :placeholder="$t('multiStepForm.step2.industryPlaceholder')"
                >
              </div>

              <div class="flex justify-between mt-8">
                <button
                  @click="prevStep"
                  class="rounded-full border border-gray-300 text-primary text-lg px-8 py-3 hover:bg-gray-50 transition-all"
                >
                  {{ $t('multiStepForm.buttons.back') }}
                </button>
                <button
                  @click="nextStep"
                  :disabled="!formData.brandName || !formData.hasLogo || !formData.industry"
                  class="rounded-full bg-primary text-white text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
                >
                  {{ $t('multiStepForm.buttons.next') }}
                </button>
              </div>
            </div>

            <!-- Step 3: Service Selection -->
            <div v-show="currentStep === 3 && !isSubmitted" class="space-y-6">
              <h3 class="text-xl md:text-2xl font-semibold text-primary mb-4">
                {{ $t('multiStepForm.step3.title') }}
              </h3>
              <div class="space-y-4">
                <label
                  v-for="service in servicesList"
                  :key="service"
                  class="flex items-start space-x-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    v-model="formData.selectedServices"
                    :value="service"
                    class="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
                  >
                  <span class="text-gray-700 group-hover:text-primary transition-colors">
                    {{ $t(`multiStepForm.step3.services.${service}`) }}
                  </span>
                </label>

                <!-- Other option with text field -->
                <div v-if="formData.selectedServices.includes('other')" class="ml-8 mt-2">
                  <input
                    v-model="formData.otherService"
                    type="text"
                    class="rounded-full border border-gray-300 h-12 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    :placeholder="$t('multiStepForm.step3.otherPlaceholder')"
                  >
                </div>
              </div>
              <div class="flex justify-between mt-8">
                <button
                  @click="prevStep"
                  class="rounded-full border border-gray-300 text-primary text-lg px-8 py-3 hover:bg-gray-50 transition-all"
                >
                  {{ $t('multiStepForm.buttons.back') }}
                </button>
                <button
                  @click="nextStep"
                  :disabled="formData.selectedServices.length === 0 || (formData.selectedServices.includes('other') && !formData.otherService)"
                  class="rounded-full bg-primary text-white text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
                >
                  {{ $t('multiStepForm.buttons.next') }}
                </button>
              </div>
            </div>

            <!-- Step 4: Contact Time -->
            <div v-show="currentStep === 4 && !isSubmitted" class="space-y-6">
              <h3 class="text-xl md:text-2xl font-semibold text-primary mb-4">
                {{ $t('multiStepForm.step4.title') }}
              </h3>
              <div class="space-y-4">
                <label
                  v-for="timeSlot in timeSlotsList"
                  :key="timeSlot"
                  class="flex items-center space-x-3 cursor-pointer group p-4 border border-gray-200 rounded-xl hover:border-primary hover:bg-primary hover:bg-opacity-5 transition-all"
                  :class="{ 'border-primary bg-primary bg-opacity-5': formData.preferredTime === timeSlot }"
                >
                  <input
                    type="radio"
                    v-model="formData.preferredTime"
                    :value="timeSlot"
                    class="w-5 h-5 text-primary border-gray-300 focus:ring-primary cursor-pointer"
                  >
                  <span class="text-gray-700 font-medium group-hover:text-primary transition-colors">
                    {{ $t(`multiStepForm.step4.timeSlots.${timeSlot}`) }}
                  </span>
                </label>
              </div>
              <div class="flex justify-between mt-8">
                <button
                  @click="prevStep"
                  class="rounded-full border border-gray-300 text-primary text-lg px-8 py-3 hover:bg-gray-50 transition-all"
                >
                  {{ $t('multiStepForm.buttons.back') }}
                </button>
                <button
                  @click="nextStep"
                  :disabled="!formData.preferredTime"
                  class="rounded-full bg-primary text-white text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
                >
                  {{ $t('multiStepForm.buttons.next') }}
                </button>
              </div>
            </div>

            <!-- Step 5: Phone Number -->
            <div v-show="currentStep === 5 && !isSubmitted" class="space-y-6">
              <div class="text-center mb-6">
                <h3 class="text-xl md:text-2xl font-semibold text-primary mb-4">
                  {{ $t('multiStepForm.step5.title') }}
                </h3>
                <p class="text-gray-600">
                  {{ $t('multiStepForm.step5.description') }}
                </p>
              </div>
              <div>
                <input
                  v-model="formData.phone"
                  type="tel"
                  class="rounded-full border border-gray-300 h-14 px-6 w-full text-center text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  :placeholder="$t('multiStepForm.step5.placeholder')"
                  @input="formatPhone"
                >
                <p v-if="phoneError" class="text-red-500 text-sm mt-2 text-center">
                  {{ phoneError }}
                </p>
              </div>
              <div class="flex justify-between mt-8">
                <button
                  @click="prevStep"
                  class="rounded-full border border-gray-300 text-primary text-lg px-8 py-3 hover:bg-gray-50 transition-all"
                >
                  {{ $t('multiStepForm.buttons.back') }}
                </button>
                <button
                  @click="submitForm"
                  :disabled="!formData.phone || phoneError || isSubmitting"
                  class="rounded-full bg-primary text-white text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
                >
                  {{ isSubmitting ? $t('multiStepForm.buttons.submitting') : $t('multiStepForm.buttons.submit') }}
                </button>
              </div>
            </div>

            <!-- Success Message -->
            <div v-if="isSubmitted" class="text-center space-y-6 py-8">
              <div class="text-6xl mb-4">{{ $t('multiStepForm.success.icon') }}</div>
              <h2 class="text-2xl md:text-3xl font-semibold text-primary">
                {{ $t('multiStepForm.success.title') }}
              </h2>
              <p class="text-gray-600 text-lg">
                {{ $t('multiStepForm.success.description') }}
              </p>
              <button
                @click="resetForm"
                class="rounded-full border border-primary text-primary text-lg px-8 py-3 hover:bg-primary hover:text-white transition-all"
              >
                {{ $t('multiStepForm.success.button') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const { isFormModalOpen, closeFormModal } = useFormModal()
const { t } = useI18n()

const currentStep = ref(1)
const totalSteps = 5
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const phoneError = ref('')

const formData = ref({
  name: '',
  role: '',
  otherRole: '',
  brandName: '',
  hasLogo: '',
  industry: '',
  selectedServices: [],
  otherService: '',
  preferredTime: '',
  phone: ''
})

const rolesList = ['owner', 'marketer', 'starter', 'other']
const logoOptions = ['yes', 'no']
const servicesList = ['registration', 'protection', 'recovery', 'branding', 'other']
const timeSlotsList = ['morning', 'afternoon', 'evening']

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const formatPhone = () => {
  // Basic phone validation
  const phoneRegex = /^[\d\s\+\(\)\-]+$/
  if (formData.value.phone && !phoneRegex.test(formData.value.phone)) {
    phoneError.value = t('multiStepForm.step5.errorInvalid')
  } else if (formData.value.phone && formData.value.phone.length < 9) {
    phoneError.value = t('multiStepForm.step5.errorShort')
  } else {
    phoneError.value = ''
  }
}

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Send form data to Telegram via API
    const response = await $fetch('/api/submit-form', {
      method: 'POST',
      body: formData.value
    })

    console.log('Form submitted successfully:', response)
    isSubmitted.value = true
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова.')
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  formData.value = {
    name: '',
    role: '',
    otherRole: '',
    brandName: '',
    hasLogo: '',
    industry: '',
    selectedServices: [],
    otherService: '',
    preferredTime: '',
    phone: ''
  }
  currentStep.value = 1
  isSubmitted.value = false
  phoneError.value = ''
}

const handleOverlayClick = () => {
  closeFormModal()
  // Reset form when closing
  setTimeout(() => {
    resetForm()
  }, 300)
}
</script>

<style scoped>
/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95);
}
</style>
