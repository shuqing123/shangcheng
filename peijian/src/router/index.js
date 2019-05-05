import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import All from '@/page/All'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Details from '@/components/Details'
import Shopcart from '@/components/Shopcart'
import GoodsList from '@/components/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/reg',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/all',
      name: 'All',
      component: All,
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details,
    },
    {
      path: '/mycar',
      name: 'Shopcart',
      component: Shopcart,
    },
  ]
})
