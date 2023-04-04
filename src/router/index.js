import { createRouter, createWebHashHistory } from 'vue-router'
import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/menu/map-menus'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系: path -> component
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/register.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue'),
    },
  ],
})

// -导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const userMenus = localCache.getCache('userMenus')
    if (!userMenus) {
      return '/login'
    }
  }

  if (to.path === '/home') {
    return firstMenu.url
  }
})

export default router
