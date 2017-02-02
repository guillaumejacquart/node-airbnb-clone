import Vue from 'vue';

var user;
var userString = localStorage.getItem('user');
if (userString) {
    user = JSON.parse(userString);
}

function loadUser() {
    var token = localStorage.getItem('token');
    if (token && !user) {
        Vue.http.get('api/me').then((response) => {
            if (response.body) {
                user = response.body;
                localStorage.setItem('user', JSON.stringify(user));
            }
        }, (error) => {

        })
    }
}

export default {
    checkExpiredToken: function (response, request) {
        return new Promise(function (resolve, reject) {
            //If token is expired, refresh token, resubmit original request & resolve response for original request
            if (response.status === 401 && response.data.error && response.data.error.code === 'GEN-TOKEN-EXPIRED') {
                this.refreshToken(this, request).then(function (response) {
                    resolve(response);
                });
            }
            // Otherwise just resolve the current response
            resolve(response);
        }.bind(this));
    },
    refreshToken: function (context, request) {
        return new Promise(function (resolve, reject) {
            //Refresh token
            Vue.http({ url: '/api/refresh-token', method: 'POST' }).then(function (response) {
                //Store refreshed token
                localStorage.setItem('token', response.data.token);
                //Resubmit original request and resolve the response (probably shouldn't be the responsibility of the Auth service...)
                Vue.http(request).then(function (newResponse) {
                    resolve(newResponse);
                });
            }, function (newResponse) {
                reject(newResponse);
            });
        });
    },
    loadUser: loadUser
}