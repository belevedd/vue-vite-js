<template>
  <div class="upload-dialog">
    <el-dialog
      v-model="dialogData.isVisible"
      :title="dialogData.title"
      width="30%"
      align-center
    >
      <div class="upload-content">
        <el-upload
          ref="uploadRef"
          action="#"
          class="upload-demo"
          drag
          accept=".xls, .xlsx"
          multiple
          :show-file-list="true"
          :auto-upload="false"
          :before-upload="handleBeforeUpload"
          :on-change="handleChange"
        >
          <el-icon class="el-icon--upload"><i-ep-upload-filled /></el-icon>
          <div class="el-upload__text">将文件拖至此处，或<em>点击上传</em></div>
          <template #tip>
            <div class="el-upload__tip">仅允许导入xls、xlsx格式文件</div>
          </template>
        </el-upload>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            :color="commonBtnColor.btnBackColor"
            @click="backBtnClick()"
          >
            <span>{{ dialogData.backBtnText }}</span>
          </el-button>
          <el-button
            :color="commonBtnColor.btnCommitColor"
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
      title: 'excel文件上传',
      backBtnText: '取消',
      commitBtnText: '确认',
    }),
  },
})
// 子传父 绑定事件
const emits = defineEmits(['backBtnClick', 'uploadFileRequest'])

// 上传组件ref
const uploadRef = ref(null)

// 文件列表
const fileList = ref([])
const handleChange = (uploadFile, uploadFiles) => {
  fileList.value = uploadFiles
}

const handleBeforeUpload = (file) => {
  if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
    ElMessage.error(`【${file.name}】上传格式不正确，请上传xls或者xlsx格式`)
    return false
  } else {
    const data = {
      fileList,
      file,
    }
    emits('uploadFileRequest', data)
    return false
  }
}

// 取消按钮点击事件
const backBtnClick = () => {
  emits('backBtnClick', '点击取消按钮')
}
// 确认按钮点击事件
const commitBtnClick = () => {
  uploadRef.value.submit()
}
</script>

<style lang="less" scoped>
.upload-dialog {
  .dialog-footer {
    display: flex;
    justify-content: center;

    span {
      color: #fff;
    }
  }
}
</style>
