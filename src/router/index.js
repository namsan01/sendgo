import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../page/etc/NotFound.vue';

function isLoggedIn() {
  return !!localStorage.getItem('access_token');
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../page/main/Main.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../page/message/Message.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/message/address',
      name: 'messageAddress',
      component: () => import('../page/message/Address.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/message/number',
      name: 'messageNumber',
      component: () => import('../page/message/Number.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/message/result',
      name: 'messageResult',
      component: () => import('../page/message/Result.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/credit',
      name: 'credit',
      component: () => import('../page/credit/Credit.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/credit/history',
      name: 'creditHistory',
      component: () => import('../page/credit/History.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/success',
      name: 'creditSucess',
      component: () => import('../page/credit/Success.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../page/auth/Login.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../page/auth/Register.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/kakaologin',
      name: 'KakaoLogin',
      component: () => import('../page/kakao/KakaoLogin.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/reset-password',
      name: 'resetPage',
      component: () => import('../page/auth/ResetPage.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/reset/mail',
      name: 'resetMail',
      component: () => import('../page/auth/ResetMail.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: () => import('../page/mypage/MyPage.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/mypage/edit',
      name: 'MyPageEdit',
      component: () => import('../page/mypage/MyPageEdit.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  const loggedIn = isLoggedIn();

  if (to.meta.requiresAuth && !loggedIn) {
    next('/login');
  } else if ((to.name === 'login' || to.name === 'register' ||  to.name === 'resetMail' || to.name === 'resetPage') && loggedIn) {
    next({ name: 'NotFound' });
  } else {
    next();
  }
});

export default router;
