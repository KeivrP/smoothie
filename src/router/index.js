import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Primera',
    component: () => import('../views/Primera.vue')
  },
  {
    path: '/created',
    name: 'home',
    component: () => import('../views/Home.vue'),
    props: true
  },
  {
    path: '/smoothies',
    name: 'about',
   
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
