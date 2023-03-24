<template>
  <div class="register">
    <register @submitBtnClick="submitClick" @loginBtnClick="loginClick" />
  </div>
</template>

<script setup>
// 引入组件
import Register from '@/components/register/register.vue'
// 引入pinia数据
import useRegisterStore from '@/stores/modules/register'
// 引入ElMessage
import { ElMessage } from 'element-plus'

// 定义pinia数据
const registerStore = useRegisterStore()

// 接收子组件事件
const submitClick = (registerData) => {
  registerStore.fetchRegisterData(registerData).then((res) => {
    if (res.code === 200) {
      ElMessage({
        message: res.msg,
        type: 'success',
      })
    } else {
      ElMessage.error(res.msg)
    }
  })
}
const loginClick = () => {
  registerStore.jumpLoginPage()
}
</script>

<style lang="less" scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/img/common/bg.jpg') center/cover no-repeat;
}
</style>
