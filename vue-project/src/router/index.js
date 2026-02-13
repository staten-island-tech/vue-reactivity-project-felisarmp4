import { createRouter, createWebHistory } from 'vue-router'
import wing from '@/views/wing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: wing,
    },
  ],
})

export default router
