import Vue from 'vue'
import Router from 'vue-router'

import FoodHome from '../pages/FoodHome/FoodHome'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import MyCenter from '../pages/MyCenter/MyCenter'

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
      component: FoodHome
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/myCenter',
      name: 'myCenter',
      component: MyCenter
    }
  ]
})
