import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/LoginView'
import Home from '@/views/HomeView'
import UserInfo from '@/views/userinfo/UserInfo'
import MainView from '@/views/main/MainView'

Vue.use(VueRouter)

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'userinfo', component: UserInfo },
      { path: 'main', component: MainView }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/home') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
