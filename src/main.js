import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import useMenuStore from '@/stores/modules/home/menu'

import 'normalize.css'
import './assets/css/index.css'
import '@/assets/icon/iconfont.css'

//引入Elmessage和Elloading的css样式文件
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
app.use(pinia)

const menuStore = useMenuStore()
menuStore.loadLocalMenu()

app.use(router)

app.mount('#app')
