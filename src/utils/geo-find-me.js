// 获取用户的当前经纬度信息
export const geoFindMe = () => {
  return new Promise((resolve, reject) => {
    const success = (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      const returnData = {
        lat: latitude,
        lng: longitude,
      }
      resolve(returnData)
    }

    const error = () => {
      reject('无法获取你的位置')
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      reject('此浏览器不支持获取位置的方法')
    }
  })
}

export default geoFindMe
