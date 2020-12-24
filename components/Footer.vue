<template>
  <div class="wrapper">
    <v-container fluid class="pl-5 pr-5">
      <div class="footer d-flex justify-space-between flex-wrap mt-16 mb-10">
        <div class="footer__my-contacts">
          <h3 class="footer__my-contacts--title">Александр Самойлюк</h3>
          <p class="footer__my-contacts--contacts mt-3">КОНТАКТЫ</p>
          <p class="footer__my-contacts--city">м. Киев, Подол</p>
          <p class="footer__my-contacts--metro">м. Контрактовая площа</p>
          <p class="footer__my-contacts--street">вул. Хорива 25,</p>
          <p class="footer__my-contacts--organization">ПСИпространство "Practica"</p>
        </div>
        <div class="footer__my-social">
          <ul class="footer__my-social--list">
            <li class="footer__my-social--item d-flex mt-3">
              <img class="my-social--img mb-5" src="/18.png" alt="Instagram" width="30" height="30">
              <a class="my-social--link ml-4" href="#">www.Instagram.com</a>
            </li>
            <li class="footer__my-social--item d-flex">
              <img class="my-social--img mb-5" src="/19.png" alt="Facebook" width="30" height="30">
              <a class="my-social--link ml-4" href="#">www.Facebook.com</a>
            </li>
            <li class="footer__my-social--item d-flex">
              <img class="my-social--img" src="/20.png" alt="Telephone" width="30" height="25">
              <p class="my-social--number ml-4">9999999999</p>
            </li>
          </ul>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
name: "Footer.vue"
}
</script>

<style scoped>
  .container {
    width: 700px !important;
  }
  .wrapper {
    background-color: #1f2719;
    color: white;
  }
  .footer__my-contacts--city,
  .footer__my-contacts--metro,
  .footer__my-contacts--street,
  .footer__my-contacts--organization {
    font-size: 13px;
    line-height: 5px;
  }
  .my-social--link {
    color: white;
    text-decoration: none;
  }
</style>
