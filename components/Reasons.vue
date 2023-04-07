<template>
  <div class="wrapper">
    <v-container fluid class="pl-5 pr-5">
      <v-row no-gutters class="reasons">
        <v-col cols="12">
          <h2 class="reasons__title text-center">
            {{ $t('9') }}
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
          <img
            class="reason__card--img"
            :src="reason.img"
            alt=""
            :width="reason.width"
            :height="reason.height"
            data-aos="fade-up"
            data-aos-delay="300"
          >
          <p class="reason__card--description" data-aos="fade-up" data-aos-delay="400">
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
          width: 136,
          height: 87,
          description: this.$t('10')
        },
        {
          img: '2.png',
          width: 136,
          height: 91,
          description: this.$t('11')
        },
        {
          img: '3.png',
          width: 136,
          height: 86,
          description: this.$t('12')
        },
        {
          img: '4.png',
          width: 136,
          height: 90,
          description: this.$t('13')
        },
        {
          img: '5.png',
          width: 136,
          height: 87,
          description: this.$t('14')
        },
        {
          img: '6.png',
          width: 136,
          height: 81,
          description: this.$t('15')
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

  .reasons {
    margin-top: 88px !important;
  }
  .reasons__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
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
    margin-top: 16px;
    margin-bottom: 40px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
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
