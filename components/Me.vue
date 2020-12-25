<template>
  <v-container fluid class="pl-5 pr-5">
    <v-row no-gutters>
      <v-col cols="12" lg="5" md="7" sm="12">
        <div class="me">
          <p class="me__description">
            Профессиональная помощь практикующего психолога
          </p>
          <h2 class="me__title">
            Александра Самойлюка
          </h2>
          <p class="me__annotation mt-10">
            «Мы знаем, кто мы есть, но не знаем,
            кем мы можем быть.» — Уильям Шекспир
          </p>
          <ConsultationForm />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ConsultationForm from "~/components/ConsultationForm";
  export default {
    name: "Me",
    components: {
      ConsultationForm
    }
  }
</script>

<style scoped>
  .container {
    max-width: 1400px !important;
  }
  .me {
    margin-top: 270px;
    margin-bottom: 270px;
    text-align: center;
  }
  .me__description {
    font-weight: 500;
    font-size: 30px;
  }
  .me__title {
    font-size: 40px;
  }
  .me__annotation {
    letter-spacing: 0;
    max-width: 500px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 500;
    color: #1f2719;
  }
</style>
