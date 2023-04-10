<template>
  <div class="menu">
    <el-menu
      class="el-menu-vertical"
      :default-active="defaultValue"
      :collapse="isCollapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 一级菜单 -->
        <template v-if="item.type === 2">
          <el-menu-item :index="item.index" @click="handleMenuItemClick(item)">
            <el-icon><i-ep-document-checked /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
        <!-- 二级菜单 -->
        <template v-else-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.index">
            <template #title>
              <el-icon><i-ep-document-checked /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.index"
                @click="handleMenuItemClick(subItem)"
              >
                <i v-if="subItem.icon" :class="subItem.icon"></i>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
/*----- 引入路由 -----*/
import { useRouter, useRoute } from 'vue-router'
/*---- 引入pinia状态管理数据 ----*/
import { storeToRefs } from 'pinia'
import useMenuStore from '@/stores/modules/home/menu'
/*----- 引入工具方法 -----*/
import { pathMapToMenu } from '@/utils/menu/map-menus'

/*---- 获取pinia状态管理数据 ----*/
const menuStore = useMenuStore()
const { userMenus } = storeToRefs(menuStore)

// 获取当前路由路径
const route = useRoute()
const router = useRouter()
const currentPath = route.path
const menu = pathMapToMenu(userMenus.value, currentPath)
const defaultValue = ref(menu.index)

// 跳转对应路由
const handleMenuItemClick = (item) => {
  router.push({
    path: item.url ?? '/not-found',
  })
}

// 判断是否收起目录
const isCollapse = ref()
onMounted(() => {
  window.addEventListener('resize', () => {
    isCollapse.value =
      document.documentElement.clientWidth < 1310 ? true : false
  })
})
</script>

<style lang="less" scoped>
.menu {
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 250px;
  }
}
</style>
