<template>
  <section class="payment px-6 py-7">
    <v-row>
      <v-col
        cols="6"
      >
        <payment-card-hard
          :selected="selectedCard === 0"
          :logo="'payment/Visa.png'"
          @click="selectedCard = 0"
        />
      </v-col>
      <v-col
        cols="6"
      >
        <payment-card
          :selected="selectedCard === 1"
          :logo="'payment/PayPal.png'"
          @click="selectedCard = 1"
        />
      </v-col>
      <v-col
        cols="6"
      >
        <payment-card
          :selected="selectedCard === 2"
          :logo="'payment/hemeyu.png'"
          @click="selectedCard = 2"
        />
      </v-col>
    </v-row>
    <div class="payment__cards">
      <div v-if="selectedCard === 0" class="payment__cards-visa mt-4">
        <h2 class="mb-8">
          Выберете карту:
        </h2>
        <v-row
          v-for="(card, index) in visaCards"
          :key="index"
        >
          <v-col
            cols="6"
          >
            <payment-card-hard
              :number="card"
              :selected="selectedVisaCard === index"
              :logo="'payment/Visa.png'"
              @click="selectedVisaCard = index"
            />
          </v-col>
        </v-row>
      </div>
      <div v-if="selectedCard === 1" class="payment__cards-visa mt-4">
        <h2 class="mb-8">
          Выберете способ оплаты:
        </h2>
        <v-row>
          <v-col
            cols="12"
          >
            <payment-card-hard
              :logo="'payment/PayPal.png'"
              :message="'Доступно 4000 руб.'"
            />
          </v-col>
        </v-row>
      </div>
      <div v-if="selectedCard === 2" class="payment__cards-visa mt-4">
        <h2 class="mb-8">
          Выберите способ оплаты:
        </h2>
        <v-row>
          <v-col
            cols="12"
          >
            <payment-card-hard
              :logo="'payment/hemeyu.png'"
              :message="'Доступно 4000 руб.'"
            />
          </v-col>
        </v-row>
      </div>
      <div class="payment__cards-btn px-16">
        <primary-btn @click="payDialog = true">
          Подтвердить
        </primary-btn>
      </div>
    </div>
    <m-dialog :open.sync="payDialog" persistent>
      <Preloader v-if="payLoader" />
      <div class="dialog__content px-5 pt-11 pb-2">
        <p v-if="payDone" class="text-center">
          Ваша оплата завершена!
        </p>
        <p v-if="!payDone" class="text-center">
          Вы действительно хотите купить фон?
        </p>
        <div v-if="!payDone" class="dialog__content-action">
          <v-row>
            <v-col
              cols="6"
            >
              <primary-btn class="btn" @click="pay">
                Купить
              </primary-btn>
            </v-col>
            <v-col
              cols="6"
            >
              <primary-btn
                class="btn"
                color="#A0A1A3"
                @click="payDialog = false"
              >
                Отмена
              </primary-btn>
            </v-col>
          </v-row>
        </div>
      </div>
    </m-dialog>
  </section>
</template>

<script>
import PaymentCard from '../../components/payment/PaymentCard'
import PaymentCardHard from '../../components/payment/PaymentCardHard'
import PrimaryBtn from '../../components/PrimaryBtn'
import Preloader from '../../components/Preloader'
const dialog = () => import('../../components/dialog')

export default {
  name: 'Index',
  layout: 'main',
  components: {
    PaymentCard,
    PaymentCardHard,
    PrimaryBtn,
    'm-dialog': dialog,
    Preloader
  },
  data: () => ({
    selectedCard: 0,
    visaCards: [
      '**** **** 2245', '**** **** 3256'
    ],
    selectedVisaCard: 0,
    payDialog: false,
    payLoader: false,
    payDone: false
  }),
  methods: {
    pay () {
      this.payLoader = true
      setTimeout(() => {
        this.payLoader = false
        this.payDone = true
      }, 1500)
      setTimeout(() => {
        this.$router.push('/profile')
      }, 2400)
    }
  }
}
</script>

<style lang="sass" scoped>
.payment
  margin-top: 100px
  margin-bottom: 100px
  width: 100%
  overflow: hidden
  &__cards
    &-btn
      width: 100%
      position: absolute
      bottom: 100px
      left: 0

h2
  font-family: Lato, sans-serif
  font-style: normal
  font-weight: bold
  font-size: 24px
  line-height: 26px
  color: #334669

.dialog__content
  width: 100%
  height: 100%
  color: #334669
  font-size: 18px
  position: relative
</style>
