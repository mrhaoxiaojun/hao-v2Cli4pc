/*
 * @Author: haoxiaojun
 * @Date: 2019-06-17 19:45:30
 * @Details: common 模块
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2020-04-07 15:44:32
 */

import * as types from './../types'

const state = {
  title: 'front end', // 测试
  subTitle: 'this is a test', // 测试
  isFullScreen: false
}

const actions = {
  titleState ({ commit }, str) {
    commit(types.COM_SHOW_TITLE, str)
  },
  fullScreenState ({ commit }, str) {
    commit(types.COM_FULL_SCREEN, str)
  }
}

const mutations = {
  [types.COM_SHOW_TITLE] (state, str) {
    state.title = str
  },
  [types.COM_FULL_SCREEN] (state, str) {
    state.isFullScreen = str
  }
}

export default {
  state,
  actions,
  mutations
}
