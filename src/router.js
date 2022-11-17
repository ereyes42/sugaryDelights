import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/helpers/useAuth'

const { isAuthenticated } = useAuth()

import HomePage from '@/components/HomePage.vue'
import ChocPage from '@/components/ChocPage.vue'
import SpecPage from '@/components/SpecPage.vue'
import CandPage from '@/components/CandPage.vue'
import CheckPage from '@/components/CheckPage.vue'
import LoginPage from '@/components/LoginPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/choco', name: 'Chocolates', component: ChocPage },
  { path: '/spec', name: 'Specialties', component: SpecPage },
  { path: '/cand', name: 'Candies', component: CandPage },
  { path: '/check', name: 'Checkout', component: CheckPage, meta: { requireAuth: true } },
  { path: '/login', name: 'Login', component: LoginPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return { name: 'Login', query: { redirect: to.fullPath } }
  }
})

export default router
