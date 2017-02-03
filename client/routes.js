import VueRouter from 'vue-router'
import Home from './components/Home/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Profile from './components/Account/Profile.vue'
import Account from './components/Account/Account.vue'
import Search from './components/Search/Search.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/account', component: Account },
  { path: '/search', component: Search }
]

const router = new VueRouter({
  routes,
  //mode: 'history'
})

export default router
