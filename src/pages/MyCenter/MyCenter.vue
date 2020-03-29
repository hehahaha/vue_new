<template>
    <div class="my_center">
      <HeaderBar title="MyCenter"></HeaderBar>
      <div class="header">
        <router-link to="/loginOrRegister" class="user_info">
          <img class="user_face" src="./images/meimei.jpg">
          <span>立即登录</span>
        </router-link>
        <div class="other_info">
          <div >
            <i class="iconfont icon-keyongyue"></i>
            <a class="item_font">余额: <span>99</span></a>
          </div>
          <div  style="color: red">
            <i class="iconfont icon-guanzhu"></i>
            <a class="item_font">关注: <span>34</span></a>
          </div>
          <div  style="color: #ffb626">
            <i class="iconfont icon-V"></i>
            <a class="item_font">收藏: <span>26</span></a>
          </div>
          <div  style="color: #0b8fd1">
            <i class="iconfont icon-06"></i>
            <a class="item_font">记录: <span>22</span></a>
          </div>
        </div>
      </div>
      <div class="some_serve">
        <div class="serve_items">
          <span>
            <i class="iconfont icon-chengshifuwu" style="color: #ffb626"></i>
            <span>城市服务</span>
          </span>
          <i class="iconfont icon-jiantou" style="color: #ffb626"></i>
        </div>
        <div class="serve_items">
          <span>
            <i class="iconfont icon-xiaochengxu" style="color: #ffb626"></i>
            <span>小程序</span>
          </span>
          <i class="iconfont icon-jiantou" style="color: #ffb626"></i>
        </div>
        <div class="serve_items">
          <span>
            <i class="iconfont icon-lianxiwomen" style="color: #ffb626"></i>
            <span>联系我们</span>
          </span>
          <i class="iconfont icon-jiantou" style="color: #ffb626"></i>
        </div>
        <div class="serve_items">
          <span>
            <i class="iconfont icon-gengxin" style="color: #ffb626"></i>
            <span>检测更新</span>
          </span>
          <i class="iconfont icon-jiantou" style="color: #ffb626"></i>
        </div>
      </div>
    </div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar/HeaderBar'
export default {
  name: 'MyCenter',
  components: {HeaderBar}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.my_center
  position relative
  width 100%
  height 100%
  background-color #f0f0f0
  .header
    box-sizing border-box
    position absolute
    display flex
    flex-direction column
    align-items center
    top -40px
    width 100%
    height 250px
    border 2px solid white
    background-image url("./images/bg.png")
    background-color white
    border-radius 500px/100px
    .user_info
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      margin-top 50px
      font-weight bold
      color black
      >span
        margin-top 5px
      .user_face
        width 80px
        height 80px
        border-radius 50%
    .other_info
      display flex
      justify-content space-around
      width 70%
      margin 10px auto 0
      >div
        display flex
        flex-direction column
        align-items center
        >i
          font-size 30px
        >a
          margin-top 5px
          font-size 14px
          >span
            font-weight bold
  .some_serve
    padding-top 210px
    width 100%
    .serve_items
      box-sizing border-box
      display flex
      justify-content space-between
      align-items center
      margin 4px auto
      padding 0 10px
      width 98%
      height 60px
      color gray
      border-radius 10px
      background-color white
</style>
