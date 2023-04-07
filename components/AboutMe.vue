<template>
  <v-container fluid class="pl-5 pr-5">
    <h2 class="about-me__title text-center">
      {{ $t('46') }}
    </h2>
    <div class="about-me d-flex justify-center">
      <div class="about-me--left">
        <div class="about-me__block">
          <span class="about-me__number about-me__number1">1</span>
          <p class="about-me--wrapper about-me__wrapper1">
            {{ $t('47') }}
          </p>
        </div>
        <div class="about-me__block">
          <span class="about-me__number about-me__number3">3</span>
          <p class="about-me--wrapper about-me__wrapper3">
            {{ $t('48') }}
          </p>
        </div>
        <div class="about-me__block">
          <span class="about-me__number about-me__number5">5</span>
          <p class="about-me--wrapper about-me__wrapper5">
            {{ $t('49') }}
          </p>
        </div>
      </div>
      <div class="about-me--center">
        <img src="/figure.png" alt="" width="44" height="523">
      </div>

      <div class="about-me--right">
        <div class="about-me__block">
          <p class="about-me--wrapper about-me__wrapper2">
            {{ $t('50') }}
          </p>
          <span class="about-me__number about-me__number2">2</span>
        </div>
        <div class="about-me__block">
          <p class="about-me--wrapper about-me__wrapper4">
            {{ $t('51') }}
          </p>
          <span class="about-me__number about-me__number4">4</span>
        </div>
      </div>
    </div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="consultation__btn pa-10 mt-10"
          v-bind="attrs"
          v-on="on"
        >
          {{ $t('52') }}
        </v-btn>
      </template>
      <ConsultationForm />
    </v-dialog>
  </v-container>
</template>

<script>
import ConsultationForm from '~/components/ConsultationForm'
export default {
  name: 'AboutMe',
  components: {
    ConsultationForm
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
  .container {
    width: 1300px !important;
  }
  .about-me__title {
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    color: #1D2317;
    margin-top: 100px;
    margin-bottom: 120px;
  }

  .about-me__number {
    font-weight: 800;
    font-size: 70px;
    line-height: 85px;
    text-align: center;
    text-transform: uppercase;
    color: #1D2317;
    margin-left: 10px;
    margin-right: 10px;
  }
  .about-me {
    margin-bottom: 60px;
  }
  .about-me--wrapper {
    max-width: 300px;
    z-index: 1;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
  }
  .about-me__wrapper1 {
    margin-right: 30px;
    height: 80px;
  }

  .about-me__number1 {
    margin-top: -12px;
  }
  .about-me__wrapper2 {
    margin-left: 50px;
    margin-top: 115px;
  }

  .about-me__number2 {
    margin-top: 90px;
  }
  .about-me__wrapper3 {
    margin-top: 120px;
  }

  .about-me__number3 {
    margin-top: 115px;
  }
  .about-me__wrapper4 {
    margin-top: 170px;
    margin-left: 50px;
  }

  .about-me__number4 {
    margin-top: 150px;
  }

  .about-me__wrapper5 {
    margin-top: 150px;
  }

  .about-me__number5 {
    margin-top: 160px;
  }
  .about-me__block {
    display: flex;
    position: relative;
  }
  @media screen and (max-width: 960px) {
    .about-me__wrapper1 {
      margin-right: 0;
    }
    .about-me__wrapper2 {
      margin-left: 15px;
    }
    .about-me__wrapper4 {
      margin-left: 15px;
    }
  }
  @media screen and (max-width: 715px) {
    .about-me__number2 {
      margin-top: 100px;
    }
    .about-me__wrapper4 {
      margin-top: 150px;
    }

    .about-me__number4 {
      margin-top: 140px;
    }

    .about-me__wrapper5 {
      margin-top: 110px;
    }

    .about-me__number5 {
      margin-top: 140px;
    }
  }
  @media screen and (max-width: 670px) {
    .about-me__wrapper5 {
      margin-top: 140px;
    }

    .about-me__number5 {
      margin-top: 130px;
    }
  }
  @media screen and (max-width: 640px) {
    .about-me__wrapper5 {
      margin-top: 60px;
    }

    .about-me__number5 {
      margin-top: 120px;
    }
  }
  @media screen and (max-width: 450px) {
    .about-me--wrapper {
      font-size: 11px;
    }

    .about-me__number {
      font-weight: 800;
      font-size: 40px;
      line-height: 45px;
    }

    .about-me__wrapper1 {
      margin-top: -60px;
    }

    .about-me__number1 {
      margin-top: -10px;
    }

    .about-me__wrapper2 {
      margin-top: 80px;
    }

    .about-me__number2 {
      margin-top: 110px;
    }

    .about-me__wrapper3 {
      margin-top: 90px;
    }

    .about-me__number3 {
      margin-top: 160px;
    }

    .about-me__wrapper4 {
      margin-top: 90px;
    }

    .about-me__number4 {
      margin-top: 125px;
    }

    .about-me__wrapper5 {
      margin-top: 60px;
    }

    .about-me__number5 {
      margin-top: 95px;
    }
  }

  .consultation__btn {
    margin: auto;
    display: flex;
    text-transform: none;
    font-size: 18px !important;
    font-weight: 600 !important;
    background-color: #1D2317 !important;
    border-radius: 50px;
    margin-bottom: 100px;
  }

  ::v-deep .v-dialog {
    border-radius: 25px !important;
  }
</style>
