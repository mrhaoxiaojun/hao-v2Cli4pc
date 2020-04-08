/*
 * @Author: haoxiaojun
 * @Date: 2019-06-18 20:28:13
 * @Details:  插件集合
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2020-04-07 15:44:13
 */
import globalComponents from './globalComponents'
import globalLang from './globalLang'
import globalPlugins from './globalPlugins'
export default function (Vue, Options) {
  Vue.use(globalComponents)
  Vue.use(globalLang, Options)
  Vue.use(globalPlugins)
}
