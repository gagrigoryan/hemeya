<template>
  <section class="rating py-5 px-6">
    <h4>Рейтинг</h4>
    <div class="rating__card mt-7">
      <v-img
        :src="require(`~/assets/img/users/${ user.img }`)"
        width="100%"
        height="12rem"
        class="rating__card-img"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular width="3" indeterminate color="blue lighten-2" />
          </v-row>
        </template>
        <div class="rating__card-info d-flex align-center justify-space-between pa-4">
          <div class="rating__card-info-name">
            {{ user.name }}
          </div>
          <div class="rating__card-info-rating">
            {{ user.rating }}
            <v-icon color="#334669">
              mdi-star
            </v-icon>
          </div>
        </div>
      </v-img>
    </div>
    <div class="rating__info mt-11">
      <v-row>
        <v-col
          cols="4"
          class="text-center"
        >
          <p class="count">
            {{ user.pubCount | countFilter }}
          </p>
          <p>
            Публикации
          </p>
        </v-col>
        <v-col
          cols="4"
          class="text-center"
        >
          <p class="count">
            {{ user.likesCount | countFilter }}
          </p>
          <p>
            Лайки
          </p>
        </v-col>
        <v-col
          cols="4"
          class="text-center"
        >
          <p class="count">
            {{ user.progress | countFilter }}
          </p>
          <p>
            Достижение
          </p>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Index',
  layout: 'main',
  filters: {
    countFilter (value) {
      if (value < 10000) {
        return value
      }
      return (value / 1000).toFixed(0).toString() + 'K'
    }
  },
  data: () => ({
    user: {
      name: 'Антон Павлов',
      img: 'user4.png',
      rating: 4.9,
      pubCount: 100,
      likesCount: 4456,
      progress: 0
    }
  })
}
</script>

<style lang="sass" scoped>
.rating
  margin-top: 100px
  margin-bottom: 100px
  width: 100%
  overflow: hidden
  &__card
    font-family: Lato, sans-serif
    &-img
      border-radius: 10px
    &-info
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 4rem
      background: rgba(0, 0, 0, 0.26)
      color: #E4F0FA
      &-name
        font-size: 14px
        font-weight: 700
      &-rating
        font-size: 18px
        font-weight: normal
  &__info
    font-family: Lato, sans-serif
    font-style: normal
    font-weight: 500
    font-size: 14px
    color: #6E81A0

.count
  margin-bottom: 8px !important
  color: $mainBlue
</style>
