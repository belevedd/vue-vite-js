import { createRouter, createWebHashHistory } from 'vue-router'

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
      component: () => import('@/views/login/login.vue'),
    },
    {
      path: '/register',
      component: () => import('@/views/register/register.vue'),
    },
    {
      path: '/home',
      component: () => import('@/views/home/home.vue'),
    },
  ],
})

export default router
