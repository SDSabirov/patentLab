import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  AOS.init({
    once: true, // only animate once
    duration: 800,
    easing: 'ease-in-out',
  })
})