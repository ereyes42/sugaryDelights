import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/choc', name: 'Chocolates', component: () => import('@/views/ChocPage.vue') },
  { path: '/spec', name: 'Specialties', component: () => import('@/views/SpecPage.vue') },
  { path: '/clear', name: 'Clearance', component: () => import('@/views/ClearPage.vue') },
  { path: '/cand', name: 'Candies', component: () => import('@/views/CandPage.vue') },
  { path: '/check', name: 'Checkout', component: () => import('@/views/CheckPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
