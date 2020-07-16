import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DisplayWeather from '../views/DisplayWeather.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DisplayWeather',
    name: 'DisplayWeather',
    component: DisplayWeather
  }
]

const router = new VueRouter({
  routes
})

export default router
