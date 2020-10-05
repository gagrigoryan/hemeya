<template>
  <filter-drawer>
    <v-row class="mt-10">
      <v-col>
        <choose-menu
          v-model="cityChoose"
          :themes="cityItems"
        />
      </v-col>

      <v-col>
        <choose-menu
          v-model="typeChoose"
          :themes="typeItems"
        />
      </v-col>

      <v-col>
        <choose-menu
          v-model="dateChoose"
          :themes="dateItems"
        />
      </v-col>
    </v-row>

    <primary-btn
      class="mt-15"
      @click="addFilters"
    >
      Применить
    </primary-btn>
  </filter-drawer>
</template>

<script>
import FilterDrawer from '../FilterDrawer'
import ChooseMenu from '../ChooseMenu'
import PrimaryBtn from '../PrimaryBtn'

export default {
  name: 'StatusFilter',
  components: {
    FilterDrawer,
    ChooseMenu,
    PrimaryBtn
  },
  computed: {
    cityItems () {
      return this.$store.getters['status/getCityItems']
    },

    typeItems () {
      return this.$store.getters['status/getTypeItems']
    },

    dateItems () {
      return this.$store.getters['status/getDateItems']
    },

    cityChoose: {
      get () {
        return this.$store.getters['status/getCityChoose']
      },

      set (value) {
        this.$store.dispatch('status/SetCityChoose', value)
      }
    },

    typeChoose: {
      get () {
        return this.$store.getters['status/getTypeChoose']
      },

      set (value) {
        this.$store.dispatch('status/SetTypeChoose', value)
      }
    },

    dateChoose: {
      get () {
        return this.$store.getters['status/getDateChoose']
      },

      set (value) {
        this.$store.dispatch('status/SetDateChoose', value)
      }
    }
  },
  methods: {
    addFilters () {
      this.$store.dispatch('ToggleFilterDrawer', false)
      this.$emit('hasFiltered')
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
