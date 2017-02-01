// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(VueRouter)
Vue.use(ElementUI, { locale })

import Routes from './routes'

/* eslint-disable no-new */
new Vue({
  router: Routes
}).$mount('#app')
