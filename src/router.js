import Vue from 'vue'
import Router from 'vue-router'
import Calculator from './pages/Calculator.vue'
import About from './pages/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Calculator
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
