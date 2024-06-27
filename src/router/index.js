import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../page/Main.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../page/Message.vue')
    },
    {
      path: '/credit',
      name: 'credit',
      component: () => import('../page/Credit.vue')
    }
  ]
})

export default router
