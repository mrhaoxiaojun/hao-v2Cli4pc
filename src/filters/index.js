/*
 * @Author: haoxiaojun
 * @Date: 2019-06-18 19:14:20
 * @Details:  过滤器处理
 * @Last Modified by:   haoxiaojun
 * @Last Modified time: 2019-06-18 19:14:20
 */
import * as methods from './methods'

export default Vue => {
  Object.keys(methods).forEach(k => Vue.filter(k, methods[k]))
}
