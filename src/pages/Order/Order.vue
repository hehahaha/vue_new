<template>
    <div class="order">
      <HeaderBar title="Order"></HeaderBar>
      <div class="orders">
        <div v-for="(value, index) in 15" :key="index" class="order-item">
          <div class="item1">
            <h3>{{value}}</h3>
            <img src="./images/meimei.jpg">
            <div>
              <div class="shop_info">
                <span class="shop_name">店 家 名 称</span>
                <span class="order_status">已完成</span>
              </div>
              <div class="time_info">
                2020-03-08
              </div>
              <div class="food_info">
                <span>西红柿盖浇饭+饮料</span>
                <span>花费: ￥16</span>
              </div>
            </div>
          </div>
          <div class="item2">
            <span>评价</span>
            <span>送祝福</span>
            <span>再来一单</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>import HeaderBar from '../../components/HeaderBar/HeaderBar'
export default {
  name: 'Order',
  components: {HeaderBar}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.order
  width 100%
  height 100%
  padding-bottom 50px
  background-color #f0f0f0
  overflow scroll
  .orders
    &:before
      display table
      content ''
    .order-item
      box-sizing border-box
      margin 10px auto 0
      padding 10px 10px 0
      width 95%
      border-radius 5px
      background-color white
      .item1
        img
          display block
          float left
          width 60px
          height 60px
          margin-right 10px
          border-radius 5px
        >div
          margin-left 70px
          .shop_info
            display flex
            justify-content space-between
            align-items: stretch
            .shop_name
              font-weight bold
          .time_info
            color #92948c
            font-size 14px
          .food_info
            display flex
            justify-content space-between
            color #92948c
            font-size 14px
      .item2
        display flex
        justify-content space-around
        width 100%
        >span
          padding 5px
          margin 10px 0
          border 1px solid #3fd3ff
          border-radius 5px
          color #777

</style>
