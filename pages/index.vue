<template>
  <div class="main__wrapper">
    <Header />
    <Me />
    <Reasons />
    <Services />
    <Usefulness />
    <Stages />
    <AboutMe />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Me from '~/components/Me'
import Reasons from '~/components/Reasons'
import Services from '~/components/Services'
import Usefulness from '~/components/Usefulness'
import Stages from '~/components/Stages'
import AboutMe from '~/components/AboutMe'
import Footer from '~/components/Footer'
export default {
  components: {
    Header,
    Me,
    Reasons,
    Services,
    Usefulness,
    Stages,
    AboutMe,
    Footer
  }
}
</script>

<style scoped>

</style>
