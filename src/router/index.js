import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import introduction from '@/pages/introduction'
import rating from '@/pages/rating'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: introduction
    },
    {
      path: '/rating',
      name: 'rating',
      component: rating
    }
  ]
})
