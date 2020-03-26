<template>
    <div class="footer_bar">
      <router-link class="nav_item on" to="/foodHome">
        <i class="iconfont icon-waimai"></i>
        <a class="item_font on">外 卖</a>
      </router-link>
      <router-link class="nav_item" to="/search">
        <i class="iconfont icon-sousuo1"></i>
        <a class="item_font">搜 索</a>
      </router-link>
      <router-link class="nav_item" to="/order">
        <i class="iconfont icon-dingdan"></i>
        <a class="item_font">订 单</a>
      </router-link>
      <router-link class="nav_item" to="/myCenter">
        <i class="iconfont icon-wode"></i>
        <a class="item_font">个 人</a>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer_bar
  position absolute
  bottom 0
  left 0
  right 0
  height 50px
  width 100%
  display flex
  justify-content space-around
  align-items center
  background-color rgb(36, 55, 73, 0.24)
  .nav_item
    width 25%
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    color gray
    .item_font
      margin-top 2px
      font-size 12px
      font-family '微软雅黑'
      font-weight bold
      word-spacing 5px
    >i
      margin-top 2px
      font-size 24px
    &.on
      color #dfdfdf
</style>
