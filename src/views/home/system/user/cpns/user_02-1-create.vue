<template>
  <div class="btn-item">
    <el-button
      :color="commonBtnColor.btnPrimaryColor"
      @click="createBtnClick()"
    >
      <i class="icon"><i-ep-document-add /></i>
      <span>新建</span>
    </el-button>
  </div>
</template>

<script setup>
/*----- 引入配置项 -----*/
import { commonBtnColor } from '@/config/common/style'

const createBtnClick = () => {
  console.log('点击新建按钮')
}
</script>

<style lang="less" scoped>
.btn-item {
  margin: 5px 10px 0 0;
}
</style>
