import Vue from 'vue';
const bus = new Vue();

var user;
var userString = localStorage.getItem('user');
if (userString) {
    user = JSON.parse(userString);
	bus.$emit('user-loaded', user);
}

function loadUser(forceRefresh) {
    var token = localStorage.getItem('token');
    if (token && !user || forceRefresh) {
        Vue.http.get('api/me').then((response) => {
            if (response.body) {
                user = response.body;
				bus.$emit('user-loaded', user);
                localStorage.setItem('user', JSON.stringify(user));
            }
        }, (error) => {

        })
    }
}

function onUserLoaded(callback){
	bus.$on('user-loaded', callback);
}

function logout(){
	localStorage.clear();
	user = null;
	bus.$emit('user-loaded', user);
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
    loadUser,
	onUserLoaded,
	user,
	logout
}