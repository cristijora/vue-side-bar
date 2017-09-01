import Vue from 'vue'
import App from './App.vue'
import SideBar from './../src/index'
import './_sidebar-theme.scss'
import VueRouter from 'vue-router'

Vue.use(SideBar)
Vue.use(VueRouter)
Vue.config.productionTip = false

import {router} from './routes'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
