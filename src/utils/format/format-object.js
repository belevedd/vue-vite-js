// 根据对应keyMap对象替换对象中的key
export function formatObjectKey(objectData, keyMap) {
  const newObject = Object.keys(objectData).reduce((newData, key) => {
    const newKey = keyMap[key] || key
    newData[newKey] = objectData[key]
    return newData
  }, {})
  return newObject
}
