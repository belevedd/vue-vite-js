import { defineStore } from 'pinia'
import router from '@/router'
import { formatObjectKey } from '@/utils/format-object'

const useRegisterStore = defineStore('register', {
  state: () => ({}),
  actions: {
    // 发送用户注册数据
    async fetchRegisterData(registerData) {
      const { confirmPassword, ...userReqData } = registerData
      const keyMap = { company: 'companyname' }
      const userData = formatObjectKey(userReqData, keyMap)

      // 假数据操作
      if (userData.account === 'admin') {
        const data = {
          code: 4001,
          msg: '用户名已存在!!!',
        }
        return data
      } else {
        // 注册成功 路由跳转到登录界面
        router.push('/login')
        const data = {
          code: 200,
          msg: '注册成功，请再次登录！',
        }
        return data
      }
    },
    // 跳转登录界面
    async jumpLoginPage() {
      router.push('/login')
    },
  },
})

export default useRegisterStore
