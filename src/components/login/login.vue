<template>
  <div class="login-template">
    <div class="title">
      <h1>登录</h1>
      <div>没有账号？<span @click="jumpRegisterBtnClick">点此注册</span></div>
    </div>
    <div class="menu">
      <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules">
        <el-form-item prop="account">
          <el-input
            class="item-input"
            v-model="loginForm.account"
            placeholder="请输入用户名"
            clearable
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="item-input"
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            show-password
            clearable
          />
        </el-form-item>
      </el-form>
      <div class="menu-checkbox">
        <el-checkbox
          class="item-checkbox"
          v-model="loginForm.isKeep"
          label="记住我"
        />
      </div>
    </div>

    <div class="btn">
      <el-button
        class="item-btn"
        type="primary"
        color="#1875e0"
        @click="submitForm(loginFormRef)"
      >
        登 录
      </el-button>
    </div>
  </div>
</template>

<script setup>
// 接受父组件传递过来的值
const props = defineProps({
  loginFormValue: {
    type: Object,
    default: () => ({
      account: '',
      password: '',
      isKeep: false,
    }),
  },
})
// 子传父 绑定事件
const emits = defineEmits(['registerBtnClick', 'submitBtnClick'])

// 登录表单ref
const loginFormRef = ref({})

//使用父组件传递过来的值
const { loginFormValue } = toRefs(props)

// 登录表单数据
const loginForm = reactive({
  account: loginFormValue.value.account,
  password: loginFormValue.value.password,
  isKeep: loginFormValue.value.isKeep,
})
watch(
  () => loginFormValue.value,
  (newValue) => {
    loginForm.account = newValue.account
    loginForm.password = newValue.password
    loginForm.isKeep = newValue.isKeep
  },
  { deep: true }
)

// 表单验证规则
const rules = reactive({
  account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

// 表单提交
const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      emits('submitBtnClick', loginForm)
    } else {
      return false
    }
  })
}

// 点击注册用户按钮事件
const jumpRegisterBtnClick = () => {
  emits('registerBtnClick', '跳转注册用户界面')
}
</script>

<style lang="less" scoped>
.login-template {
  width: 465px;
  padding: 50px 55px;
  margin: 30px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgb(227, 242, 240) inset;
  box-sizing: border-box;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 5px;
      color: var(--login-text-color);
      cursor: pointer;
    }
  }
  .menu {
    margin-top: 30px;

    .item-input {
      height: 40px;
    }
    .item-checkbox,
    :deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
      color: #000;
    }
  }
  .btn {
    width: 100%;
    margin-top: 15px;

    .item-btn {
      width: 100%;
      padding: 20px 0;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
