import dayjs from 'dayjs'

export function formatMonthDay(date, formatStr = 'MM月DD日') {
  return dayjs(date).format(formatStr)
}

export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day')
}

export function formatCurrentTime(formatStr = 'YYYY/MM/DD HH:mm:ss') {
  const currentTime = dayjs()
  return dayjs(currentTime).format(formatStr)
}
