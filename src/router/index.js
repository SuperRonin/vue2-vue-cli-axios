import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
const chooseplace = r => require.ensure([], () => r(require('../pages/chooseplace')), 'chooseplace')
const shiftlists = r => require.ensure([], () => r(require('../pages/shiftlists')), 'shiftlists')
const applyorder = r => require.ensure([], () => r(require('../pages/applyorder')), 'applyorder')



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: home
    },
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
