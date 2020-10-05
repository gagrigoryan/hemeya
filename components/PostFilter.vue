<template>
  <filter-drawer>
    <v-row class="mt-10">
      <v-col>
        <choose-menu
          v-model="countryChoose"
          :themes="countryItems"
        />
      </v-col>

      <v-col>
        <choose-menu
          v-model="cityChoose"
          :themes="cityItems"
        />
      </v-col>

      <v-col>
        <choose-menu
          v-model="dateChoose"
          :themes="dateItems"
        />
      </v-col>

      <v-col>
        <choose-menu
          v-model="themeChoose"
          :themes="themeItems"
        />
      </v-col>

      <v-col>
        <choose-menu
          v-model="typeChoose"
          :themes="typeItems"
        />
      </v-col>
    </v-row>

    <div class="generation mt-8">
      <p>Поколение</p>
      <div class="checkbox">
        <div class="mt-4">
          <input id="X" v-model="gen" name="X" value="X" type="checkbox">
          <label class="check-label" for="X">X</label>
        </div>
        <div class="mt-4">
          <input id="Y" v-model="gen" name="Y" value="Y" type="checkbox">
          <label class="check-label" for="Y">Y</label>
        </div>
        <div class="mt-4">
          <input id="Z" v-model="gen" name="Z" value="Z" type="checkbox">
          <label class="check-label" for="Z">Z</label>
        </div>
        <div class="mt-4">
          <input
            id="all"
            v-model="gen"
            name="all"
            value="all"
            type="checkbox"
            @click="allChecked"
          >
          <label class="check-label" for="all">Все</label>
        </div>
      </div>
    </div>
    <div class="language mt-8">
      <p>Язык</p>
      <div class="language__items d-flex align center">
        <div class="en d-flex mr-2 align-center">
          <v-img
            width="28"
            src="https://www.countryflags.io/gb/flat/64.png"
            class="mr-1"
          />
          Английский
        </div>
        <div class="ru d-flex align-center">
          <v-img
            width="28"
            src="https://www.countryflags.io/ru/flat/64.png"
            class="mr-1"
          />
          Русский
        </div>
      </div>
    </div>

    <primary-btn
      class="mt-15"
    >
      Применить
    </primary-btn>
  </filter-drawer>
</template>

<script>
import FilterDrawer from './FilterDrawer'
import ChooseMenu from './ChooseMenu'
import PrimaryBtn from './PrimaryBtn'

export default {
  name: 'PostFilter',
  components: {
    FilterDrawer,
    ChooseMenu,
    PrimaryBtn
  },
  data: () => ({
    countryItems: ['Россия', 'Армения', 'США'],
    cityItems: ['Москва', 'Ереван', 'Вашингтон'],
    dateItems: ['Сегодня', 'Вчера', 'Неделя'],
    themeItems: ['Тема 1', 'Тема 2', 'Тема 3'],
    typeItems: ['Тип 1', 'Тип 2', 'Тип 3'],

    countryChoose: 'Страна',
    cityChoose: 'Город',
    dateChoose: 'Сегодня',
    themeChoose: 'Тема',
    typeChoose: 'Тип',

    gen: ['X']
  }),
  methods: {
    allChecked () {
      const checkedArr = ['X', 'Y', 'Z', 'all']
      if (this.gen.length === 4) { this.gen = [] } else { this.gen = checkedArr }
    }
  }
}
</script>

<style lang="sass" scoped>

p
  font-family: Roboto, sans-serif
  font-style: normal
  font-weight: normal
  font-size: 16px
  line-height: 19px
  color: #334669

label
  font-family: Roboto, sans-serif
  font-style: normal
  font-weight: normal
  font-size: 12px
  line-height: 14px
  color: #334669

</style>
