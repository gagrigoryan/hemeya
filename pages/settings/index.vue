<template>
  <section class="settings py-5">
    <h4 class="px-6">
      Настройки
    </h4>
    <div class="settings__item">
      <div class="settings__item-lang px-8 mt-6 d-flex align-center justify-space-between">
        <div class="settings__item-title">
          Язык
        </div>
        <div class="settings__item-content d-flex">
          <v-img
            width="28"
            src="https://www.countryflags.io/gb/flat/64.png"
            class="mr-3"
          />
          <v-img
            width="28"
            src="https://www.countryflags.io/ru/flat/64.png"
          />
        </div>
      </div>
      <div class="settings__item-theme px-8 mt-6 d-flex align-center justify-space-between">
        <div class="settings__item-title">
          Тема
        </div>
        <div class="settings__item-content d-flex">
          <div class="radio d-flex mt-2">
            <div class="mr-2">
              <input id="dark" v-model="themeChoose" value="dark" type="radio">
              <label for="dark" class="radio-label">Темная</label>
            </div>
            <div class="">
              <input id="light" v-model="themeChoose" value="light" type="radio">
              <label for="light" class="radio-label">Светлая</label>
            </div>
          </div>
        </div>
      </div>
      <div class="settings__item-password px-8 mt-6 d-flex align-center justify-space-between">
        <div class="settings__item-title">
          Пароль
        </div>
        <div class="settings__item-content d-flex">
          <div class="input mr-2">
            <input v-model="user.password" readonly :type="passwordShow ? 'text' : 'password'">
            <v-icon class="input__icon" @click="passwordShow = !passwordShow">
              {{ passwordShow ? 'mdi-eye' : 'mdi-eye-off' }}
            </v-icon>
          </div>
          <v-btn
            icon
            fab
            height="30"
            width="30"
          >
            <v-icon color="#6E81A0">
              mdi-pencil
            </v-icon>
          </v-btn>
        </div>
      </div>
      <div class="settings__item-city px-8 mt-6 d-flex align-center justify-space-between">
        <div class="settings__item-title">
          Город
        </div>
        <div class="settings__item-content d-flex">
          <div class="input mr-2">
            <input :value="user.city" readonly type="text">
          </div>
          <v-btn
            icon
            fab
            height="30"
            width="30"
            @click="editCity = !editCity"
          >
            <v-icon color="#6E81A0">
              mdi-pencil
            </v-icon>
          </v-btn>
        </div>
      </div>
      <edit-card
        v-if="editCity"
        v-model="user.city"
        class="mt-2"
      />

      <div class="settings__item-role px-8 mt-6 d-flex align-center justify-space-between">
        <div class="settings__item-title">
          Профессия
        </div>
        <div class="settings__item-content d-flex">
          <div class="input mr-2">
            <input v-model="user.role" readonly type="text">
          </div>
          <v-btn
            icon
            fab
            height="30"
            width="30"
            @click="editRole = !editRole"
          >
            <v-icon color="#6E81A0">
              mdi-pencil
            </v-icon>
          </v-btn>
        </div>
      </div>
      <edit-card
        v-if="editRole"
        v-model="user.role"
        class="mt-2"
      />

      <div class="settings__item-geography px-8 mt-6 d-flex align-center justify-space-between">
        <div class="settings__item-title">
          География
        </div>
        <div class="settings__item-content d-flex">
          <div class="input mr-2">
            <input :value="user.geography" readonly type="text">
          </div>
          <v-btn
            icon
            fab
            height="30"
            width="30"
            @click="editGeo = !editGeo"
          >
            <v-icon color="#6E81A0">
              mdi-pencil
            </v-icon>
          </v-btn>
        </div>
      </div>
      <edit-card
        v-if="editGeo"
        v-model="user.geography"
        class="mt-2"
      />

      <div class="settings__item-follows px-8 mt-6 d-flex align-center justify-space-between">
        <div class="settings__item-title">
          Подписки
        </div>
        <div class="text-center">
          {{ user.follows }}
        </div>
        <div class="settings__item-content d-flex">
          <v-btn
            icon
            fab
            height="30"
            width="30"
          >
            <v-icon color="#6E81A0">
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </div>
      </div>
      <div class="settings__item-status px-8 mt-6 d-flex align-center justify-space-between">
        <div class="settings__item-title">
          Статус
        </div>
        <div class="settings__item-content d-flex">
          <v-btn
            icon
            fab
            height="30"
            width="30"
            to="/status"
          >
            <v-icon color="#6E81A0">
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </div>
      </div>

      <div class="settings__item-interests px-8 mt-6 d-flex align-center justify-space-between">
        <div class="settings__item-title">
          Интересы
        </div>
        <div class="settings__item-content d-flex">
          <div class="input mr-2">
            <input :value="user.interests" readonly type="text">
          </div>
          <v-btn
            icon
            fab
            height="30"
            width="30"
            @click="editInterests = !editInterests"
          >
            <v-icon color="#6E81A0">
              mdi-pencil
            </v-icon>
          </v-btn>
        </div>
      </div>
      <edit-card
        v-if="editInterests"
        v-model="user.interests"
        class="mt-2"
      />

      <div class="settings__item-hidden px-8 mt-6 d-flex align-center justify-space-between">
        <div class="settings__item-title">
          Скрытые публикации
        </div>
        <div class="settings__item-content d-flex">
          <v-btn
            icon
            fab
            height="30"
            width="30"
            to="/hidden"
          >
            <v-icon color="#6E81A0">
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </div>
      </div>
      <div class="settings__item-invite px-8 mt-6 d-flex align-center justify-space-between">
        <div class="settings__item-title">
          Инвайты
        </div>
        <div class="settings__item-content d-flex">
          <v-btn
            icon
            fab
            height="30"
            width="30"
          >
            <v-icon color="#6E81A0">
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Index',
  layout: 'main',
  components: {
    EditCard: () => import(/* webpackPrefetch: true */'../../components/settings/EditCard')
  },
  data: () => ({
    themeChoose: 'light',
    passwordShow: false,
    user: {
      password: 'Password',
      city: ['Москва', 'Ереван'],
      role: ['Дизайнер'],
      geography: ['Россия', 'Армения', 'США'],
      follows: 1600,
      interests: ['Дизайн', 'Бизнес']
    },
    editCity: false,
    editRole: false,
    editGeo: false,
    editInterests: false
  })
}
</script>

<style lang="sass" scoped>
.settings
  margin-top: 100px
  margin-bottom: 100px
  width: 100%
  overflow: hidden
  font-family: Roboto, sans-serif
  h4
    font-family: Lato, sans-serif
    font-size: 18px !important
  &__item
    &-title
      font-size: 16px
      color: #334669

label
  font-weight: 400

input
  border-radius: 5px
  width: 10rem
  min-height: 30px !important
  height: 35px !important
  padding: 5px 7px !important
  text-overflow: ellipsis

.input
  position: relative
  &__icon
    position: absolute
    right: 7px
    top: 50%
    transform: translateY(-50%)
</style>
