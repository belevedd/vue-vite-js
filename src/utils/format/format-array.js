export function toFirst(fieldData, index) {
  if (index != 0) {
    fieldData.unshift(fieldData.splice(index, 1)[0])
  }
}
export function upGo(fieldData, index) {
  if (index != 0) {
    fieldData[index] = fieldData.splice(index - 1, 1, fieldData[index])[0]
  }
}
export function toLast(fieldData, index) {
  if (index != fieldData.length - 1) {
    fieldData.push(fieldData.splice(index, 1)[0])
  }
}
export function downGo(fieldData, index) {
  if (index != fieldData.length - 1) {
    fieldData[index] = fieldData.splice(index + 1, 1, fieldData[index])[0]
  }
}
