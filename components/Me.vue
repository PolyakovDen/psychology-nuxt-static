<template>
  <v-container id="main" fluid class="pl-5 pr-5 me__container">
    <v-row no-gutters>
      <v-col cols="12" lg="5" md="7" sm="12">
        <div class="me__wrapper">
          <div class="me">
            <p class="me__description">
              Професійна допомога практикуючого психоаналітика
            </p>
            <h2 class="me__title">
              ОЛЕКСАНДРА САМОЛЮКА
            </h2>
            <p class="me__annotation mt-10">
              "По-справжньому зрозуміти можна лише те, що намагаєшся змінити." Курт Левін
            </p>
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
                  Отримати консультацію
                </v-btn>
              </template>
              <ConsultationForm />
            </v-dialog>
          </div>
          <img src="/main.png" alt="Oleksandr" class="me__image">
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ConsultationForm from '~/components/ConsultationForm'
export default {
  name: 'Me',
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
  .me__container {
    position: relative;
  }

  .me__image {
    position: absolute;
    width: 666px;
    height: 942px;
    right: 0;
    bottom: -127px;
    z-index: 1;
  }
  .container {
    max-width: 1400px !important;
  }
  .me__wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .me {
    text-align: center;
    z-index: 3;
  }
  .consultation__btn {
    text-transform: none;
    font-size: 18px !important;
    background-color: #5c7148 !important;
    border-radius: 50px;
  }
  .me__description {
    font-weight: 700;
    font-size: 30px;
    color: #1D2317;
  }
  .me__title {
    font-size: 40px;
    font-weight: 700;
    color: #1D2317;
  }
  .me__annotation {
    letter-spacing: 0;
    max-width: 500px;
    margin: 0 auto;
    font-size: 22px;
    font-weight: 400;
    color: #1D2317;
    font-style: italic;
  }
  ::v-deep .v-dialog {
    border-radius: 25px !important;
  }

  @media screen and (max-width: 960px) {
    .me__image {
      opacity: .7;
    }
  }
</style>
