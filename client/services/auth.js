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
            if (response.status === 401) {
                window.App.$router.push('/login');
            }
            // Otherwise just resolve the current response
            resolve(response);
        }.bind(this));
    },
    loadUser,
	onUserLoaded,
	user,
	logout
}