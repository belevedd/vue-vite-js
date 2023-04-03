// element-plus 表格表头根据内容重新渲染表格宽度
export const renderElHeader = ({ column }) => {
  // 新建一个 span
  let span = document.createElement('span')
  // 设置表头名称
  span.innerText = column.label
  // 临时插入 document
  document.body.appendChild(span)
  // 重点：获取 span 最小宽度，设置当前列，注意这里加了 20，字段较多时还是有挤压，且渲染后的 div 内左右 padding 都是 10，所以 +20 。（可能还有边距/边框等值，需要根据实际情况加上）
  column.minWidth = span.getBoundingClientRect().width + 80
  // 移除 document 中临时的 span
  document.body.removeChild(span)
  return column.label
}
