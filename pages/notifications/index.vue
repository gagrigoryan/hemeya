<template>
  <section class="notifications px-6">
    <div class="notifications__links my-4 d-flex justify-space-between">
      <div
        class="notifications__links-item"
        :class="{'active-link': activeTab === 0}"
        @click="changeTab(0)"
      >
        Уведомления
      </div>
      <div
        class="notifications__links-item"
        :class="{'active-link': activeTab === 1}"
        @click="changeTab(1)"
      >
        Уведомления профиля
      </div>
    </div>
    <div class="notifications__list mt-7">
      <div v-if="activeTab === 0" class="mb-4">
        <div
          v-for="(value, name, index) in notices"
          :key="index"
          class=""
        >
          <div class="">
            {{ name === 'today' ? 'Сегодня:' : 'На этой неделе:' }}
          </div>
          <v-row>
            <v-col
              v-for="(notice, i) in value"
              :key="i"
              cols="12"
            >
              <keep-alive>
                <notice :item="notice" />
              </keep-alive>
            </v-col>
          </v-row>
        </div>
      </div>
      <div v-else class="mb-4">
        <div
          v-for="(value, name, index) in profileNotices"
          :key="index"
          class=""
        >
          <div class="">
            {{ name === 'today' ? 'Сегодня:' : 'На этой неделе:' }}
          </div>
          <v-row>
            <v-col
              v-for="(notice, i) in value"
              :key="i"
              cols="12"
            >
              <keep-alive>
                <notice :item="notice" :ask="false" />
              </keep-alive>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notice from '../../components/notifications/Notice'

export default {
  name: 'Index',
  layout: 'main',
  components: {
    Notice
  },
  data: () => ({
    activeTab: 0,
    notices: {
      today: [
        {
          author: 'sasha_geo',
          authorImg: 'user1.png',
          action: 'Прокомментировал:',
          postName: 'Крутой пост!!',
          postImg: 'fon1.png'
        },
        {
          author: 'sasha_geo',
          authorImg: 'user1.png',
          action: 'Прокомментировал:',
          postName: 'Крутой пост!!',
          postImg: 'fon1.png'
        }
      ],
      week: [
        {
          author: 'sasha_geo',
          authorImg: 'user1.png',
          action: 'Прокомментировал:',
          postName: 'Крутой пост!!',
          postImg: 'fon1.png'
        },
        {
          author: 'sasha_geo',
          authorImg: 'user1.png',
          action: 'Прокомментировал:',
          postName: 'Крутой пост!!',
          postImg: 'fon1.png'
        }
      ]
    },
    profileNotices: {
      today: [
        {
          author: 'sasha_geo',
          authorImg: 'user1.png',
          action: 'Подписался на ваши публикации'
        }
      ],
      week: [
        {
          author: 'sasha_geo',
          authorImg: 'user2.png',
          action: 'Подписался на ваши публикации'
        }
      ]
    }
  }),
  computed: {
  },
  methods: {
    changeTab (tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style lang="sass" scoped>
.notifications
  margin-top: 100px
  width: 100%
  &__links
    font-weight: 700
    font-family: Roboto, sans-serif
    color: #6E81A0
    &-item
      cursor: pointer
      transition: all .2s ease

.active-link
  color: #334669
</style>
