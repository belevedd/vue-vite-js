let firstMenu = null

// 动态加载路由
export function mapMenusToRoutes(userMenus) {
  const routes = []

  // -1.先去加载默认所有的routes
  const allRoutes = []
  const routeFiles = import.meta.globEager('../../router/home/**/*.js')
  Object.keys(routeFiles).forEach((key) => {
    allRoutes.push(routeFiles[key].default)
  })

  // -2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

// 根据当前路径遍历菜单数组，返回当前菜单
export function pathMapToMenu(userMenus, currentPath) {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }
