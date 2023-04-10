import Base64 from 'base-64'
import { defineStore } from 'pinia'
import useMenuStore from '@/stores/modules/home/menu'
import router from '@/router'

const useLoginStore = defineStore('login', {
  state: () => ({
    user: {},
  }),
  actions: {
    // 发送用户数据
    async fetchLoginData(loginData) {
      const { isKeep, ...userData } = loginData

      // const res = await getHomeHotSuggests()
      // this.user = res.data

      // 假数据操作
      if (userData.account === 'admin' && userData.password === '123456') {
        localStorage.setItem('strawberryWebIsLogin', true)
        if (isKeep) {
          userData.password = Base64.encode(userData.password)
          localStorage.setItem('user', JSON.stringify(userData))
        } else {
          localStorage.removeItem('user')
        }

        // 获取菜单
        const menuStore = useMenuStore()
        menuStore.getUserMenus()

        // 登录成功 路由跳转
        router.push('/home')
        const data = {
          code: 200,
          msg: '登录成功',
        }
        return data
      } else {
        const data = {
          code: 400,
          msg: '用户名或密码错误!!!',
        }
        return data
      }
    },
    // 跳转注册界面
    async jumpRegisterPage() {
      router.push('/register')
    },
    // 获取用户是否记住密码
    async loadLocalLogin() {
      const userData = JSON.parse(localStorage.getItem('user'))
      if (userData) {
        userData.password = Base64.decode(userData.password)
        return userData
      }
      return false
    },
  },
})

export default useLoginStore
