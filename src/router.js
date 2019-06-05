import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import st from './components/st.vue'
import car from './components/car.vue'
import user from './components/user.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/user',
      name: 'user',
      component: user

    },
    {
      path: '/st',
      name: 'st',
      component: st

    }
  ]
})
