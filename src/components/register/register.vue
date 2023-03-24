<template>
  <div class="register-template">
    <div class="title">
      <h1>注册</h1>
      <div>已有账号？<span @click="jumpLoginBtnClick">点此登录</span></div>
    </div>
    <div class="menu">
      <el-form
        ref="registerFormRef"
        :model="registerForm"
        status-icon
        :rules="rules"
      >
        <el-form-item prop="account">
          <el-input
            class="item-input"
            v-model="registerForm.account"
            placeholder="请输入用户名"
            clearable
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="item-input"
            v-model="registerForm.password"
            type="password"
            placeholder="请输入密码"
            show-password
            clearable
          />
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input
            class="item-input"
            v-model="registerForm.confirmPassword"
            type="password"
            placeholder="请再次确认密码"
            show-password
            clearable
          />
        </el-form-item>
        <el-form-item prop="company">
          <el-input
            class="item-input"
            v-model="registerForm.company"
            placeholder="请输入企业名称"
            clearable
          />
        </el-form-item>
      </el-form>
    </div>

    <div class="btn">
      <el-button
        class="item-btn"
        type="primary"
        color="#1875e0"
        @click="submitForm(registerFormRef)"
      >
        立即注册
      </el-button>
    </div>
  </div>
</template>

<script setup>
// 子传父 绑定事件
const emits = defineEmits(['loginBtnClick', 'submitBtnClick'])

// 登录表单ref
const registerFormRef = ref({})

// 登录表单数据
const registerForm = reactive({
  account: '',
  password: '',
  confirmPassword: '',
  company: '',
})

// 表单验证规则
const validateConfirmPassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次确认密码'))
  } else if (value !== registerForm.password) {
    callback(new Error('两次密码不一致!'))
  } else {
    callback()
  }
}

const rules = reactive({
  account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  confirmPassword: [{ validator: validateConfirmPassword, trigger: 'blur' }],
  company: [{ required: true, message: '请输入企业名称', trigger: 'blur' }],
})

// 表单提交
const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      emits('submitBtnClick', registerForm)
    } else {
      return false
    }
  })
}

// 点击注册用户按钮事件
const jumpLoginBtnClick = () => {
  emits('loginBtnClick', '跳转登录用户界面')
}
</script>

<style lang="less" scoped>
.register-template {
  width: 465px;
  padding: 50px 55px;
  color: #fff;
  background-color: var(--login-background-color);
  border-radius: 10px;
  box-shadow: 0 0 20px var(--login-text-color) inset;
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
      color: #fff;
    }
  }
  .btn {
    width: 100%;
    margin-top: 30px;

    .item-btn {
      width: 100%;
      padding: 20px 0;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
