<template>
  <v-container fluid class="pl-5 pr-5">
    <h2 class="usefulness__title text-center">
      {{ $t('25') }}
    </h2>
    <div class="usefulness__cards">
      <div v-for="(item, index) in usefulness" :key="index" class="usefulness__card pt-6 pl-4 pr-4 pb-16">
        <div class="usefulness__card--title-wrapper" data-aos="fade-up" :data-aos-delay="item.delay">
          <h3 class="usefulness__card--title text-center">
            {{ item.title }}
          </h3>
        </div>
        <div class="divider mt-4 mb-4" />
        <p class="usefulness__card--description" data-aos="fade-up" :data-aos-delay="item.delay + 20">
          {{ item.description }}
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      usefulness: [
        {
          title: this.$t('26'),
          description: this.$t('27'),
          number: 1,
          delay: 100
        },
        {
          title: this.$t('28'),
          description: this.$t('29'),
          number: 2,
          delay: 150
        },
        {
          title: this.$t('30'),
          description: this.$t('31'),
          number: 3,
          delay: 200
        },
        {
          title: this.$t('32'),
          description: this.$t('33'),
          number: 4,
          delay: 250
        },
        {
          title: this.$t('34'),
          description: this.$t('35'),
          number: 5,
          delay: 250
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  width: 1400px !important;
}
.usefulness__title {
  font-size: 30px;
  color: #37432b;
  margin-top: 20px;
}
.usefulness__cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
  margin-right: 10px;
}
@media screen and (max-width: 560px) {
  .usefulness__cards {
    justify-content: center !important;
  }
}
.usefulness__card {
  border-radius: 30px;
  margin-top: 40px;
  width: 200px;
  height: 330px;
  display: flex;
  flex-direction: column;
  background-color: #5c7148;
  color: white;
}
.divider {
  border-bottom: 2px solid white;
}
.usefulness__card--title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.usefulness__card--title {
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
}
.usefulness__card--description {
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  margin: 0 auto;
}
</style>
