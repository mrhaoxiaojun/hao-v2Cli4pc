/*
 * @Author: haoxiaojun
 * @Date: 2019-06-17 19:32:45
 * @Details:  拦截器封装,请根据自己项目再具体调整，目前为贴合现有项目做的设置，token和响应处理
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2020-04-07 15:45:02
 */
import axios from 'axios'
import { Message } from 'iview'
import qs from 'querystring'
import conf from './config'

export default () => {
  // 全局 axios 默认配置
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

  axios.interceptors.request.use((config) => {
    // POST传参序列化
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    /// 判断有无token
    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
      config.headers.languageCode = sessionStorage.getItem('lang')
    } else {
      // 跳转回登录页
      if (process.env.NODE_ENV !== 'production') {
        config.headers.Authorization = conf.token
      } else {
        // window.location.href = conf.loginUrl
      }
    }
    // config.url = config.url + '?timer=' + Date.parse(new Date())
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  /**
    * 后端响应数据格式（根据数据格式进行处理）
    *
    * {
    *    "data": {},
    *    "jumpUrl": "string",
    *    "messageCode": "string", // code 据此区分是否token有效
    *    "messageDescription": "string", // 报错提示
    *    "success": true, // 成功状态
    *    "total": 0
    *  }
    *
   **/

  axios.interceptors.response.use((res) => {
    // token 失效 - 跳转登录
    // if (res.data.messageCode === 'USER_NOT_LOGIN') {
    //   window.location.href = conf.loginUrl
    // }
    // if (!res.data.success) {
    //   Message.error(res.data.messageDescription || '程序正在抢修中')
    //   return Promise.reject(res)
    // }
    return res
  }, (error) => {
    httpError(error) // 提示抛出错误最终看工程需求-是否需要这个抛出
    // if (error.response.status === 401 || error.response.data.error === 'invalid_token') {
    //   // token 无效时需进行登录重新
    //   window.location.href = conf.loginUrl
    // }
    return Promise.reject(error)
  })
}

function httpError (err) {
  if (err && err.response) {
    // console.log(err.response.status, map[err.response.status])
    Message.error(conf.errMap[err.response.status] || '程序正在抢修中')
  }
}
