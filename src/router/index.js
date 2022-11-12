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
      { //用户管理
        path: 'usermanagement',
        component: ()=>import("@/views/UserManagement"),
        meta:{
          title:'用户管理',
          path:"/home/usermanagement"
        },
        children:[
          { //个人信息
            path: 'userinfo', 
            component: ()=>import("@/views/userinfo/UserInfo"), 
            meta:{
              title:'个人中心',
              path:"/userinfo"
            }
          },
        ]
      },
      { //分析页
        path: 'analyse', 
        component: ()=>import("@/views/Analyse"),
        meta:{
          title:'分析页',
          path:"/analyse"
        }
      },  
      { //文章
        path: 'article', 
        component: ()=>import("@/views/Article"),
        meta:{
          title:'文章',
          path:"/article"
        }
      },
      { //团队
        path: 'team', 
        component: ()=>import("@/views/Team"),
        meta:{
          title:'团队',
          path:"/team"
        }
      },  
      { //项目
        path: 'project', 
        component: ()=>import("@/views/Project"),
        meta:{
          title:'项目',
          path:"/project"
        }
      },  
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from, next) => {
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
