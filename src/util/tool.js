/*
 * @Author: haoxiaojun
 * @Date: 2019-06-17 19:37:59
 * @Details:  基本工具类
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2020-04-07 15:44:39
 */

/**
 * 获取当前是移动终端浏览器版本信息
 * @returns {*} 返回移动终端浏览器版本信息
 */
export function browser () {
  return {
    versions: (function () {
      var u = navigator.userAgent
      return { // 移动终端浏览器版本信息

        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端

        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器

        iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器

        iPad: u.indexOf('iPad') > -1 // 是否iPad

      }
    }())
  }
}
/**
 * js精度问题解决方案
 * @export
 * @param {any} f 算数表达式
 * @param {any} digit 保留几位小数
 * @returns 处理后的数据
 */
export function formatFloat (f, digit) {
  digit = digit || 2
  var m = Math.pow(10, digit)
  return (parseFloat(f * m, 10) / m).toFixed(digit)
}

/**
 * 将金额转换为1,234,567.89的格式
 * @param {String} value 接受的过滤值
 */
export function ansFormatter (value) {
  if (value === undefined || value === '') {
    return ''
  }
  value = Number(value).toFixed(2)
  if (value !== 0) {
    let temp = value.split('.')[0]
    const pattern = /(?=((?!\b)\d{3})+$)/g
    temp = temp.replace(pattern, ',')
    value = temp + '.' + value.split('.')[1]
  }
  return value
}

export function getCookie (name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else { return null }
}
export function setCookie (name, value) {
  var Days = 30
  var exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
}
