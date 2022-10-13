<template>
  <div>
    <el-container>
      <Sidebar></Sidebar>
      <el-container>
        <el-header style="height: 100px"> <SidebarHeader></SidebarHeader> </el-header>
        <div class="main"><router-view></router-view></div>
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
.main {
  text-align: center;
  line-height: 160px;
  margin-top: 25px;
  width: 98%;
  margin-left: 1%;
}
body > .el-container {
  margin-bottom: 40px;
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
