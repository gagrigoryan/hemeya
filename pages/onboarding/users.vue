<template>
  <div class="users">
    <div class="users__wrapper">
      <v-row>
        <v-col
          v-for="user in users"
          :key="user.id"
          cols="6"
        >
          <v-lazy
            :options="{
              threshold: .5
            }"
            min-height="153"
            transition="fade-transition"
          >
            <v-card
              class="users__wrapper-item"
              color="#495B7B"
              dark
            >
              <v-img
                :src="require('~/assets/img/users/' + user.img)"
                class="users__wrapper-item-img"
                height="118px"
                position="top"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="blue lighten-2" />
                  </v-row>
                </template>
              </v-img>
              <h3 class="users__wrapper-item-title mt-2">
                {{ user.name }}
              </h3>
              <v-card-subtitle class="users__wrapper-item-subtitle py-0">
                {{ user.profession }}
              </v-card-subtitle>
              <div class="users__wrapper-item-info d-flex align-center justify-space-around my-1">
                <div class="users__wrapper-item-info-comments ">
                  <font-awesome-icon :icon="['fas', 'quote-left']" />
                  {{ user.commentCount }}
                </div>
                <div class="users__wrapper-item-info-followers">
                  <font-awesome-icon :icon="['fas', 'user-friends']" />
                  {{ user.followersCount }}
                </div>
              </div>
              <div class="px-4" style="width: 100%;">
                <v-btn
                  class="mb-5 mt-2 users__wrapper-item-info-btn"
                  tile
                  flat
                  color="#334669"
                  height="20px"
                  width="100%"
                >
                  + Подписаться
                </v-btn>
              </div>
            </v-card>
          </v-lazy>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  layout: 'onboarding',
  computed: {
    users () {
      return this.$store.getters['onboarding/getUsers']
    }
  }
}
</script>

<style lang="sass" scoped>
.users
  &__title
    font-family: Lato, sans-serif
    font-weight: bold
    font-size: 24px
    color: #334669
  &__wrapper
    &-item
      border-radius: 27px !important
      position: relative
      text-align: center
      &-title
        text-align: center !important
        font-weight: 500
        font-size: 14px
        color: #E3EFF9
      &-info
        text-align: center !important
        &-btn
          text-transform: capitalize !important
          border-radius: 5px
          font-family: Roboto, sans-serif
          font-style: normal
          font-weight: normal
          font-size: 12px
          line-height: 14px
          color: #E4F0FA
</style>
