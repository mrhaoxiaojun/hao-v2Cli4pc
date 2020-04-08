/*
 * @Author: haoxiaojun
 * @Date: 2019-06-17 19:35:15
 * @Details:  公共接口模块
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2019-08-12 14:55:21
 */

import url from './server/url'
import { get } from './server/http.js'
// demo
// this.$api.getInfo().then(()=>{})
export default {
  AnnualProductionOilAndGas (params) {
    return get(url.AnnualProductionOilAndGas, params)
  }
}
