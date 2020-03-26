<template>
  <div id="app">
    <router-view/>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from './components/FooterBar/FooterBar'
export default {
  name: 'App',
  components: {FooterBar},
  mounted () {
    this.$store.dispatch('getFoodKindInfo')
    this.$store.dispatch('getShopList')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    position relative
    box-sizing border-box
    width 100%
    height 100%
    padding-top 50px
</style>
