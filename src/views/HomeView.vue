<!-- 主页 -->
<template>
  <div>
    <el-container>
      <el-aside style="width:auto;background-color: transparent;line-height:0px"><Sidebar></Sidebar></el-aside>
      <el-container>
        <el-header><SidebarHeader></SidebarHeader></el-header>
        <el-main style="margin-top:55px;text-align: center;"><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from './sidebar/SidebarView.vue'
import SidebarHeader from './sidebar/SidebarHeader'

export default {
  components: {
    Sidebar,
    SidebarHeader
  }
}
</script>

<style>
.el-header {
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  text-align: center;
  line-height: 200px;
}

body > .el-container {
  margin-bottom: 40px;
}
body,html{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  padding: 0;
  margin: 0;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-aside {
  height: 100vh;
}
</style>
