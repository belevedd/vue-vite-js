// 删除对话框数据
const deleteDialogData = reactive({
  isVisible: false,
  title: '删除❗',
  text: '确定要删除该条数据吗？',
  backBtnText: '取消',
  commitBtnText: '确认',
})

// 导入excel对话框数据
const uploadExcelDialogData = reactive({
  isVisible: false,
  title: '文件导入',
  backBtnText: '返回',
  commitBtnText: '确认',
})

export { deleteDialogData, uploadExcelDialogData }
