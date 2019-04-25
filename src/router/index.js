import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import BolgIndex from '@/components/bolgIndex'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/bolgIndex',
    name: 'bolgIndex',
    component: BolgIndex
  }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
