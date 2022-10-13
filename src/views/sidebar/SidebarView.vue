<template>
  <div>
    <el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-button @click="an" v-if="isCollapse == true" plain>展开</el-button>
        <el-button @click="on" v-else plain>关闭</el-button>
      </el-radio-group>
      <el-menu-item index="0">
        <i class="el-icon-s-home" @click="GoMain()"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span slot="title">可视化</span>
        </template>
        <el-menu-item-group>
          <span slot="title">常用图表类型</span>
          <el-menu-item index="1-1">柱状图</el-menu-item>
          <el-menu-item index="1-2">折线图</el-menu-item>
          <el-menu-item index="1-2">饼图</el-menu-item>
          <el-menu-item index="1-2">散点图</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="动画">
          <el-menu-item index="1-3">数据过渡动画</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">交互</span>
          <el-menu-item index="1-4-1">拖拽的实现</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">文章</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SidebarView',
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    an() {
      this.isCollapse = false
      console.log(this.isCollapse)
    },
    on() {
      this.isCollapse = true
      console.log(this.isCollapse)
    },
    GoMain() {
      this.$router.push('/home/main')
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.el-button {
  width: 100%;
  border-style: none;
}
/deep/.el-radio-group {
  width: 100%;
  margin-bottom: 0px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
