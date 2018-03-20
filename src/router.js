import Vue from 'vue'
import Router from 'vue-router'
import Solace from './components/Solace.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Solace',
      component: Solace
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})