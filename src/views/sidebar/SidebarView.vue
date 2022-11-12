<!-- 侧边导航 -->
<template>
  <div>
    <el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-button @click="an" v-if="isCollapse == true" plain>展开</el-button>
        <el-button @click="on" v-else plain>关闭</el-button>
      </el-radio-group>
      <el-menu-item index="0" @click="Gorouter('/home')" class="menu">
        <i class="el-icon-s-home"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-menu-item index="1" @click="Gorouter('/home/analyse')" class="menu">
        <i class="el-icon-s-data"></i>
        <span slot="title">分析</span>
      </el-menu-item>
      <el-menu-item index="2" @click="Gorouter('/home/usermanagement')" class="menu">
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户</span>
      </el-menu-item>
      <el-menu-item index="3" @click="Gorouter('/home/article')" class="menu">
        <i class="el-icon-document"></i>
        <span slot="title">文章</span>
      </el-menu-item>
      <el-menu-item index="4" @click="Gorouter('/home/team')" class="menu">
        <i class="el-icon-s-flag"></i>
        <span slot="title">团队</span>
      </el-menu-item>
      <el-menu-item index="5" @click="Gorouter('/home/project')" class="menu">
        <i class="el-icon-s-order"></i>
        <span slot="title">项目</span>
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
    Gorouter(val) {
      this.$router.push(val)
    },
    GoUserManagement(){

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
.menu{
  font-size: 18px;
  font-weight: 500;
}
.menu i{
  font-size: 20px;
  margin-right: 10px;
}
</style>
