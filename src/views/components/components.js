import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import axios from 'axios'
// import { sync } from 'vuex-router-sync'

import App from './app-components.vue'
import lazy from 'vue-lazy-component'
import { getCookie } from 'tools/client'
import store from 'Store/demo'

Vue.use(VueRouter)
// Vue.use(VueResource)
Vue.prototype.$http = axios
Vue.use(lazy)

const routes = [
  {
    path: '/components/',
    name: 'components',
    component: require('./views/index.vue'),
    meta: {
      user: true
    }
  },
  {
    path: '/components/drag',
    name: 'drag',
    component: require('./views/drag.vue'),
    meta: {
      user: true
    }
  },
  {
    path: '/login',
    name: 'login'
  },
  {
    path: '*',
    component: require('Views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(({meta, path}, from, next) => {
  let sessionId = getCookie('session')
  if (!!sessionId || !meta.user) {
    return next()
  } else {
    window.location.href = 'index.html#/login'
  }
})

module.exports = new Vue({
  el: '#page-components',
  router,
  store,
  ...App
})
