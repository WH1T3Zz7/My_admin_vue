<template>
  <i id="screenfull" @click="click" :class="isFullscreen ? 'el-icon-switch-button' : 'el-icon-full-screen'"></i>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'ScreenFull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      console.log(!screenfull.enabled)
      if (screenfull.enabled === false) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style scoped>
#screenfull {
  font-size: 24px;
  margin-right: 15px;
  cursor: pointer;
  float: right;
  align-self: center;
  margin-top: 23px;
}
</style>
