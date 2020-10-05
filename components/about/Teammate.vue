<template>
  <div class="person d-flex">
    <div class="person__img mr-4">
      <v-avatar size="70">
        <v-img
          :src="require(`~/assets/img/users/${item.img}`)"
          width="70"
          height="70"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular size="20" width="3" indeterminate color="blue lighten-2" />
            </v-row>
          </template>
        </v-img>
      </v-avatar>
    </div>
    <div class="person__info">
      <h4>{{ item.name }}</h4>
      <span class="person__info-role my-0 py-0">{{ item.role }}</span>
      <span class="person__info-email my-0 py-0">{{ item.email }}</span>
      <span class="person__info-tel my-0 py-0">{{ item.tel }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teammate',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    item: {
      type: Object
    }
  }
}
</script>

<style lang="sass" scoped>
.person
  font-family: Lato, sans-serif
  &__info
    span
      font-size: 12px
      line-height: 16px
      display: block
      color: #6E81A0
      font-weight: normal
</style>
