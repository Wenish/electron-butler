import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageSettings from '@/pages/PageSettings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/settings',
      name: 'Settings',
      component: PageSettings
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
