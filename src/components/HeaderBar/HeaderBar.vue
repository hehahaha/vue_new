<template>
    <div class="header_bar">
      <slot name="left"></slot>
      <h3 class="page_title">HeaderBar</h3>
      <slot name="right"></slot>
    </div>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header_bar
  position fixed
  top 0
  display flex
  justify-content space-between
  align-items center
  width 100%
  height 50px
  color gray
  background-color rgb(36, 55, 73)
  z-index 9
  .page_title
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
</style>
