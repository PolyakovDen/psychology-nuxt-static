<template>
  <div class="main__wrapper">
    <Header />
    <Me />
    <Reasons />
    <Services />
    <Usefulness />
    <Stages />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Me from '~/components/Me'
import Reasons from '~/components/Reasons'
import Services from '~/components/Services'
import Usefulness from '~/components/Usefulness'
import Stages from "~/components/Stages";
export default {
  components: {
    Header,
    Me,
    Reasons,
    Services,
    Usefulness,
    Stages
  }
}
</script>

<style scoped>

</style>
