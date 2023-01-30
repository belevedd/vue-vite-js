import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config'
import useMainStore from '@/stores/modules/main'

const mainStore = useMainStore()

class myRequest {
  constructor(baseURL, timeout = 10000, showLoading = true) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
    // 请求时是否显示loading动画
    this.showLoading = showLoading

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 所有的实例都有的拦截器: 请求成功拦截
        if (this.showLoading) {
          mainStore.isLoading = true
        }
        return config
      },
      (err) => {
        // 所有的实例都有的拦截器: 请求失败拦截
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 所有的实例都有的拦截器: 响应成功拦截

        // 将loading移除
        mainStore.isLoading = false

        return res

        /* 数据处理示例：
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        } */
      },
      (err) => {
        // 所有的实例都有的拦截器: 响应失败拦截

        // 将loading移除
        mainStore.isLoading = false

        /* 判断不同的HttpErrorCode显示不同的错误信息示例：
        if (err.response.status === 404) {
          console.log('404的错误~')
        } */

        return err
      }
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new myRequest(BASE_URL, TIME_OUT)
