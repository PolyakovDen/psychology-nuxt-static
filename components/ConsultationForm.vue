<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="consultation__btn pa-10 mt-10"
          v-bind="attrs"
          v-on="on"
        >
          Получить консультацию
        </v-btn>
      </template>

      <div class="form">
        <v-form
          ref="form"
          name="formPost"
          v-model="valid"
          lazy-validation
          method="POST"
          action="/success"
          data-netlify="true"
          class="consultation__form--block"
        >
          <input type="hidden" name="form-name" value="formPost" />
          <v-container>
            <v-row justify="center" class="pa-2">
              <v-col
                class="test pa-8 pb-3"
                cols="12"
              >
                <v-text-field
                  v-model="name"
                  name="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Ваше имя"
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
                <v-text-field
                  v-model="number"
                  name="number"
                  :rules="numberRules"
                  label="Номер телефона"
                  required
                  class="consultation__field"
                  outlined
                  rounded
                  background-color="#cad7bf"
                />
                <v-textarea
                  v-model="annotation"
                  name="annotation"
                  label="Примечание"
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
                  @click="validate"
                  type="submit"
                  outlined
                  rounded
                >
                  Отправить
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: "ConsultationForm",
    data () {
      return {
        dialog: false,
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Заполните имя пожалуйста',
          v => (v && v.length <= 10) || 'Имя должно быть меньше 10 символов'
        ],
        email: '',
        emailRules: [
          v => !!v || 'Заполните E-mail пожалуйста',
          v => /.+@.+\..+/.test(v) || 'E-mail должен быть формата: test@test.com'
        ],
        number: '',
        numberRules: [
          v => !!v || 'Заполните телефон пожалуйста'
        ],
        annotation: ''
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
  .consultation__btn {
    text-transform: none;
    font-size: 18px !important;
    background-color: #5c7148 !important;
    border-radius: 50px;
  }
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
  ::v-deep .v-dialog {
    border-radius: 25px !important;
  }
  ::v-deep .v-counter {
    color: #47494e !important;
  }
  .consultation__submit {
    background-color: #37432b;
    border: none;
  }
</style>
