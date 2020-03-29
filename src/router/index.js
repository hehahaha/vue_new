import Vue from 'vue'
import Router from 'vue-router'

import FoodHome from '../pages/FoodHome/FoodHome'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import MyCenter from '../pages/MyCenter/MyCenter'
import LoginOrRegister from '../pages/LoginOrRegister/LoginOrRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/foodHome'
    },
    {
      path: '/foodHome',
      name: 'foodHome',
      component: FoodHome,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/myCenter',
      name: 'myCenter',
      component: MyCenter,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/loginOrRegister',
      name: 'loginOrRegister',
      component: LoginOrRegister
    }
  ]
})
