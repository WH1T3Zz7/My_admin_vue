<template>
  <div class="Bread">
    <el-breadcrumb separator="/">
      <!-- to为点击跳转 title为路由中的meta属性定义的标题 -->
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
    $route() {//监听$route
      this.getBreadcrumb();
    },
  },
  methods: {
    isHome(route) {
      return route.name === "home";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [].concat(matched);
      }
      this.breadList = matched;
    },
  },
  created() {
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