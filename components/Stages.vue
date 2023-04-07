<template>
  <div class="wrapper">
    <v-container fluid class="pl-5 pr-5">
      <h2 class="stages__title text-center">
        {{ $t('36') }}
      </h2>
      <div class="stage__items d-flex justify-space-between flex-wrap">
        <div class="stage" data-aos="fade-up" data-aos-delay="200">
          <span class="stage__number">1</span>
          <div class="stage__item">
            <h4 class="stage__title">
              {{ $t('37') }}
            </h4>
            <span class="stage__step">
              {{ $t('38') }}
            </span>
            <span class="stage__step">
              {{ $t('39') }}
            </span>
            <span class="stage__step">
              {{ $t('40') }}
            </span>
          </div>
        </div>
        <div class="stage" data-aos="fade-up" data-aos-delay="300">
          <span class="stage__number">2</span>
          <div class="stage__item">
            <h4 class="stage__title">
              {{ $t('41') }}
            </h4>
            <span class="stage__step">
              {{ $t('42') }}
            </span>
          </div>
        </div>
        <div class="stage" data-aos="fade-up" data-aos-delay="400">
          <span class="stage__number">3</span>
          <div class="stage__item">
            <h4 class="stage__title">
              {{ $t('43') }}
            </h4>
            <span class="stage__step">
              {{ $t('44') }}
            </span>
            <span class="stage__step">
              {{ $t('45') }}
            </span>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Stages'
}
</script>

<style scoped>
  .container {
    max-width: 1200px !important;
  }
  .wrapper {
    background-color: #DDE3D9;
  }
  .stages__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    color: #1D2317;
    margin-top: 90px;
    margin-bottom: 65px;
  }
  .stage__items {
    margin: 0 auto;
    margin-bottom: 120px;
  }

  .stage {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .stage__number {
    font-weight: 800;
    font-size: 70px;
    line-height: 85px;
    text-align: center;
    text-transform: uppercase;
    color: #1D2317;
    margin-bottom: 20px;
  }

  .stage__item {
    width: 320px;
    height: 200px;
    border: 2px solid #000000;
    border-radius: 30px;
    padding: 30px 12px 0 12px;
  }
  .stage__title {
    font-weight: 800;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    text-align: center;
    margin-bottom: 14px;
  }

  .stage__step {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    display: block;
    text-align: center;
  }
</style>
