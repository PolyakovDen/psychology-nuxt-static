<template>
  <v-container fluid fill-height class="success--page">
    <v-row justify="center" align="center">
      <v-col lg="7" md="8" sm="10">
        <div class="success__messages pt-10 pb-10">
          <p class="text-center success__messages--text">Спасибо за ваше обращение.</p>
          <p class="text-center success__messages--text">Я свяжусь с вами в ближайшее время!</p>
          <nuxt-link class="link__home pl-10" to="/"><span class="link__home--back"><</span> Вернуться на главную</nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "success"
  }
</script>

<style scoped>
  .success--page {
    background-color: #dee3da;
  }
  .success__messages {
    background-color: #5c7148;
    border-radius: 25px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    color: white;
    line-height: 20px;
  }
  .success__messages--text {
    font-size: 21px;
  }
  .link__home {
    text-decoration: none;
    color: white;
  }
  .link__home:hover .link__home--back {
    color: blueviolet;
  }
</style>
