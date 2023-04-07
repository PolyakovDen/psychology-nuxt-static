<template>
  <div id="footer" class="wrapper">
    <v-container fluid class="pl-5 pr-5">
      <div class="footer d-flex justify-space-between flex-wrap mt-16 mb-10">
        <img src="/footer.png" alt="Олександр Самолюк" width="235" height="209">
        <div class="footer__my-contacts d-flex flex-column">
          <h3 class="footer__my-contacts--title">
            {{ $t('53') }}
          </h3>
          <p class="footer__my-contacts--contacts mt-3">
            {{ $t('54') }}
          </p>
          <div class="pl-2 d-flex align-center">
            <img src="/email.png" alt="Email" width="29" height="29">
            <span class="footer__my-contacts__desc pl-3">aleks.samolyuk@gmail.com</span>
          </div>
          <a href="https://t.me/OleksandrSam" target="_blank" rel="noopener noreferrer" class="d-flex align-center">
            <img src="/telegram.png" alt="Telegram" width="48" height="42">
            <span class="footer__my-contacts__desc">@OleksandrSam</span>
          </a>
          <a href="https://wa.me/15616483976" target="_blank" rel="noopener noreferrer">
            <img src="/viber.png" alt="WhatsApp" width="48" height="42">
          </a>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FooterVue'
}
</script>

<style scoped>
  .container {
    width: 700px !important;
  }
  .wrapper {
    background-color: #1D2317;
    color: white;
  }

  .footer__my-contacts--title {
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
  }

  a {
    text-decoration: none;
  }

  .footer__my-contacts__desc {
    display: block;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    text-decoration: none;
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
