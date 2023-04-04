<template>
  <div class="btn-item">
    <el-button
      :disabled="isDisabled"
      :color="commonBtnColor.btnEditColor"
      @click="editBtnClick()"
    >
      <i class="icon"><i-ep-edit /></i>
      <span>编辑</span>
    </el-button>
  </div>
</template>

<script setup>
/*----- 引入配置项 -----*/
import { commonBtnColor } from '@/config/common/style'

// 接受父组件传递过来的值
defineProps({
  isDisabled: {
    type: Boolean,
    default: true,
  },
})

const editBtnClick = () => {
  console.log('点击编辑按钮')
}
</script>

<style lang="less" scoped>
.btn-item {
  margin: 5px 10px 0 0;

  i,
  span {
    color: #fff;
  }
}
</style>
