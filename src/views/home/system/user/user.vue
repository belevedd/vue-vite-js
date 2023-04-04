<template>
  <div class="user">
    <el-scrollbar>
      <!-- 过滤条件 -->
      <user-filter />
      <!-- 操作按钮 -->
      <div class="user-btn">
        <user-btn-create />
        <user-btn-edit :isDisabled="btnEditIsDisabled" />
        <user-btn-delete :isDisabled="btnDeleteIsDisabled" />
        <user-btn-upload />
        <user-btn-download />
      </div>
      <!-- 显示表格 -->
      <user-table
        @tableSingleSelected="getIsSingleSelected"
        @tableMultipleSelected="getIsMultipleSelected"
        @tableSelectedData="getTableSelectedData"
      />
    </el-scrollbar>
  </div>
</template>

<script setup>
/*----- 引入子组件 -----*/
import UserFilter from './cpns/user_01-filter.vue'
import UserBtnCreate from './cpns/user_02-1-create.vue'
import UserBtnEdit from './cpns/user_02-2-edit.vue'
import UserBtnDelete from './cpns/user_02-3-delete.vue'
import UserBtnUpload from './cpns/user_02-4-upload.vue'
import UserBtnDownload from './cpns/user_02-5-download.vue'
import UserTable from './cpns/user_03-table.vue'

// 定义操作按钮是否可用
const btnEditIsDisabled = ref(true)
const btnDeleteIsDisabled = ref(true)

// 获取表格选中数据和对应按钮是否可用
const getIsSingleSelected = (isSingleSelected) => {
  btnEditIsDisabled.value = isSingleSelected
}
const getIsMultipleSelected = (isMultipleSelected) => {
  btnDeleteIsDisabled.value = isMultipleSelected
}
const getTableSelectedData = (selection) => {
  console.log(selection)
}
</script>

<style lang="less" scoped>
.user {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;

  .user-btn {
    display: flex;
    width: 100%;
    padding: 5px 0;
  }
}
</style>
