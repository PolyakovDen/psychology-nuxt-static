<template>
  <v-container fluid fill-height class="success--page">
    <v-row justify="center" align="center">
      <v-col lg="7" md="8" sm="10">
        <div class="success__messages pa-10">
          <h2 class="text-center success__messages--title">
            {{ $t('65') }}
          </h2>
          <p class="text-center success__messages--text">
            {{ $t('66') }}
          </p>
          <v-btn block color="primary" variant="plain" class="mt-10">
            <nuxt-link class="link__home" to="/">
              {{ $t('67') }}
            </nuxt-link>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Success'
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
    margin-top: 20px !important;
    font-size: 14px;
  }
  .link__home {
    text-decoration: none;
    color: white;
  }
</style>
