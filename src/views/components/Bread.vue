<template>
  <div class="Bread">
    <el-breadcrumb separator="/">
      <!-- to为点击跳转 title为路由中的meta属性定义的标题 -->
      <!-- 5.通过v-for循环去遍历breadList(breadList.meta.title就是我们需要渲染的内容)渲染里面的title -->
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index" :to="item.meta.path">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadList: [],
    };
  },
  watch: {
    $route() {//4.监听$route路由变化触发函数更新面包屑数据
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched;  //1.this.$route.matched路由带的方法这个可以通过'console.log(this.$route)，console.log(this.$route.matched)'查看里面的内容就清楚了
      this.breadList = matched; //2.将新的路由地址传给breadList，这里就会实现重新绘制面包屑，这里要是不清楚可以'console.log(this.breadList)'查看里面的内容就清楚了
    },
  },
  created() { //3.当页面重绘触发函数更新面包屑数据，但只有这个还不够，因为路由跳转的时候是不会触发这个函数的，所以还需要watch监听器监听路由变化
    //生命周期中调用获取数据的方法
    this.getBreadcrumb();
  },
};
</script>

<style>
.Bread{
  height: 30px;
  float: left;
}
</style>