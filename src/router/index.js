import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import chooseplace from '@/pages/chooseplace'
import shiftlists from '@/pages/shiftlists'
import applyorder from '@/pages/applyorder'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/chooseplace',
      name: 'chooseplace',
      component: chooseplace
    },
    {
      path: '/shiftlists',
      name: 'shiftlists',
      component: shiftlists
    },
    {
      path: '/applyorder',
      name: 'applyorder',
      component: applyorder
    },

  ]
})
