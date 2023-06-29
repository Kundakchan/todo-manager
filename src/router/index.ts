import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/router.config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  if (to.meta.requiresAuth && isLoggedIn && !JSON.parse(isLoggedIn).value) {
    return {
      name: 'Login'
    }
  }
})

export default router
