<template>
  <div class="login_container">
    <el-alert title="帐户或密码不正确。" type="error" show-icon v-if="page == 1"> </el-alert>
    <div class="el-col-md-12">
      <el-form ref="form" :model="form" class="login_from">
        <div class="title"><h1>hello !</h1></div>
        <div class="title-tips"><h2>欢迎来到 My-Vue-Admin!</h2></div>
        <el-form-item>
          <div class="login_inp">
            <span class="el-icon-user-solid login_span"></span>
            <el-input v-model="form.name" class="el-input el-input--small" placeholder="请输入账号" ref="ipt"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="pass">
          <div class="pass_inp">
            <span class="el-icon-lock login_span"></span>
            <el-input type="password" class="el-input" placeholder="请输入密码" v-model.trim="form.password" show-password></el-input>
          </div>
          <!-- <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input> -->
        </el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="empty">重置</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/assets/css/global.css'
export default {
  data() {
    return {
      el_alert: '#el_alert',
      page: 0,
      form: {
        input: '',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    empty() {
      this.form.name = ''
      this.form.password = ''
      this.$refs.ipt.focus()
    },
    login() {
      if (this.form.name === 'admin' && this.form.password === '123456') {
        this.page = 0
        localStorage.setItem('token', 'Bearer admin')
        this.$router.push('/home')
        console.log('登录成功！')
      } else {
        this.page = 1
        console.log('登录失败')
        setTimeout(() => {
          this.page = 0
        }, 2000) // 定时时间
      }
    },
    showInput() {
      this.$refs.el_input.focus()
      console.log('ok')
    }
  },
  mounted() {
    this.form.name = 'admin'
    this.form.password = '123456'
  },
  beforeCreate(){
    if (localStorage.getItem('token')) {
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="less" scoped>
.login_container {
  height: 100vh;
  background: url('../assets/login_images/background.jpg') center center fixed no-repeat;
  background-size: cover;
}
.el-col-md-12 {
  float: right;
}
.login_from {
  margin: calc((100vh - 425px) / 2) 10% 10%;
}
h1 {
  text-align: left;
  font-size: 54px;
  font-weight: 500;
  color: #0e121a;
  margin-bottom: 20px;
}
h2 {
  text-align: left;
  font-weight: 400;
  font-size: 28px;
}
.el-input {
  background-color: #f6f4fc;
  min-height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.login_span {
  position: absolute;
  z-index: 1;
  width: 30px;
  font-size: 23px;
  margin: 14px;
}
/deep/.el-input__inner {
  background-color: transparent;
  border: 0;
  outline: none;
  margin: 0 0 0 30px;
  width: 94%;
}
/deep/.el-button {
  width: 100px;
  height: 50px;
  float: left;
}
/deep/.el-form-item {
  max-width: 500px;
}
/deep/.el-alert {
  position: absolute;
  top: 20px;
  width: 20%;
  left: 35%;
  height: 45px;
}
</style>
