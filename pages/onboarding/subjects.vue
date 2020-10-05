<template>
  <div class="subjects">
    <div class="subjects__title mb-2">
      Возможно Вам понравится:
    </div>
    <div class="subjects__wrapper">
      <v-row>
        <v-col
          v-for="(subject, index) in subjects"
          :key="index"
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
              class="subjects__wrapper-item"
              width="150px"
              height="150px"
              dark
              color="#495B7B"
            >
              <h3 class="subjects__wrapper-item-title">
                {{ subject.name }}
              </h3>
            </v-card>
          </v-lazy>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subjects',
  data: () => ({
    checkedSubject: []
  }),
  computed: {
    subjects () {
      return this.$store.getters['onboarding/getSubjects']
    }
  },
  layout: 'onboarding'
}
</script>

<style lang="sass" scoped>
.subjects
  &__title
    font-family: Lato, sans-serif
    font-weight: bold
    font-size: 24px
    color: #334669
  &__wrapper
    &-item
      position: relative
      box-shadow: -8px 0px 8px rgba(244, 248, 251, 0.50254), 19px 21px 50px rgba(176, 195, 210, 0.727846)
      border-radius: 25px
      color: #E3EFF9 !important
      display: flex
      align-items: center
      justify-content: center
      &-check
        position: absolute
        top: 10px
        right: 10px

      &-title
        font-weight: 500
        font-size: 14px
        text-align: center
</style>
