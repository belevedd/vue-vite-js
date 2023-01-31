<template>
  <div class="home">
    <h2>home</h2>
    <i class="icon-danganguanli" style="font-size: 30px; color: #f00"></i>
    <ul>
      <template v-for="(item, index) in cbcList" :key="index">
        <li>{{ item.certificateLocation }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useHomeStore from '@/stores/modules/home'

const homeStore = useHomeStore()
homeStore.fetchCbcListData()
const { cbcList } = storeToRefs(homeStore)
console.log(cbcList.value)
</script>

<style lang="less" scoped></style>
