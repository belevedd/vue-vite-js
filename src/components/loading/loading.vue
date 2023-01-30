<template>
  <div
    class="loading"
    v-if="mainStore.isLoading"
    element-loading-text="正在请求数据..."
    v-loading="mainStore.isLoading"
  ></div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main'

const mainStore = useMainStore()
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
