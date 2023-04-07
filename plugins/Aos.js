import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }, inject) => {
  app.AOS = new AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-out-cubic',
    once: true
  })
}
