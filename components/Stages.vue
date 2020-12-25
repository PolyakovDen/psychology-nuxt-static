<template>
  <div class="wrapper">
    <v-container fluid class="pl-5 pr-5">
      <h2 class="stages__title text-center">Этапы работы</h2>
      <div class="divider" />
      <div class="stages__items d-flex justify-space-between flex-wrap">
        <div v-for="(item, index) in items" :key="index" class="stages__item">
          <button @click="showDescription(item)">
            <img :src="item.img" alt="" :width="item.width" :height="item.height">
          </button>
        </div>
      </div>
      <div class="mt-12">
        <img class="stages__arrow" src="/17.png" alt="" width="1500">
      </div>
      <p class="stages__description text-center">
        {{ description }}
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
            img: '10.png',
            width: 90,
            height: 90,
            description: 'Первый контакт, обращение по телефону или по почте'
          },
          {
            img: '11.png',
            width: 90,
            height: 90,
            description: 'Знакомство в формате оффлайн или онлайн консультации, формирование проблемы и определение этапов работы'
          },
          {
            img: '12.png',
            width: 90,
            height: 90,
            description: 'Совместное принятие решения относительно формата дальнейшей работы'
          },
          {
            img: '13.png',
            width: 90,
            height: 90,
            description: 'Создание программы консультирования, разработка методологии и определение порядка внедрения'
          },
          {
            img: '14.png',
            width: 90,
            height: 90,
            description: 'Детальное углубление в процесс, поиск корня проблем и вариантов его решения'
          },
          {
            img: '15.png',
            width: 90,
            height: 90,
            description: 'Практическое внедрение советов и решений в жизни пациента'
          },
          {
            img: '16.png',
            width: 90,
            height: 90,
            description: 'Подведение итогов терапии, анализ и завершение сотрудничества'
          }
        ],
        description: ''
      }
    },
    created () {
      this.description = this.items[0].description
    },
    methods: {
      showDescription (item) {
        this.description = ''
        this.description = item.description;
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
