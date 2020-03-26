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
  position relative
  display flex
  justify-content space-between
  align-items center
  height 50px
  background-color rgba(36, 55, 73, 0.24)
  .page_title
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
</style>
