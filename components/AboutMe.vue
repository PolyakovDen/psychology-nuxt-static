<template>
  <v-container fluid class="pl-5 pr-5">
    <h2 class="about-me__title text-center">Почему именно я?</h2>
    <div class="about-me d-flex justify-center">
      <div class="about-me--left">
        <div class="about-me__block">
          <div class="circle" />
          <p class="about-me--wrapper about-me__wrapper1">1. 100% конфиденциальность закреплена в письменном виде</p>
        </div>
        <div class="about-me__block">
          <div class="circle circle3" />
          <p class="about-me--wrapper about-me__wrapper3">3. Практикующий психолог, который лично прошел путь психологической терапии в определенный период жизни</p>
        </div>
      </div>
      <div class="about-me--center">
        <img src="/21.png" alt="" width="25">
      </div>
      <div class="about-me--right">
        <div class="about-me__block">
          <div class="circle circle2" />
          <p class="about-me--wrapper about-me__wrapper2">2. Индивидуальный формат оценивания проблемы и персонализированный подход к каждому клиенту</p>
        </div>
        <div class="about-me__block">
          <div class="circle circle4" />
          <p class="about-me--wrapper about-me__wrapper4">4. Лояльная ценовая политика, в соответствии с финансовыми возможностями каждого пациента</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: "AboutMe"
  }
</script>

<style scoped>
  .container {
    width: 1300px !important;
  }
  .about-me__title {
    font-size: 30px;
    color: #37432b;
    margin-top: 20px;
    margin-bottom: 60px;
  }
  .about-me {
    margin-bottom: 60px;
  }
  .about-me--wrapper {
    max-width: 400px;
    z-index: 1;
    color: #37432b;
    font-weight: 700;
  }
  .about-me__wrapper1 {
    margin-right: 30px;
  }
  .about-me__wrapper2 {
    margin-left: 50px;
    margin-top: 100px;
  }
  .about-me__wrapper3 {
    margin-top: 150px;
  }
  .about-me__wrapper4 {
    margin-top: 140px;
    margin-left: 50px;
  }
  .about-me__block {
    display: flex;
    position: relative;
  }
  .circle {
    width: 120px;
    height: 120px;
    background-color: #dadcd8;
    border-radius: 50%;
    position: absolute;
    top: -35px;
    left: -50px;
  }
  .circle2 {
    top: 70px;
    left: 380px;
  }
  .circle3 {
    top: 125px;
    left: -50px;
  }
  .circle4 {
    top: 120px;
    left: 280px;
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
    .circle2 {
      left: 300px;
    }
  }
  @media screen and (max-width: 810px) {
    .circle2 {
      top: 80px;
      left: 210px;
    }
    .circle4 {
      top: 90px;
      left: 260px;
    }
    .about-me__wrapper4 {
      margin-top: 110px;
    }
  }
  @media screen and (max-width: 715px) {
    .circle4 {
      left: 230px;
    }
  }
  @media screen and (max-width: 640px) {
    .about-me--wrapper {
      font-size: 14px;
    }
    .circle {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    .about-me__wrapper3 {
      margin-top: 120px;
    }
  }
  @media screen and (max-width: 550px) {
    .about-me__wrapper2 {
      margin-top: 65px;
    }
    .about-me__wrapper3 {
      margin-top: 80px;
    }
  }
  @media screen and (max-width: 450px) {
    .about-me__wrapper2 {
      margin-top: 80px;
    }
    .about-me__wrapper3 {
      margin-top: 120px;
    }
    .about-me__wrapper4 {
      margin-top: 120px;
    }
    .about-me--wrapper {
      max-width: 160px;
      font-size: 13px;
      word-break: break-all;
    }
  }
  @media screen and (max-width: 400px) {
    .about-me__wrapper3 {
      margin-top: 90px;
    }
    .about-me__wrapper4 {
      margin-top: 90px;
    }
  }
  @media screen and (max-width: 350px) {
    .about-me__wrapper3 {
      margin-top: 70px;
    }
    .about-me__wrapper4 {
      margin-top: 70px;
    }
  }
</style>
