<template>
  <div class="btn-item">
    <el-button :color="commonBtnColor.btnUploadColor" @click="uploadBtnClick()">
      <i class="icon"><i-ep-upload /></i>
      <span>导入</span>
    </el-button>
    <upload-dialog
      :dialogData="uploadExcelDialogData"
      @uploadFileRequest="uploadFileRequest"
      @backBtnClick="backClick"
    />
  </div>
</template>

<script setup>
/*----- 引入子组件 -----*/
import UploadDialog from '@/components/dialog/upload-excel-dialog.vue'
/*----- 引入配置项 -----*/
import { commonBtnColor } from '@/config/common/style'
import { uploadExcelDialogData } from '@/config/common/main'

// 点击导入按钮事件
const uploadBtnClick = () => {
  uploadExcelDialogData.isVisible = true
}
// 对话框点击返回按钮事件
const backClick = () => {
  uploadExcelDialogData.isVisible = false
}

// 上传文件请求操作
const uploadFileRequest = ({ fileList, file }) => {
  fileList.value.push(file)
  console.log(file)
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
