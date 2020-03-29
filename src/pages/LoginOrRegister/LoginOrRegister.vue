<template>
    <div class="login_registers">
      <HeaderBar title="LoginOrRegister">
        <div @click="$router.back()" class="go_back" slot="left"><i class="iconfont icon-jiantou"></i></div>
      </HeaderBar>
      <div class="login_area">
        <div class="header">
          <span @click="loginWay=true" :class="{'on': loginWay}">短信登录</span>|<span @click="loginWay=false" :class="{'on': !loginWay}">密码登录</span>
        </div>
        <form v-if="loginWay">
          <div class="phone">
            <input type="text" maxlength="11" v-model="phone" placeholder="手机号">
            <button class="yzm_text" :disabled="!(phone.length === 11)" @click.prevent="sendYzm" :class="{'on': (countDown === 0)&&(phone.length === 11)}">
              {{countDown === 0 ? '发送验证码' : '再次发送' + countDown + 's'}}
            </button>
          </div>
          <input type="text" placeholder="验证码">
        </form>
        <form v-if="!loginWay">
          <input type="text" placeholder="用户名">
          <div class="password">
            <input v-show="!showPwd" v-model="userPwd" type="password" placeholder="密码">
            <input v-show="showPwd" v-model="userPwd" type="text" placeholder="密码">
            <i class="iconfont icon-icon-test" :class="{'on': showPwd}" @click="showPwd=!showPwd"></i>
          </div>
        </form>
        <button disabled="disabled">立 即 登 录</button>
      </div>
    </div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar/HeaderBar'
export default {
  name: 'LoginOrRegister',
  components: {HeaderBar},
  data () {
    return {
      loginWay: true, // 登录表单切换
      phone: '',
      countDown: 0, // 倒计时
      idTime: '',
      showPwd: false, // 是否显示密码
      userPwd: ''
    }
  },
  computed: {
    yzmON () {
      if (this.phone.length === 11) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    sendYzm (e) { // 发送验证码
      if (!this.countDown) {
        this.countDown = 30
        this.idTime = setInterval(() => {
          if (this.countDown) {
            this.countDown = this.countDown - 1
          } else {
            clearInterval(this.idTime)
          }
        }, 500)
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.login_registers
  width 100%
  .login_area
    display flex
    flex-direction column
    align-items center
    .header
      margin-top 80px
      font-size 20px
      font-weight bold
      color gray
      >span
        margin 0 10px
        color #c7c7c7
        padding-bottom 2px
        border-bottom 2px solid transparent
        transition all 200ms linear
        &.on
          color rgb(36, 55, 73)
          padding-bottom 0px
          border-bottom 2px solid rgb(36, 55, 73)
    form
      margin-top 20px
      width 100%
      .password
        position relative
        .icon-icon-test
          position absolute
          top -8px
          right 20%
          color #d7d7d7
          font-size 30px
          &.on
            color rgb(36, 55, 73)
      .phone
        position relative
        .yzm_text
          position absolute
          right 20%
          top -8px
          padding 4px
          border-radius 5px
          border 1px solid #dfdfdf
          background-color #d7d7d7
          font-size 14px
          color white
          &.on
            background-color rgb(36, 55, 73)
      input
        display block
        margin 50px auto
        width 60%
        border-bottom 2px solid rgb(36, 55, 73)
        font-size 20px
    >button
      margin-top 20px
      width 50%
      height 40px
      border-radius 10px
      font-size 18px
      color #dfdfdf
      font-weight bold
      background-color rgb(36, 55, 73)
  .go_back
    transform rotate(180deg)
    color #c7c7c7
    i
      font-size 25px
</style>
