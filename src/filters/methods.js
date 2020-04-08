/*
 * @Author: haoxiaojun
 * @Date: 2019-06-17 19:36:48
 * @Details: 全局过滤器
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2020-04-07 15:44:48
 */

/**
 * 对日期进行格式化，
 * @param date 要格式化的日期
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有：
 *     y:年,
 *     M:年中的月份(1-12),
 *     d:月份中的天(1-31),
 *     h:小时(0-23),
 *     m:分(0-59),
 *     s:秒(0-59),
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 */
export const formatDate = (str, format) => {
  if (!str) return ''
  // console.log(str,fromat)
  var date = new Date(str)

  var map = {
    '': date.getFullYear(), // 年
    M: date.getMonth() + 1, // 月份
    d: date.getDate(), // 日
    h: date.getHours(), // 小时
    m: date.getMinutes(), // 分
    s: date.getSeconds(), // 秒
    q: Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
    var v = map[t]
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v
        v = v.substr(v.length - 2)
      }
      return v
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length)
    }
    return all
  })
  return format
}
/**
 * 转换为大写
 * @param {String} value 接受的过滤值
 */
export const uppercase = (value) => {
  return (value || value === 0)
    ? value.toString().toUpperCase()
    : ''
}
/**
 * 转换为大写
 * @param {String} value 接受的过滤值
 */
export const lowercase = (value) => {
  return (value || value === 0)
    ? value.toString().toLowerCase()
    : ''
}

/**
 获取url参数
 */
export const queryUrl = (url) => {
  url = url || window.location.href
  var reg = /([^?=&]+)=([^?=&]+)/g
  var obj = {}
  url.replace(reg, function () {
    obj[arguments[1]] = arguments[2]
  })
  return obj
}
