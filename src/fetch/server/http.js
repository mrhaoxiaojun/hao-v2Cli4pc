/*
 * @Author: haoxiaojun
 * @Date: 2019-06-17 19:32:08
 * @Details: axios 请求方法分支
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2020-04-08 10:45:38
 */
import axios from 'axios'
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export function post (url, params, type = 'json') {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {
      responseType: type
    })
      .then(response => {
        // 处理逻辑
        resolve(response.data)
      }, err => {
        // 接口报错
        reject(err)
      })
      .catch((error) => {
        // 处理逻辑出错'
        reject(error)
      })
  })
}
export function put (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export function Delete (url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url + '/' + params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
