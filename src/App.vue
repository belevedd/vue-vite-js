<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>

    <loading />
  </div>
</template>

<script setup>
/*----- 引入子组件 -----*/
import loading from '@/components/loading/loading.vue'
/*----- 引入中文配置 -----*/
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
}
</style>
