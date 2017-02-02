// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from './auth/auth.js'
import Routes from './routes'

Vue.use(VueRouter)
Vue.use(require('vue-resource'));

Vue.http.interceptors.push(function (request, next) {
    //Add JWT to all requests
    request.headers.set('Authorization', 'JWT ' + localStorage.getItem('token'))
    //Skip storing token refresh requests

    next(function (response) {
        //Check for expired token response, if expired, refresh token and resubmit original request
        if(response.body.token) {
            var token = response.body.token;
            localStorage.setItem('token', token);
        }
        auth.checkExpiredToken(response, request).then(function(response) {
            return response;
        })
    }.bind(this));
}.bind(this));

auth.loadUser();

/* eslint-disable no-new */
new Vue({
  router: Routes
}).$mount('#app')
