<template>
  <section class="contacts py-5 px-6">
    <h4 class="">
      Контакты
    </h4>
    <div class="my-5">
      <p>Региональные представители:</p>
      <Teammate
        v-for="item in team"
        :key="item.id"
        class="mb-6"
        :item="item"
      />
    </div>
    <div class="my-5 office">
      <p class="py-0 mb-3">
        Центральный офис
      </p>
      <span class="mb-2">hemeya@gmail.com</span>
      <span class="mb-2">+7 920 071 24 24</span>
    </div>
  </section>
</template>

<script>
import Teammate from '../../components/about/Teammate'

export default {
  name: 'Index',
  layout: 'main',
  components: {
    Teammate
  },
  data: () => ({
    team: [
      {
        id: 1,
        img: 'user0.png',
        name: 'Саша Гео',
        role: 'Основатель',
        email: 'sasha@gmail.com',
        tel: '+79200712424'
      },
      {
        id: 2,
        img: 'user1.png',
        name: 'Мара Мелконян',
        role: 'UX/UI дизайнер',
        email: 'melqonyan.mara@gmail.com',
        tel: '+79200712424'
      },
      {
        id: 3,
        img: 'user2.png',
        name: 'Мара Мелконян',
        role: 'UX/UI дизайнер',
        email: 'melqonyan.mara@gmail.com',
        tel: '+79200712424'
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
.contacts
  margin-top: 100px
  margin-bottom: 100px
  font-family: "Roboto", sans-serif

.office
  span
    font-family: "Lato", sans-serif
    display: block
    font-weight: normal
    font-size: 12px
    line-height: 101.3%
    color: #6E81A0
</style>
