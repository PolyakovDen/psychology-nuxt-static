<template>
  <div class="text-center">
    <div class="form">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="consultation__form--block"
        action="https://formsubmit.co/aleks.samolyuk@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_next" value="https://samoliuk.com.ua/success/index.html">
        <v-container>
          <v-row justify="center" class="pa-2">
            <v-col
              class="test pa-4 pb-2"
              cols="12"
            >
              <v-text-field
                v-model="name"
                name="name"
                :counter="10"
                :rules="nameRules"
                :label="$t('55')"
                required
                class="consultation__field"
                outlined
                rounded
                background-color="#cad7bf"
              />
              <v-text-field
                v-model="email"
                name="email"
                :rules="emailRules"
                label="E-mail"
                required
                class="consultation__field"
                outlined
                rounded
                background-color="#cad7bf"
              />
              <v-radio-group v-model="messenger" inline class="messenger" name="messenger">
                <template v-slot:label>
                  <div>{{ $t('58') }}</div>
                </template>
                <v-radio label="Telegram" value="Telegram" />
                <v-radio label="WhatsApp" value="WhatsApp" />
              </v-radio-group>
              <v-text-field
                v-model="number"
                name="number"
                :rules="numberRules"
                :label="$t('56')"
                required
                class="consultation__field"
                outlined
                rounded
                background-color="#cad7bf"
              />
              <v-textarea
                v-model="annotation"
                name="annotation"
                :label="$t('57')"
                auto-grow
                required
                class="consultation__field"
                outlined
                rounded
                background-color="#cad7bf"
              />
              <v-btn
                :disabled="!valid"
                elevation="20"
                block
                class="consultation__submit mr-4"
                type="submit"
                outlined
                rounded
                @click="validate"
              >
                {{ $t('59') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConsultationForm',
  data () {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || this.$t('60'),
        v => (v && v.length <= 10) || this.$t('61')
      ],
      email: '',
      emailRules: [
        v => !!v || this.$t('62'),
        v => /.+@.+\..+/.test(v) || this.$t('63')
      ],
      number: '',
      numberRules: [
        v => !!v || this.$t('64')
      ],
      annotation: '',
      messenger: 'Telegram'
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    }
  }
}
</script>

<style scoped>

  .v-text-field--outlined >>> fieldset {
    border: 2px solid black;
  }
  ::v-deep .v-label {
    color: black !important;
    opacity: 1;
  }
  .form {
    background-color: #dee3da;
    border-radius: 25px;
  }
  .consultation__form--block {
    border-radius: 25px !important;
  }
  .container {
    border-radius: 25px !important;
  }
  ::v-deep .v-counter {
    color: #47494e !important;
  }
  .consultation__submit {
    background-color: #37432b;
    border: none;
  }

  .messenger {
    margin-top: 0 !important;
  }
</style>
