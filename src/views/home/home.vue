<template>
  <div class="home">
    <el-container>
      <el-header class="home-header">
        <img :src="getAssetURL('common/logo.png')" alt="logo" />
        <h1>滑稽草莓的组件库</h1>
      </el-header>
      <el-container class="home-content">
        <el-aside class="home-aside">
          <home-menu />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
/*----- 引入子组件 -----*/
import HomeMenu from './menu/menu.vue'
/*----- 引入访问本地图片方法 -----*/
import { getAssetURL } from '@/utils/load-assets'
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #f5f7fb;

  .home-header {
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(25, 124, 207, 0.08);

    img {
      height: 26px;
      margin-right: 10px;
    }
    h1 {
      font-size: 26px;
      font-weight: 500;
      font-family: '华文行楷';
    }
  }
  .home-content {
    width: 100%;
    height: calc(100vh - 60px);
    margin-top: 10px;

    .home-aside {
      width: auto;
      border-top: 1px solid #e6edef;
      border-right: 1px solid #e6edef;
      background-color: #fff;
      box-shadow: 0 0 20px rgba(25, 124, 207, 0.08);
      box-sizing: border-box;
    }
  }
}
</style>
