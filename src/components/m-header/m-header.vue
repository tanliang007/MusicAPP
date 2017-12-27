<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
    <router-link tag='div' class="mine" to='/user'>
        <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .m-header
    position :relative
    height :44px
    text-align :center
    color :$color-theme;
    font-size:0   
    .icon
      display:inline-block
      vertical-align:top
      bg-image('logo')
      width: 40px
      height: 40px
      background-size:40px 40px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine  
      position :absolute
      top: 0
      right: 0
    .icon-mine
      display: block
      padding: 12px
      font-size: 20px
      color: $color-theme  
</style>
