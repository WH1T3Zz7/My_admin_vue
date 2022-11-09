<!-- 头部 -->
<template>
  <div id="app">
    <div class="header">
      <h1>欢迎使用My-Vue-Admin!</h1>
      <div class="full-screen">
        <Avatar></Avatar>
        <FullScroll></FullScroll>
      </div>
    </div>
    <div class="Bread">
      <BreadVue></BreadVue>
    </div>
  </div>
</template>

<script>
// 导入ScreenFull组件，控制全屏
import FullScroll from '@/components/Header/ScreenFull.vue'
// 导入头像组件
import Avatar from '@/components/Header/AvatarHeader.vue'
// 导入面包屑
import BreadVue from '../components/Bread.vue'
export default {
  components: {
    FullScroll,
    Avatar,
    BreadVue
  },
  data(){
    return{
      breadList:null,
    }
  },
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
