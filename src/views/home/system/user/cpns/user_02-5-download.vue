<template>
  <div class="btn-item">
    <el-button
      :color="commonBtnColor.btnDownloadColor"
      @click="downloadBtnClick()"
    >
      <i class="icon"><i-ep-download /></i>
      <span>下载模板</span>
    </el-button>
  </div>
</template>

<script setup>
/*----- 引入配置项 -----*/
import { commonBtnColor } from '@/config/common/style'

const downloadBtnClick = () => {
  console.log('点击下载模板按钮')
}
</script>

<style lang="less" scoped>
.btn-item {
  margin: 5px 10px 0 0;
}
</style>
