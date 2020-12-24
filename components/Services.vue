<template>
  <div class="wrapper">
    <v-container fluid class="pl-5 pr-5">
      <h2 class="main__title text-center mt-8">
        Услуги
      </h2>
      <div class="services__cards d-flex justify-space-between flex-wrap mb-16">
        <div v-for="(service, index) in services" :key="index" class="service__card text-center mt-16">
          <img :src="service.src" alt="" :width="service.width" :height="service.height">
          <h3 class="service__card--title mt-3">
            {{ service.title }}
          </h3>
          <p class="service__card--description mt-3">
            {{ service.description }}
          </p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      services: [
        {
          src: '8.png',
          width: 70,
          height: 71,
          title: 'Индивидуальная терапия',
          description: 'Лучше всего подойдет для людей, которые встретились с вопросами личной внутренней пустоты, дисбаланса личности или столкнулись с тяжелыми жизненными обстоятельствами. Этот формат предполагает детальную работу от нахождения корня проблемы, к ее полноценного решения'
        },
        {
          src: '7.png',
          width: 101,
          height: 71,
          title: 'Одноразовая консультация',
          description: 'Это отличный вариант, если вы сомневаетесь относительно того, какой формат психологической помощи вам нужен, и на сколько глубокая ваша проблема'
        },
        {
          src: '9.png',
          width: 131,
          height: 71,
          title: 'Семейная терапия',
          description: 'Лучшее решение для супружеских пар если вы переживаете кризисный период в своем браке, семейная терапия это один из инструментов, который поможет найти решение, улучшить сексуальную жизнь, вернуть гармонию и счастье в ваши отношения'
        },
        {
          src: '8.png',
          width: 70,
          height: 71,
          title: 'Подростковая терапия',
          description: 'Лучше всего подойдет для людей, которые встретились с вопросами личной внутренней пустоты, дисбаланса личности или столкнулись с тяжелыми жизненными обстоятельствами. Этот формат предполагает детальную работу от нахождения корня проблемы, к ее полноценного решения'
        }
      ]
    }
  }
}
</script>

<style scoped>
	.container {
    max-width: 1200px !important;
  }
	.wrapper {
		background-color: #dee3da;
	}
	.main__title {
		font-size: 30px;
	}
	@media screen and (max-width: 960px) {
    .services__cards {
      justify-content: center !important;
    }
  }
	.service__card {
		width: 450px;
	}
	.service__card--title {
		font-size: 22px;
	}
	.service__card--description {
		width: 350px;
		margin: 0 auto;
		font-size: 14px;
	}
</style>
