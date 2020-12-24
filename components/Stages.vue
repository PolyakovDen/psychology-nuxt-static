<template>
  <div class="wrapper">
    <v-container fluid class="pl-5 pr-5">
      <h2 class="stages__title text-center">Этапы работы</h2>
      <div class="divider" />
      <div class="stages__items d-flex justify-space-between flex-wrap">
        <div v-for="(item, index) in items" :key="index" class="stages__item">
          <img :src="item.img" alt="" width="90" height="90">
        </div>
      </div>
      <div class="mt-12">
        <img class="stages__arrow" src="/17.png" alt="" width="1500">
      </div>
      <p class="stages__description text-center">
        Первый контакт, обращение по телефону или по почте
      </p>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "Stages",
    data () {
      return {
        items: [
          {
            img: '10.png'
          },
          {
            img: '11.png'
          },
          {
            img: '12.png'
          },
          {
            img: '13.png'
          },
          {
            img: '14.png'
          },
          {
            img: '15.png'
          },
          {
            img: '16.png'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .container {
    max-width: 1500px !important;
  }
  .wrapper {
    background-color: #e2e5de;
  }
  .stages__title {
    font-size: 30px;
    color: #37432b;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .divider {
    width: 400px;
    margin: 0 auto;
    border-bottom: 2px solid #5c7148;
  }
  .stages__items {
    max-width: 1300px;
    margin: 0 auto;
  }
  .stages__item {
    margin-top: 50px;
    margin-right: 10px;
  }
  .stages__arrow {
    width: 100%;
  }
  .stages__description {
    font-size: 20px;
    color: #37432b;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 40px;
  }
</style>
