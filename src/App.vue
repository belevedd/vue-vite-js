<template>
  <div class="app">
    <router-link to="/login">登录</router-link>
    <router-link to="/home">首页</router-link>
    <router-view />
    <loading />
  </div>
</template>

<script setup>
import loading from '@/components/loading/loading.vue'
</script>

<style scoped></style>
