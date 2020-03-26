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
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    position relative
    width 100%
    height 100%
</style>
