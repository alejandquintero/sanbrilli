import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/anillos',
    name: 'anillos',
    component: () => import('../views/AnillosView.vue')
  },
  {
    path: '/collares',
    name: 'collares',
    component: () => import('../views/CollaresView.vue')
  },
  {
    path: '/pulseras',
    name: 'pulseras',
    component: () => import('../views/PulserasView.vue')
  },
  {
    path: '/zarcillos',
    name: 'zarcillos',
    component: () => import('../views/ZarcillosView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
