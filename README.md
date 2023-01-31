# vue-vite-js 项目初始化

## 1、内部配置

- router 路由
- pinia 状态管理
- element-plus 按需引入
  - 可以直接在 vue 文件中使用 elementplus 的组件，不需要 import 进行导入。
- axios 网络请求
  - 封装在 service/request/index.js 中；
  - 需要在 store 中进行网络请求，在\*.vue 页面中进行加载 store 中的数据；
  - 添加了 loading 组件，请求时加载 loading 动画，在响应成功/失败时移除 loading 动画。
- dayjs 日期格式库
- underscore js 辅助函数库
- assets/icon 添加阿里巴巴矢量图标库
  - 详细步骤查看 https://blog.csdn.net/JavaLLU/article/details/118965055
