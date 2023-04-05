<template>
  <div id="services" class="wrapper">
    <v-container fluid class="pl-5 pr-5">
      <h2 class="main__title text-center">
        ПОСЛУГИ
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
          src: '88.png',
          width: 152,
          height: 152,
          title: 'Психоаналітична терапія',
          description: 'Форма тривалої терапії, яка найкраще допомагає людям зрозуміти та подолати проблеми, пов\'язані з їх психологічними та емоційними станами.'
        },
        {
          src: '99.png',
          width: 129,
          height: 129,
          title: 'Разові консультації',
          description: 'Коротка форма терапії, яка зазвичай триває від кількох сесій до кількох місяців. Може бути використана для вирішення конкретних проблем або отримання підтримки в складних життєвих ситуаціях.'
        },
        {
          src: '101.png',
          width: 149,
          height: 149,
          title: 'Групова терапія',
          description: 'Форма психоаналітичної терапії, в якій група людей спілкується один з одним, вони діляться своїм досвідом та підтримують один одного у розумінні та подоланні своїх проблем.'
        },
        {
          src: '102.png',
          width: 160,
          height: 160,
          title: 'Консультації з емоційно-психологічного розвитку',
          description: 'Психоаналітик може допомогти людям усвідомити свій потенціал та покращити якість свого життя, ґрунтуючись на психоаналітичних принципах.'
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
  margin-top: 88px;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #1D2317;
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
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #1D2317;
}
.service__card--description {
  width: 350px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #1D2317;
}
</style>
