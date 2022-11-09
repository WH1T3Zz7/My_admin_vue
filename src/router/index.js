import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
  { 
    path: '/', 
    component: ()=>import("@/views/LoginView") 
  },
  { 
    path: '/login', 
    name: "login",
    component: ()=>import("@/views/LoginView"),
  },
  {
    path: '/home',
    name:"home",
    component: ()=>import("@/views/HomeView"),
    meta:{
      title:'首页',
      path:"/home"
    },
    children: [
      { //主页
        path: '/home', 
        component: ()=>import("@/views/main/MainView"),
        meta:{
          title:'',
          path:"/home"
        }
      }, 
      { //个人信息
        path: 'userinfo', 
        component: ()=>import("@/views/userinfo/UserInfo"), 
        meta:{
          title:'个人中心',
          path:"/userinfo"
        }
      },  
      { //分析页
        path: 'analyse', 
        component: ()=>import("@/views/Analyse"),
        meta:{
          title:'分析页',
          path:"/analyse"
        }
      },  
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/home/') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  }else if(to.path === '/home'){
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  }else {
    next()
  }
})

export default router
