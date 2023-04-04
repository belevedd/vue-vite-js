// 用户管理筛选数据
const userFilterData = [
  {
    type: 'input',
    text: '用户名',
    field: 'account',
    value: '',
    placeholder: '请输入用户名',
  },
]

// 用户管理表格列名数据
const userTableColumnData = [
  { prop: 'account', label: '用户名', type: 'text' },
  { prop: 'password', label: '密码', type: 'text' },
  { prop: 'userName', label: '名称', type: 'text' },
  { prop: 'headPortrait', label: '头像', type: 'img' },
]
// 用户管理表格模拟数据
const userTableData = [
  {
    id: 1,
    account: 'admin',
    password: '123456',
    userName: '管理员',
    headPortrait:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d2a8885-131d-4530-835a-0ee12ae4201b%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683184483&t=0b89c8052844cc6691ab74fab2cd1ce9',
  },
  {
    id: 2,
    account: 'user01',
    password: '123456',
    userName: '用户01',
    headPortrait:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F19%2F20210719150601_4401e.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683184502&t=7cfd55bc928ea0f4ad9e6e343ee3f60c',
  },
  {
    id: 3,
    account: 'user02',
    password: '123456',
    userName: '用户02',
    headPortrait:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F09%2F20210609081952_51ef5.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683184502&t=3794649449aad125aa63c128ab11e153',
  },
  {
    id: 4,
    account: 'user03',
    password: '123456',
    userName: '用户03',
    headPortrait:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F66b83731-9b0c-4f12-ba68-1227a9f7fdae%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683184502&t=7e5e449888e47587b3c7d18dcdb3c450',
  },
  {
    id: 5,
    account: 'user04',
    password: '123456',
    userName: '用户04',
    headPortrait:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202204%2F03%2F20220403200559_22088.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683184502&t=ed99490bbb449729651daf2267c5003a',
  },
  {
    id: 6,
    account: 'user05',
    password: '123456',
    userName: '用户05',
    headPortrait:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F13%2F20210613235426_7a793.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683184502&t=92e1edbaf24474f95efb647ab8c89980',
  },
  {
    id: 7,
    account: 'user06',
    password: '123456',
    userName: '用户06',
    headPortrait:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F19%2F20210519212438_ced7e.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683184502&t=e5f68cec41308935aa74c6ff656b06fd',
  },
  {
    id: 8,
    account: 'user07',
    password: '123456',
    userName: '用户07',
    headPortrait:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F6f93a8e4-f3e5-4a34-86bc-4c7bbd46d4f4%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683184617&t=7710562b0fb6e72ef1064c5ae61dbba1',
  },
  {
    id: 9,
    account: 'user08',
    password: '123456',
    userName: '用户08',
    headPortrait:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F52b2cb7e-fe3b-47e6-97e4-94ae6fdbaccc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683184617&t=9ae5f1feee4c9e5f039073f67d43a2da',
  },
  {
    id: 10,
    account: 'user09',
    password: '123456',
    userName: '用户09',
    headPortrait:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202104%2F22%2F20210422220415_2e4bd.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683184502&t=37a3ec1ee005b6080fab2fa33bd1629b',
  },
]

export { userFilterData, userTableColumnData, userTableData }
