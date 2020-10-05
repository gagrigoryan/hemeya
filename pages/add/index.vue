<template>
  <section class="add py-5 px-6">
    <post-card-big
      short
      :post="post"
      @clickImg="chooseFon"
      @clickText="enterText"
    />
    <div class="add__action">
      <v-row v-if="textFlag">
        <v-col
          cols="12"
          class=""
        >
          <div class="add__action-item text">
            <p class="my-0 mb-2">
              Наберите текст:
            </p>
            <textarea v-model="post.text" style="height: 12rem" class="pa-3" />
          </div>
        </v-col>
        <v-col
          cols="12"
        >
          <div class="text__buttons">
            <v-row>
              <v-col
                cols="6"
              >
                <primary-btn class="btn" @click="saveEnterText">
                  Сохранить
                </primary-btn>
              </v-col>
              <v-col
                cols="6"
              >
                <primary-btn
                  class="btn"
                  color="#A0A1A3"
                  @click="cancelEnterText"
                >
                  Отмена
                </primary-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-row v-else-if="fonFlag">
        <v-col
          cols="12"
          class=""
        >
          <div class="add__action-item fon">
            <v-row>
              <v-col
                v-for="(fon, index) in fons"
                :key="index"
                cols="4"
              >
                <v-card
                  width="100%"
                  height="100%"
                  flat
                  tile
                  @click="enterFon(fon)"
                >
                  <v-img
                    :src="require(`~/assets/img/${ fon }`)"
                    width="100%"
                    height="100%"
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
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col
          cols="12"
        >
          <div class="fon__buttons">
            <v-row>
              <v-col
                cols="6"
              >
                <primary-btn class="btn" @click="saveFon">
                  Далее
                </primary-btn>
              </v-col>
              <v-col
                cols="6"
              >
                <primary-btn
                  class="btn"
                  color="#A0A1A3"
                  @click="cancelFon"
                >
                  Отмена
                </primary-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col
          cols="12"
        >
          <div class="add__action-item type">
            <p class="my-0 mb-2">
              Выбери тип:
            </p>
            <choose-menu v-model="typeChoose" :themes="typeItems" />
          </div>
        </v-col>

        <v-col
          cols="12"
        >
          <div class="add__action-item theme">
            <p class="my-0 mb-2">
              Выбери тему:
            </p>
            <choose-menu v-model="themeChoose" :themes="themeItems" />
          </div>
        </v-col>

        <v-col
          cols="12"
          class=""
        >
          <div class="add__action-item hashtag">
            <p class="my-0 mb-2">
              Добавьте хэштеги:
            </p>
            <textarea v-model="hashtag" prefix="#" class="pa-3" />
          </div>
        </v-col>

        <v-col
          cols="12"
        >
          <div class="add__action-item hashtag">
            <p class="my-0 mb-2">
              Настроение:
            </p>
            <div class="smiles">
              <v-btn
                v-for="(smile, index) in smiles"
                :key="index"
                icon
                width="40"
                height="40"
                fab
              >
                <span v-html="smile" />
              </v-btn>
            </div>
          </div>
        </v-col>

        <v-col
          cols="12"
          class="mt-10"
        >
          <div class="add__action-item buttons text-center px-10">
            <primary-btn class="mb-5">
              Опубликовать
            </primary-btn>
            <nuxt-link
              :to="''"
              tag="a"
            >
              Сохранить как черновик
            </nuxt-link>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import PostCardBig from '../../components/PostCardBig'
import ChooseMenu from '../../components/ChooseMenu'
import PrimaryBtn from '../../components/PrimaryBtn'

export default {
  name: 'Index',
  components: {
    PostCardBig,
    ChooseMenu,
    PrimaryBtn
  },
  layout: 'main',
  data: () => ({
    post: {
      authorNick: 'Sasha Geo',
      author: 'Антон Павлов',
      text: '',
      img: ''
    },
    typeItems: ['Мысль', '1 тип', '2 тип'],
    typeChoose: 'Мысль',
    themeItems: ['1 тема', '2 тема'],
    themeChoose: 'Выбрать',
    hashtag: '#',
    smiles: ['&#128512;', '&#128523;', '&#128514;', '&#128520;', '&#128531;'],
    textFlag: false,
    oldTextValue: '',
    fonFlag: false,
    oldFonValue: '',
    fons: [
      'fons/fon1.png',
      'fons/fon2.png',
      'fons/fon3.png',
      'fons/fon4.png',
      'fons/fon5.png',
      'fons/fon6.png'
    ]
  }),
  methods: {
    chooseFon () {
      this.oldFonValue = this.post.img
      this.fonFlag = true
      this.textFlag = false
    },

    enterText () {
      this.oldTextValue = this.post.text
      this.textFlag = true
      this.fonFlag = false
    },

    cancelEnterText () {
      this.post.text = this.oldTextValue
      this.textFlag = false
    },

    saveEnterText () {
      this.textFlag = false
    },

    enterFon (fon) {
      this.post.img = fon
    },

    saveFon () {
      this.fonFlag = false
    },

    cancelFon () {
      this.post.img = this.oldTextValue
      this.fonFlag = false
    }
  }
}
</script>

<style lang="sass" scoped>
.add
  margin-top: 100px
  margin-bottom: 100px
  width: 100%
  overflow: hidden
  font-family: "Roboto", sans-serif

textarea
  width: 100%
  height: 7.3rem
  outline: none !important

span
  font-size: 26px

a
  color: #334669

</style>
