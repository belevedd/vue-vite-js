// 菜单配置数据
export const menuContent = {
  title: '菜单内容',
  userMenus: [
    {
      id: 1,
      index: '1',
      type: 1,
      name: '系统管理',
      children: [
        {
          id: 2,
          index: '1-2',
          type: 2,
          // icon: 'user-icon icon',
          name: '用户管理',
          url: '/home/system/user',
        },
      ],
    },
  ],
}
