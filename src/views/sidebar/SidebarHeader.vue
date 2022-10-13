<template>
  <div id="app">
    <div class="header">
      <h1>欢迎使用My-Vue_Admin!</h1>
      <div class="full-screen">
        <Avatar></Avatar>
        <FullScroll></FullScroll>
      </div>
    </div>
    <div class="Bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
// 导入ScreenFull组件，控制全屏
import FullScroll from '@/components/Header/ScreenFull.vue'
// 导入头像组件
import Avatar from '@/components/Header/AvatarHeader.vue'

export default {
  components: {
    FullScroll,
    Avatar
  }
}
</script>

<style lang="less" scoped>
#app {
  background-color: #ffffff;
  margin: 0;
  padding: 0 0 18px 0px;
  box-shadow: 0px 0px 8px 1px #e6e6e6;
  overflow: hidden;
}
.header h1 {
  margin-bottom: 5px;
  height: 50px;
  float: left;
  margin-left: 40px;
}
.header {
  text-align: left;
  overflow: hidden;
  text-align: right;
  box-shadow: 0px 0px 5px 0px #e6e6e6;
}
.header i {
  float: right;
}
.Bread {
  margin: 0px;
}
#app h1 {
  margin-top: 0;
}
.full-screen:before {
  display: flex;
  overflow: hidden;
  padding-top: 20px;
}
/deep/.el-breadcrumb {
  margin: 20px 0 0 40px;
}
</style>
