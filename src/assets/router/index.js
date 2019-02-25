import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard'
import Typography from '../components/Typography/Typography'
import App from '../../App'
import Cards from '../components/UI Kit/Cards.vue'
import Buttons from '../components/UI Kit/Buttons'
import Table from '../components/UI Kit/Table'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      redirect: '/dashboard',
      component: App
    },
    {
      path: '/dashboard/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/dashboard/buttons',
      name: 'buttons',
      component: Buttons
    },
    {
      path: '/dashboard/table',
      name: 'table',
      component: Table
    }
  ]
})