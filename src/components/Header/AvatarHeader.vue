<template>
  <el-popover placement="bottom" title="用户" width="30" trigger="click" content="" style="min-width: 0px">
    <hr />
    <p class="avatar_userinfo" @click="jump_userinfo">个人信息</p>
    <p class="avatar_userinfo" @click="Ifexit()">退出登录</p>
    <el-avatar id="avatar" shape="square" slot="reference" :src="require('@/assets/avata/avatar' + AvatarImage + '.png')"></el-avatar>
  </el-popover>
</template>
<script>
export default {
  data() {
    return {
      // 生成随机头像
      squareUrl: require('@/assets/avata/avatar1.png'),
      exit: 0
    }
  },
  methods: {
    jump_userinfo() {
      this.$router.push('/home/userinfo')
    },
    Ifexit() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  },
  computed: {
    AvatarImage() {
      const imgName = Math.floor(Math.random() * (41 - 1)) + 1
      return imgName
    }
  }
}
</script>

<style lang="less" scoped>
#avatar {
  margin-right: 20px;
  float: right;
  align-self: center;
  margin-top: 12px;
  cursor: pointer;
}
.avatar_userinfo {
  margin: 18px 0 0 0;
  cursor: pointer;
}
.avatar_userinfo:hover {
  color: #409eff;
}
/deep/.el-popover {
  min-width: 0px;
}
/deep/.el-divider {
  margin: 0;
}
</style>
