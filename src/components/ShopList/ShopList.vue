<template>
    <div class="shop_list" :class="{'fixed': fixed}">
      <div class="shop_list_head" :class="{'fixed_head': fixed}">
        <h3 class="title">商家列表</h3>
        <div class="rank_item">
          <span :class="{'on': compareType.indexOf('ranking') + 1}" @click="addType('ranking')">
            评分 {{compareType.indexOf('ranking') + 1 ? compareType.indexOf('ranking') + 1 : ''}}
          </span>
          <span :class="{'on': compareType.indexOf('xiao_liang') + 1}" @click="addType('xiao_liang')">
            销量 {{compareType.indexOf('xiao_liang') + 1 ? compareType.indexOf('xiao_liang') + 1 : ''}}
          </span>
          <span :class="{'on': compareType.indexOf('pei_song_ju_li') + 1}" @click="addType('pei_song_ju_li')">
            距离 {{compareType.indexOf('pei_song_ju_li') + 1 ? compareType.indexOf('pei_song_ju_li') + 1 : ''}}
          </span>
        </div>
      </div>
      <div class="shops" :class="{'fixed_shops': fixed}">
        <div class="shop_item" v-for="(value, index) in shopListOl" :key="index">
          <div class="item_img">
            <img :src="value.shopImage">
          </div>
          <div class="item_introduction">
            <div class="shop_name">
              <span>{{value.shopName}}</span>
            </div>
            <div>
                <div class="sell_star">
                  <i class="iconfont icon-xingxing"></i>
                  <span>{{value.ranking}}</span>
                  <span>月售 {{value.xiao_liang}}</span>
                </div>
                <div class="send_way" v-for="(value1, key, index1) in value.pei_song_fang_shi" :key="index1" :class="key">
                  <span>{{value1}}</span>
                </div>
            </div>
            <div>
              <div>
                <span>起送：￥{{value.qi_bu_jia}}</span>
                <span>配送：￥{{value.pei_song_fei}}</span>
              </div>
              <div>
                <span>{{value.pei_song_ju_li*2}} 分钟</span>
                <span>{{value.pei_song_ju_li}} km</span>
              </div>
            </div>
            <div>
              <span v-for="(value1, key, index1) in value.you_hui" :key="index1" :class="key">{{value1}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'ShopList',
  props: [
    'fixed'
  ],
  data () {
    return {
      compareType: [ // 店家排序的类型
        'ranking' // 默认评分排序
      ]
    }
  },
  computed: {
    ...mapState(['shopList']),
    shopListOl () {
      let flag = 0
      let arr2 = this.shopList
      console.log(Array.isArray(this.shopList))
      let arr = arr2.sort((s1, s2) => {
        if (this.compareType[2]) {
          flag = this.compare(this.compareType[2], s1, s2)
        }
        if (this.compareType[1]) {
          flag = this.compare(this.compareType[1], s1, s2)
        }
        if (this.compareType[0]) {
          flag = this.compare(this.compareType[0], s1, s2)
        } else {
          flag = this.compare('ranking', s1, s2)
        }
        return flag
      })
      return arr
    }
  },
  mounted () {
  },
  methods: {
    compare (str, s1, s2) { // 根据 str 排序
      if (str === 'ranking') {
        return s2.ranking - s1.ranking
      }
      if (str === 'xiao_liang') {
        return s2.xiao_liang - s1.ranking
      }
      if (str === 'pei_song_ju_li') {
        return s1.pei_song_ju_li - s2.pei_song_ju_li
      }
    },
    addType (type) {
      console.log(type, this.compareType.indexOf(type))
      if (this.compareType.indexOf(type) + 1) {
        this.compareType.splice(this.compareType.indexOf(type), 1)
      } else {
        this.compareType.push(type)
      }
      console.log(this.compareType)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shop_list
  width 100%
  margin-bottom 50px
  padding-top 0
  background-color white
  &.fixed
    padding-top 71px
  .shop_list_head
    width 100%
    background-color white
    &.fixed_head
      position fixed
      top 50px
      border-bottom 1px solid rgba(0, 0, 0, 0.14)
      padding-bottom 5px
      z-index 9
    .title
      margin 10px 10px 5px
    .rank_item
      display flex
      align-items center
      padding-left 5px
      >span
        padding 2px 10px
        margin-left 5px
        border-radius 10px
        background-color #dbe3ea
        font-weight lighter
        color #ffffff
        font-size 14px
        &.on
          background-color #0b8fd1
  .shops
    .shop_item
      width 98%
      display flex
      justify-content space-between
      margin 5px auto 0
      padding-top 5px
      border-top 1px solid rgba(0, 0, 0, 0.14)
      font-size 12px
      letter-spacing 1px
      .item_img
        box-sizing border-box
        width 24%
        img
          padding 5px 0 0 5px
          height 80px
          width 80px
      .item_introduction
        width 74%
        .shop_name
          font-size 16px
          font-weight bold
          letter-spacing 2px
        >div:nth-of-type(2)
          margin-top 4px
          display flex
          justify-content space-between
          .iconfont
            color #ffac21
          .send_way
            padding 0 4px
            background-color blue
            border-radius 5px
            color white
            &.send_b
              background-color #ff872f
        >div:nth-of-type(3)
          margin-top 4px
          display flex
          justify-content space-between
        >div:nth-of-type(4)
          margin-top 4px
          .type_a
            display inline-block
            border 1px solid red
            border-radius 5px
            padding 0px 3px
            margin-left 2px
            font-size 1px
            color gray
          .type_b
            display inline-block
            border 1px solid #eec438
            border-radius 5px
            padding 0px 3px
            margin-left 2px
            font-size 1px
            color gray
          .type_c
            display inline-block
            border 1px solid blue
            border-radius 5px
            padding 0px 3px
            margin-left 2px
            font-size 1px
            color gray
</style>
