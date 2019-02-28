import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard'

import Typography from '../components/Typography/Typography'
import App from '../../App'

import Cards from '../components/UI Kit/Cards.vue'
import Buttons from '../components/UI Kit/Buttons'
import Table from '../components/UI Kit/Table'

import Login from '../components/Login-Reset/Login'
import Reset from '../components/Login-Reset/Reset'

import NotFound from '../components/Pages/404'
import Error from '../components/Pages/Error'
import Denny from '../components/Pages/Denny'

import FormElements from '../components/Form/Form-Elements'
import FormAdvanced from '../components/Form/Form-Advanced'

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        public: true
      }
    },
    {
      path: '/reset',
      name: 'reset',
      component: Reset,
      meta: {
        public: true
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      meta: {
        public: true
      }
    },
    {
      path: '/500',
      name: '500',
      component: Error,
      meta: {
        public: true
      }
    },
    {
      path: '/403',
      name: '403',
      component: Denny,
      meta: {
        public: true
      }
    },
    {
      path: '*',
      meta: {
        public: true,
      },
      redirect: {
        path: '/404'
      }
    },
    {
      path: '/dashboard/formElements',
      name: 'formElements',
      component: FormElements
    },
    {
      path: '/dashboard/form-advanced',
      name: 'formAdvanced',
      component: FormAdvanced
    },
  ]
})