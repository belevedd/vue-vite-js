// 格式化表单中文字的宽度
export const formatFormWidth = (longestText) => {
  // 新建一个 span
  let span = document.createElement('span')
  span.innerText = longestText
  document.body.appendChild(span)
  let width = span.getBoundingClientRect().width
  // 移除 document 中临时的 span
  document.body.removeChild(span)
  return width
}
