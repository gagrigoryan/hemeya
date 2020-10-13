<template>
  <m-dialog
    :open.sync="value"
    persistent
  >
    <div class="dialog">
      <div
        class="dialog__link my-5"
        :style="{color: successCopy ? '#0E7E38' : ''}"
      >
        {{ link }}
      </div>
      <v-btn
        class="dialog__btn"
        color="#334669"
        height="30"
        width="100"
        @click="copyLink"
      >
        Скопировать
      </v-btn>
    </div>
  </m-dialog>
</template>

<script>
import dialog from './dialog'

export default {
  name: 'ShareDialog',
  components: {
    'm-dialog': dialog
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
  data () {
    return {
      link: 'https://www.hemeya.com/post48485785393498734895sads4a5d8sad4as',
      successCopy: false
    }
  },
  watch: {
    value (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    copyLink () {
      navigator.clipboard.writeText(this.link)
        .then(() => {
          this.successCopy = true
        })
    },
    inputHandler (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
}
</script>

<style lang="sass" scoped>
.dialog
  height: 160px
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  &__link
    width: 90%
    height: 36px
    line-height: 36px
    font-size: 16px
    padding-left: 7px
    overflow: hidden
    text-overflow: ellipsis
    background: #E3EDF7
    box-shadow: inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2
    border-radius: 10px
    transition: all .3s ease
  &__btn
    border-radius: 5px
    color: #fff
    text-transform: unset
</style>
