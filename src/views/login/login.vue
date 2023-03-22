<template>
  <div class="login">
    <h2>login</h2>
    <el-row class="mb-4">
      <el-button>
        <i class="icon"><i-ep-search /></i>
        Default
      </el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <div class="my-swiper">
      <swiper
        class="my-swiper"
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="my-swiper-slide">Slide 1</swiper-slide>
        <swiper-slide class="my-swiper-slide">Slide 2</swiper-slide>
        <swiper-slide class="my-swiper-slide">Slide 3</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
const modules = [Navigation, Pagination, Scrollbar, A11y]
</script>

<style lang="less" scoped>
.my-swiper {
  width: 700px;
  height: 300px;

  .my-swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
</style>
