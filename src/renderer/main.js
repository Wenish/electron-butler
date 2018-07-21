import Vue from 'vue'
import axios from 'axios'
import { sync } from 'vuex-router-sync';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import 'material-design-icons/iconfont/material-icons.css'
import 'typeface-roboto/index.css'

import App from './App'
import router from './router'
import store from './store'


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.use(VueMaterial)

Vue.http = Vue.prototype.$http = axios

Vue.config.productionTip = false

// Sync the router with the vuex store. This registers `store.state.route`
sync(store, router);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
