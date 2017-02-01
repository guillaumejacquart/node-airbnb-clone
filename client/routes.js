import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Search from './components/Search.vue'

const routes = [
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes,
  history: true
})

export default router
