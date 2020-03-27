<template>
    <div class="search">
      <h3>Search</h3>
      <transition name="stretch">
        <div class="divvv"></div>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search
  .stretch-enter-active, .stretch-leave-active
    transition opacity .5s
  .stretch-enter, .stretch-leave-to
    opacity 0
</style>
