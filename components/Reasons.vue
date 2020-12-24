<template>
  <div class="wrapper">
    <v-container fluid class="pl-5 pr-5">
      <v-row no-gutters class="mt-10">
        <v-col cols="12">
          <h2 class="reasons__title text-center">
            Самые распространенные причины обращения к психологу
          </h2>
        </v-col>
      </v-row>
      <v-row no-gutters justify="center" class="mt-4">
        <v-col cols="12" lg="5" md="7" sm="10">
          <div class="divider" />
        </v-col>
      </v-row>
      <div class="reasons__cards d-flex justify-space-between flex-wrap">
        <div v-for="(reason, index) in reasons" :key="index" class="reason__card">
          <img class="reason__card--img" :src="reason.img" alt="" :width="reason.width" :height="reason.height">
          <p class="reason__card--description">
            {{ reason.description }}
          </p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Reasons',
  data () {
    return {
      reasons: [
        {
          img: '1.png',
          width: 100,
          height: 82,
          description: 'Депрессия / тяжелое психологическое состояние'
        },
        {
          img: '2.png',
          width: 98,
          height: 80,
          description: 'Потеря близкого человека'
        },
        {
          img: '3.png',
          width: 141,
          height: 80,
          description: 'Разорванные брачные отношения'
        },
        {
          img: '4.png',
          width: 85,
          height: 80,
          description: 'Проблемы в семейной жизни'
        },
        {
          img: '5.png',
          width: 128,
          height: 80,
          description: 'Не комфортное пребывания в социуме'
        },
        {
          img: '6.png',
          width: 116,
          height: 80,
          description: 'Страх, переживания, неуверенность'
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
    background-color: #5c7148;
    color: white;
  }
  .reasons__title {
    font-size: 30px;
  }
  .divider {
    border-bottom: 2px solid white;
  }
  .reasons__cards {
    margin-top: 100px;
  }
  .reason__card {
    max-width: 200px;
  }
  .reason__card--description {
    margin-top: 50px;
    margin-bottom: 40px;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    .reasons__cards {
      justify-content: center !important;
    }
  }
  .reason__card--img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
