import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',

  head: {
    titleTemplate: 'Psy',
    title: 'Psy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    'aos/dist/aos.css',
    "~/assets/global.css",
  ],

  plugins: [
    { src: '~/plugins/Aos', ssr: false },
    { src: '~plugins/vue-scrollto.js' }
  ],

  components: true,

  buildModules: [
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  modules: [
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
    vendor: ['aos']
  }
}
