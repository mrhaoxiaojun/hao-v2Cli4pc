/*
 * @Author: haoxiaojun
 * @Date: 2019-06-18 19:14:02
 * @Details:  指令处理
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2019-06-18 19:16:33
 */
import * as directives from './directives'

export default Vue => {
  Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))
}
