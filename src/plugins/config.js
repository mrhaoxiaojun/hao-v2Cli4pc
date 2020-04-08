/*
 * @Author: haoxiaojun
 * @Date: 2019-06-19 16:25:49
 * @Details: 插件配置项目
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2020-04-07 15:44:07
 */
const lang = sessionStorage.getItem('lang') || 'en-US'
export default {
  i18n: '', // 国际化语言配置回写，需要挂载到vue实例上
  locale: lang // 国际化语言配置当前语言类型 含：zh、en、fr
}
