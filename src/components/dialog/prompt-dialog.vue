<template>
  <div class="prompt-dialog">
    <el-dialog
      v-model="dialogData.isVisible"
      :title="dialogData.title"
      width="30%"
      align-center
    >
      <div class="dialog-text">{{ dialogData.text }}</div>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            :color="commonBtnColor.btnBackColor"
            @click="backBtnClick()"
          >
            <span>{{ dialogData.backBtnText }}</span>
          </el-button>
          <el-button
            :color="commonBtnColor.btnPrimaryColor"
            @click="commitBtnClick()"
          >
            <span>{{ dialogData.commitBtnText }}</span>
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
/*----- 引入配置项 -----*/
import { commonBtnColor } from '@/config/common/style'

// 接受父组件传递过来的值
const props = defineProps({
  dialogData: {
    type: Object,
    default: () => ({
      isVisible: false,
      title: '提示',
      text: '提示内容',
      backBtnText: '取消',
      commitBtnText: '确认',
    }),
  },
})
// 子传父 绑定事件
const emits = defineEmits(['backBtnClick', 'commitBtnClick'])

// 取消按钮点击事件
const backBtnClick = () => {
  emits('backBtnClick', '点击取消按钮')
}
// 确认按钮点击事件
const commitBtnClick = () => {
  emits('commitBtnClick', '点击确认按钮')
}
</script>

<style lang="less" scoped>
.prompt-dialog {
  .dialog-text,
  .dialog-footer {
    display: flex;
    justify-content: center;
  }
  .dialog-footer {
    span {
      color: #fff;
    }
  }
}
</style>
