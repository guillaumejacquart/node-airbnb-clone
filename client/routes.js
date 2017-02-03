import VueRouter from 'vue-router'
import Home from './components/Home/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Profile from './components/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/profile', component: Profile }
]

const router = new VueRouter({
  routes,
  history: true
})

export default router
