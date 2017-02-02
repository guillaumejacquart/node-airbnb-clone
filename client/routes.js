import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes,
  history: true
})

export default router
