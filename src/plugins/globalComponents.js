/*
 * @Author: haoxiaojun
 * @Date: 2019-06-18 20:22:18
 * @Details:  全局组件处理，这里目前是按需加载iview 组件
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2020-04-07 15:43:57
 */
import 'iview/dist/styles/iview.css'
import { Page, Table, Message, Menu, Submenu, MenuItem, Icon, Tooltip, Row, Col, Modal, FormItem, Form, Button, Input, Select, Option, DatePicker, Collapse, Panel, Tree } from 'iview'
export default function (Vue) {
  // 基础模块
  const components = { Page, Table, Message, Menu, Submenu, MenuItem, Icon, Tooltip, Row, Modal, FormItem, Form, Button, Input, Collapse, Panel, Tree }
  const iviewModule = {
    ...components,
    // 不能和html标签重复的组件
    iDatePicker: DatePicker,
    iSelect: Select,
    iOption: Option,
    iCol: Col,
    iForm: Form
  }
  Object.keys(iviewModule).forEach(key => {
    Vue.component(key, iviewModule[key])
  })
  Vue.prototype.$Message = Message
}

// 参考：https://www.iviewui.com/docs/guide/start
// 在非 template/render 模式下（例如使用 CDN 引用时），组件名要分隔，例如 DatePicker 必须要写成 date-picker。

// 以下组件，在非 template/render 模式下，需要加前缀 i-：

// Button: i-button
// Col: i-col // 需要再页面中写 <iCol></iCol> or <i-col></i-col>标签
// Table: i-table
// Input: i-input
// Form: i-form
// Menu: i-menu
// Select: i-select
// Option: i-option
// Progress: i-progress
// Time: i-time
// 以下组件，在所有模式下，必须加前缀 i-，除非使用 iview-loader：

// Switch: i-switch
// Circle: i-circle
