<template>
  <div class="login">
    <login
      :login-form-value="loginFormValue"
      @submitBtnClick="submitClick"
      @registerBtnClick="registerClick"
    />
  </div>
</template>

<script setup>
// 引入组件
import Login from '@/components/login/login.vue'
// 引入pinia数据
import useLoginStore from '@/stores/modules/login'
// 引入ElMessage
import { ElMessage } from 'element-plus'
import { throttle } from 'underscore'

// 定义pinia数据
const loginStore = useLoginStore()

// 定义登录表单数据值
const loginFormValue = reactive({
  account: '',
  password: '',
  isKeep: false,
})

// 接收子组件事件 (带节流)
const submitClick = throttle((loginData) => {
  loginStore.fetchLoginData(loginData).then((res) => {
    if (res.code === 200) {
      ElMessage({
        message: res.msg,
        type: 'success',
      })
    } else if (res.code === 400) {
      ElMessage.error(res.msg)
    }
  })
}, 2000)
const registerClick = () => {
  loginStore.jumpRegisterPage()
}

// 判断用户是否记住密码
loginStore.loadLocalLogin().then((userData) => {
  if (userData) {
    loginFormValue.account = userData?.account
    loginFormValue.password = userData?.password
    loginFormValue.isKeep = true
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/img/login/bg.png') center/cover no-repeat;
}
</style>
