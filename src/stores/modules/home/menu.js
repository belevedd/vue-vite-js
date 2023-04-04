import router from '@/router'
import { defineStore } from 'pinia'
import { menuContent } from '@/config/menu/menu'
import { mapMenusToRoutes } from '@/utils/menu/map-menus'
import localCache from '@/utils/cache'

const useMenuStore = defineStore('menu', {
  state: () => ({
    userMenus: [],
  }),
  actions: {
    async getUserMenus() {
      // 获取用户菜单
      const userMenus = menuContent.userMenus
      localCache.setCache('userMenus', userMenus)
      this.registerDynamicRouter(userMenus)
    },
    loadLocalMenu() {
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        this.registerDynamicRouter(userMenus)
      }
    },
    registerDynamicRouter(userMenus) {
      this.userMenus = userMenus
      // 注册动态路由
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('home', route)
      })
    },
  },
})

export default useMenuStore
