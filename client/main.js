// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueGmaps from 'vue-gmaps'
import VueRouter from 'vue-router'
import Bootstrap from 'bootstrap'
import jQuery from 'jquery'
import auth from './services/auth.js'
import Routes from './routes'
import store from './services/store'
import HeaderMenu from './components/Home/HeaderMenu.vue'
import Errors from './components/Common/Errors.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter);
Vue.use(ElementUI, { locale });
Vue.use(require('vue-resource'));
Vue.use(VueGmaps, {
    key: 'AIzaSyBBGLst2_5aTRSKZRw0RglUN0dX_Qtao60'
});

// Component registration
Vue.component('errors', Errors)

Vue.http.interceptors.push(function (request, next) {
    //Add JWT to all requests
    request.headers.set('Authorization', 'JWT ' + localStorage.getItem('token'))
    //Skip storing token refresh requests

    next(function (response) {
        //Check for expired token response, if expired, refresh token and resubmit original request
        if (response.body.token) {
            var token = response.body.token;
            localStorage.setItem('token', token);
        }
        auth.checkExpiredToken(response, request).then(function (response) {
            return response;
        })
    }.bind(this));
}.bind(this));

auth.loadUser();

/* eslint-disable no-new */
new Vue({
    router: Routes,
    store: store,
    components: {
        'header-menu': HeaderMenu
    }
}).$mount('#app')
