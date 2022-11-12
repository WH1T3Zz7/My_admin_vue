<!-- 用户管理 -->
<template>
  <div class="User">
    <div class="Management" v-if="IsManagement">
      UserManagement
    </div>
    <router-view v-if="!IsManagement"></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      IsManagement: true, //控制显示
    }
  },
  methods:{
    path(){
      if (this.$route.path == '/home/usermanagement') {
        this.IsManagement = true
      }else{
        this.IsManagement = false
      }
    }
  },
  mounted(){
    this.path()
  },
  watch: {
    $route: {
      handler: function(){
        this.path()
      },
      // 深度观察监听
      deep: true
    }
  },
}
</script>

<style>

</style>