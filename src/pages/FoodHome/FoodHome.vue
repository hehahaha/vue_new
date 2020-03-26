<template>
    <div class="food_home">
      <HeaderBar>
        <div class="login_register" slot="right">登录|注册</div>
        <div class="sousuo_icon" slot="left">
          <i class="iconfont icon-sousuo1"></i>
        </div>
      </HeaderBar>
      <div class="food_kind" v-if="foodKindInfoB">
        <swiper ref="mySwiper" class="mySwiper" :options="swiperOptions">
          <swiper-slide class="slide_item" v-for="(value, index) in foodKindInfoB" :key="index">
            <div v-for="(value1, index1) in value" :key="index1">
              <img :src="value1.imgUrl">
              <span>{{value1.name}}</span>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <ShopList :fixed="fixed"></ShopList>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ShopList from '../../components/ShopList/ShopList'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
export default {
  name: 'FoodHome',
  components: {
    ShopList,
    HeaderBar,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      fixed: false,
      foodKindInfoBc: [],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      }
    }
  },
  computed: {
    ...mapState(['foodKindInfo']),
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    foodKindInfoB () {
      const arr0 = this.foodKindInfo
      return this.arrayCopy(arr0)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.menu, true)
  },
  methods: {
    arrayCopy (arr0) {
      let obj1 = {}
      let arr1 = []
      let arr2 = []
      arr0.forEach((arr, i) => {
        for (let key in arr) {
          obj1[key] = arr[key]
        }
        obj1.name = obj1.name.substring(1, obj1.name.length - 1)
        arr1.push(obj1)
        obj1 = {}
        if (arr1.length === 8 || i === arr0.length - 1) {
          arr2.push(arr1)
          arr1 = []
        }
      })
      return arr2
    },
    menu (eve) {
      if (eve.target.scrollTop > 205) {
        this.fixed = true
      }
      if (eve.target.scrollTop < 205) {
        this.fixed = false
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.food_home
  height 100%
  overflow scroll
  background-color #f0f0f0
  .login_register
    margin-right 5px
  .sousuo_icon
    margin-left 5px
  .mySwiper
    margin-top 10px
    padding 10px 0 20px
    background-color white
    .slide_item
      display flex
      flex-wrap wrap
      >div
        display flex
        flex-direction column
        justify-content space-around
        align-items center
        margin-top 10px
        width 25%
        img
          border-radius 50%
        span
          font-size 14px
          color rgba(0, 0, 0, 0.61)

</style>
