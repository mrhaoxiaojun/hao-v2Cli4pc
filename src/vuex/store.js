/*
 * @Author: haoxiaojun
 * @Date: 2019-06-17 19:46:20
 * @Details: 统一对外暴露Store
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2020-04-07 15:44:34
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import com from './modules/com'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    com
  },
  getters
})
