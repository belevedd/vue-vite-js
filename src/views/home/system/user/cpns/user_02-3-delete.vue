<template>
  <div class="btn-item">
    <el-button
      :disabled="isDisabled"
      :color="commonBtnColor.btnDeleteColor"
      @click="deleteBtnClick()"
    >
      <i class="icon"><i-ep-delete /></i>
      <span>删除</span>
    </el-button>
    <prompt-dialog
      :dialog-data="deleteDialogData"
      @backBtnClick="backClick"
      @commitBtnClick="commitClick"
    />
  </div>
</template>

<script setup>
/*----- 引入子组件 -----*/
import PromptDialog from '@/components/dialog/prompt-dialog.vue'
/*----- 引入配置项 -----*/
import { commonBtnColor } from '@/config/common/style'
import { deleteDialogData } from '@/config/common/main'

// 接受父组件传递过来的值
defineProps({
  isDisabled: {
    type: Boolean,
    default: true,
  },
})

// 点击删除按钮事件
const deleteBtnClick = () => {
  deleteDialogData.isVisible = true
}
// 对话框点击返回按钮事件
const backClick = () => {
  deleteDialogData.isVisible = false
}
// 对话框点击确认按钮事件
const commitClick = () => {
  deleteDialogData.isVisible = false
}
</script>

<style lang="less" scoped>
.btn-item {
  margin: 5px 10px 0 0;
}
</style>
