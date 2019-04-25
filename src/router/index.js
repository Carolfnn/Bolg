import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
