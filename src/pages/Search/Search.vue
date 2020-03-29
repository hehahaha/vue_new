<template>
    <div class="search">
      <HeaderBar title="Search"></HeaderBar>
      <div class="text_input">
        <input type="text" placeholder="搜索">
        <i class="iconfont icon-sousuo1"></i>
      </div>
      <hr style="color: rgb(36, 55, 73)">
    </div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar/HeaderBar'
export default {
  name: 'Search',
  components: {HeaderBar}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search
  .text_input
    width 100%
    position relative
    >input
      box-sizing border-box
      display block
      margin 10px auto
      padding 0 10px
      width 80%
      height 40px
      border-radius 10px
      background-color #f0f0f0
    >i
      position absolute
      top 5px
      right 15%
      color gray
      font-size 25px
</style>
