import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import ChocPage from '@/components/ChocPage.vue'
import SpecPage from '@/components/SpecPage.vue'
import ClearPage from '@/components/ClearPage.vue'
import CandPage from '@/components/CandPage.vue'
import CheckPage from '@/components/CheckPage.vue'
import LoginPage from '@/components/LoginPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/choco', name: 'Chocolates', component: ChocPage },
  { path: '/spec', name: 'Specialties', component: SpecPage },
  { path: '/cand', name: 'Candies', component: CandPage },
  { path: '/clear', name: 'Clearance', component: ClearPage },
  { path: '/check', name: 'Checkout', component: CheckPage },
  { path: '/login', name: 'Login', component: LoginPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
