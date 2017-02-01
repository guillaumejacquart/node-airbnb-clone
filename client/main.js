// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Routes from './routes'

/* eslint-disable no-new */
new Vue({
  router: Routes
}).$mount('#app')
