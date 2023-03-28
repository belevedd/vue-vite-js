import { onMounted, onUnmounted, ref } from 'vue'

// 获取当前浏览器宽度和高度
export function useWindowSize() {
  const windowSize = ref({
    windowWidth: document.documentElement.clientWidth,
    windowHeight: document.documentElement.clientHeight,
  })

  const getWindowSize = () => {
    windowSize.value.windowWidth = document.documentElement.clientWidth //实时屏幕宽度
    windowSize.value.windowHeight = document.documentElement.clientHeight //实时屏幕高度
  }

  onMounted(() => {
    window.addEventListener('resize', getWindowSize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', getWindowSize)
  })

  return { windowSize }
}
