<template>
  <v-app-bar class="main__navigation" color="#1D2317" fixed app elevate-on-scroll>
    <v-container fluid class="pa-0">
      <div class="d-flex justify-space-between align-center">
        <div class="header">
          <nuxt-link to="/" class="header__logo">
            {{ $t('1') }}
          </nuxt-link>
        </div>
        <v-spacer />
        <v-toolbar-items class="hidden-sm-and-down">
          <div class="d-flex align-center">
            <v-btn
              v-for="(item, index) in items"
              :key="index"
              v-scroll-to="item.link"
              class="toolbar__items pt-2 pb-2"
              text
            >
              {{ item.title }}
            </v-btn>
            <a href="https://t.me/OleksandrSam" target="_blank" rel="noopener noreferrer">
              <img src="/telegram.png" alt="Telegram" width="61" height="53">
            </a>
            <a href="https://wa.me/15616483976" target="_blank" rel="noopener noreferrer">
              <img src="/viber.png" alt="WhatsApp" width="61" height="53">
            </a>
          </div>
        </v-toolbar-items>
        <v-select
          v-model="language"
          class="language-selector"
          :items="['UA', 'RU']"
          @change="changeLanguage()"
        />
        <v-menu offset-y transition="slide-x-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="header__menu--logo hidden-md-and-up"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon size="30">
                mdi-menu
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              v-scroll-to="item.link"
            >
              <v-list-item-title class="menu__link">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
            <a href="https://t.me/OleksandrSam" target="_blank" rel="noopener noreferrer">
              <img src="/telegram.png" alt="Telegram" width="61" height="53">
            </a>
            <a href="https://wa.me/15616483976" target="_blank" rel="noopener noreferrer">
              <img src="/viber.png" alt="WhatsApp" width="61" height="53">
            </a>
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      items: [
        { link: '#main', title: this.$t('2') },
        { link: '#services', title: this.$t('3') },
        { link: '#footer', title: this.$t('4') }
      ],
      language: ''
    }
  },
  created () {
    this.$i18n.locale === 'uk' ? this.language = 'UA' : this.language = 'RU'
  },
  methods: {
    changeLanguage () {
      this.language === 'UA' ? this.$router.replace(this.switchLocalePath('uk')) : this.$router.replace(this.switchLocalePath('ru'))
    }
  }
}
</script>

<style scoped>
  .container {
    max-width: 1500px !important;
  }
  .header {
    margin: auto;
  }
  .header__logo {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
  .toolbar__items {
    text-transform: none;
    font-size: 17px !important;
  }
  .menu__link {
    cursor: pointer;
  }
  .menu__link:hover {
    border-bottom: 1px solid #fff;
    margin-bottom: -1px;
  }
  .header__menu--logo {
    background-color: transparent !important;
    box-shadow: none !important;
  }
  ::v-deep .v-list {
    background-color: #5c7148 !important;
  }

  .language-selector {
    max-width: 60px !important;
    margin-top: 10px;
  }
</style>
