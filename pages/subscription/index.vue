<template>
  <div class="subscription px-6 py-7">
    <search-filed v-model="search" class="search mb-4" />
    <choose-menu
      v-model="respondentChoose"
      :themes="respondents"
      width="140px"
    />
    <div class="subscription__content mt-4">
      <person-page v-if="respondentChoose === respondents[0]" />
      <brand-page v-else-if="respondentChoose === respondents[1]" />
    </div>
  </div>
</template>

<script>
import SearchFiled from '../../components/SearchFiled'
import ChooseMenu from '../../components/ChooseMenu'
const PersonPage = () => import('../../components/person/PersonPage')
const BrandPage = () => import('../../components/brand/BrandPage')

export default {
  name: 'Index',
  layout: 'main',
  components: {
    SearchFiled,
    PersonPage,
    BrandPage,
    ChooseMenu
  },
  data: () => ({
    search: null,
    respondents: ['Персоны', 'Бренды'],
    respondentChoose: 'Персоны'
  }),
  computed: {
  }
}
</script>

<style lang="sass" scoped>
.subscription
  margin-top: 100px
  margin-bottom: 100px
  width: 100%
  overflow: hidden

.search
  width: 100%
  height: 40px
</style>
