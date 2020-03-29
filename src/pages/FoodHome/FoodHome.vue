<template>
    <div ref='food_home' class="food_home" :class="tranStyle">
      <HeaderBar title="HeaderBar">
<!--        <div class="login_register" slot="right">登录|注册</div>-->
<!--        <div class="sousuo_icon" slot="left">-->
<!--          <i class="iconfont icon-sousuo1"></i>-->
<!--        </div>-->
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
      <ShopList @shopListLoaded="reqCode0=false" ref="shop_list" :fixed="fixed"></ShopList>
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

    // git config --global user.name "username"
    // git config --global user.email "email"

  },
  data () {
    return {
      fixed: false,
      tranStyle: '',
      eleFoodHome: {}, // food_home 元素
      reqCode0: false,
      mouseYmove: 0,
      mouseYstart: 0,
      mouseYend: true,
      foodKindInfoBc: [],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
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
    this.$nextTick(() => {
      this.eleFoodHome = document.getElementsByClassName('food_home')[0]
    })
    // 事件解绑
    window.removeEventListener('scroll', this.menu)
    window.removeEventListener('touchstart', this.pullPageA)
    window.removeEventListener('touchmove', this.pullPageB)
    window.removeEventListener('touchend', this.pullPageC)
    // 绑定事件
    window.addEventListener('scroll', this.menu, true)
    window.addEventListener('touchstart', this.pullPageA)
    window.addEventListener('touchmove', this.pullPageB)
    window.addEventListener('touchend', this.pullPageC)
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
        obj1.name = obj1.name.substring(1, obj1.name.length - 1) // 去除首尾引号
        arr1.push(obj1)
        obj1 = {}
        if (arr1.length === 8 || i === arr0.length - 1) {
          arr2.push(arr1)
          arr1 = []
        }
      })
      return arr2
    },
    menu (eve) { // 滚动条事件监听
      console.log(this.reqCode0)
      let scrollN = eve.target.scrollHeight - eve.target.scrollTop
      if ((!eve.target.scrollTop || scrollN === 617) && Math.abs(this.mouseYmove) < 80) {
        window.removeEventListener('touchmove', this.pullPageB)
        window.addEventListener('touchmove', this.pullPageB)
      } else {
        window.removeEventListener('touchmove', this.pullPageB)
      }
      // 控制 head 吸附
      if (eve.target.scrollTop > 205) {
        this.fixed = true
      }
      if (eve.target.scrollTop < 205) {
        this.fixed = false
      }
      if (scrollN < 717 && !this.reqCode0) {
        this.reqCode0 = true
        this.$store.dispatch('getShopListItem')
      }
    },
    pullPageA (ev) { // 获取第一次触摸点
      if (ev.target.scrollTop === 0) {
        window.removeEventListener('touchmove', this.pullPageB)
        window.addEventListener('touchmove', this.pullPageB)
      }
      this.mouseYstart = ev.touches[0].pageY
    },
    pullPageB (e) {
      this.tranStyle = ''
      this.mouseYmove = e.touches[0].pageY - this.mouseYstart
      if (this.mouseYmove > 0) {
        this.eleFoodHome.style.paddingTop = this.mouseYmove + 'px'
      } else {
        this.eleFoodHome.style.paddingBottom = -this.mouseYmove + 'px'
      }
      if (Math.abs(this.mouseYmove) > 60) {
        console.log(this.mouseYmove)
        window.removeEventListener('touchmove', this.pullPageB)
        setTimeout(() => {
          this.$store.dispatch('getFoodKindInfo')
          this.tranStyle = 'transtn_b'
          this.eleFoodHome.style.padding = 0 + 'px'
        }, 500)
      }
    },
    pullPageC (e) {
      window.removeEventListener('touchmove', this.pullPageB)
      if (Math.abs(this.mouseYmove) > 60) {
        setTimeout(() => {
          this.tranStyle = 'transtn_b'
          this.eleFoodHome.style.padding = 0 + 'px'
        }, 1000)
      } else {
        this.tranStyle = 'transtn_b'
        this.eleFoodHome.style.padding = 0 + 'px'
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.menu)
    window.removeEventListener('touchstart', this.pullPageA)
    window.removeEventListener('touchmove', this.pullPageB)
    window.removeEventListener('touchend', this.pullPageC)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.food_home
  height 100%
  overflow scroll
  background-color #f0f0f0
  &.transtn_a
    transition padding 800ms
  &.transtn_b
    transition padding 500ms
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
