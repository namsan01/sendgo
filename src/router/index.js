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
      component: () => import('../page/message/Message.vue')
    },
    {
      path: '/message/address',
      name: 'messageAddress',
      component: () => import('../page/message/Address.vue')
    },
    {
      path: '/message/number',
      name: 'messageNumber',
      component: () => import('../page/message/Number.vue')
    },
    {
      path: '/message/result',
      name: 'messageResult',
      component: () => import('../page/message/Result.vue')
    },
    {
      path: '/credit',
      name: 'credit',
      component: () => import('../page/credit/Credit.vue')
    },
    {
      path: '/credit/history',
      name: 'creditHistory',
      component: () => import('../page/credit/History.vue')
    }
  ]
})

export default router
