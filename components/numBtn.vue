<template>
  <button class="button" :depressed="!clickToggle" :class="{'active-btn': clickToggle}" @click="clickBtn">
    <slot />
  </button>
</template>
<script>
export default {
  name: 'NumBtn',
  data: () => ({
    clickToggle: false
  }),
  methods: {
    clickBtn () {
      this.clickToggle = true
      setTimeout(() => {
        this.clickToggle = false
      }, 250)
    }
  }
}
</script>

<style lang="sass" scoped>
.button
  font-size: 22px
  line-height: 26px
  color: #334669
  opacity: 0.63
  padding: 25px 40px !important
  border-radius: 0
  background: transparent
  //transition: all .3s ease-in
  outline: none !important

.active-btn
  background: #E4F0FA !important
  box-shadow: -11px -11px 20px rgba(255, 255, 255, 0.272044), -8px -40px 22px rgba(246, 251, 255, 0.384288), -8px 0px 8px rgba(244, 248, 251, 0.50254), 19px 21px 50px rgba(176, 195, 210, 0.727846)
  border-radius: 12px
</style>
