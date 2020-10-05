<template>
  <section class="about py-5 px-6">
    <h4>О проекте Hemeya</h4>
    <div class="about__text mt-8">
      <p
        v-for="(text, index) in aboutText.split('\n')"
        :key="index"
      >
        {{ text }}
      </p>
    </div>
    <div class="team">
      <p>Наша команда</p>
      <Teammate
        v-for="item in team"
        :key="item.id"
        :item="item"
        class="mb-6"
      />
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
    aboutText: 'Работаете с динамическим ретаргетингом? Теперь с функцией «Новые клиенты» вы можете показывать товары даже тем пользователям, которые никогда не посещали ваш сайт. \n' +
      '\n' +
      'Заходите в рекламный кабинет, настраивайте аудиторию, выбирайте прайс-лист и активируйте опцию — готово! Алгоритм сам сформирует карусель с наиболее подходящими предложениями и покажет её будущим клиентам. \n' +
      '\n' +
      'Заходите в рекламный кабинет, настраивайте аудиторию, выбирайте прайс-лист и активируйте опцию — готово! Алгоритм сам сформирует карусель с наиболее подходящими предложениями и покажет её будущим клиентам. \n' +
      '\n' +
      'Работаете с динамическим ретаргетингом? Теперь с функцией «Новые клиенты» вы можете показывать товары даже тем пользователям, которые никогда не посещали ваш сайт. ',
    team: [
      {
        id: 1,
        img: 'user1.png',
        name: 'Мара Мелконян',
        role: 'UX/UI дизайнер',
        email: 'melqonyan.mara@gmail.com',
        tel: '+79200712424'
      },
      {
        id: 2,
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
.about
  margin-top: 100px
  margin-bottom: 100px
  width: 100%
  overflow: hidden
  font-family: Roboto, sans-serif
  &__text
    p
      font-family: Lato, sans-serif
      font-style: normal
      font-weight: 300
      font-size: 14px
      line-height: 17px
      color: #000000

.team
  color: $mainBlue !important
</style>
