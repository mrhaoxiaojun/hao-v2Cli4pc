<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="tips">此为通用2xdemo，请勿在此修改提交，需要的脚手架的或者部分内容的，拷贝走，如对以下改动有更牛的方案，和小编（haoxiaojun@cnpc.com.cn）沟通，确定没问题再修改更新</p>
    <p class="tips">以下为具体可举例的demo示例，其他js修改内容，请看根目录readme <b>修改部分</b></p>
    <p class="tips2">
      请注意：我们将采用eslint来约束大家的编码规范，请在自己编辑器内安装eslint插件，并进行配置,具体请前往《中油瑞飞项目组FE团队编码规范》查看，可ctrl+s的时候会帮助你格式化为规范代码
      <br>
      eslint - standard规则 (https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)
    </p>
    <div class="row">
      <h2>vuex-<b>全局</b>模块化应用方案-各组件应用推荐语法糖mapState, mapActions, mapMutations, mapGetters</h2>
      <p>{{title}}</p>
      <p>{{com.subTitle}}</p>
    </div>
    <div class="row">
      <h2>filter-<b>全局</b>过滤器提供公共过滤功能用于template (src/filters)</h2>
      <p>例如：时间格式化{{date | formatDate("yyyy-MM-dd hh:mm:ss")}}</p>
    </div>
    <div class="row">
      <h2>tool-工具类提供公共通用方法用于js处理 (import {formatFloat} from 'util/tool')</h2>
      <p>例如：精度处理 0.1+0.2 = {{calc}}</p>
    </div>
    <div class="row">
      <h2>axios-<b>全局</b>请求封装，请求demo（catch 可以不写）</h2>
      <p>
        <pre class="md-fences">
          import api from 'fetch/api'
          api.getInfo().then(res => {
            // 此作用域，接收网络状态为200且success为true的数据
            // 即无需if判断200和success为true,非200和success为false已经在拦截器中统一处理，并提示
            // 直接拿data数据撸业务就可以
            // res 与后端返回值一致
            console.log(res)
          }).catch(error => {
            // 此作用域，接收，网络报错，和接口报错信息，***catch如果无特殊处理，请求中不用写***
            console.log('error', error)
          })
        </pre>
      </p>
    </div>
    <div class="row">
      <h2>filters-<b>全局</b>指令测试</h2>
      <p>
        <input type="text" placeholder="默认不需要获得焦点">
        <input type="text" placeholder="默认需要获得焦点" v-focus>
      </p>
    </div>
    <div class="row">
      <h2>iView-ui组件库<b>全局</b> -- 按需加载&多语言处理 --（目前选型为iView）</h2>
      <p>
        按需加载组件添加路径(/src/plugins/globalComponents.js)
        <Page :total="100" show-total show-elevator show-sizer />
      </p>
    </div>
    <div class="row">
      <h2>自定义多语言 设置路径(/src/lang)</h2>
      <p>
        {{$t('m.symbol.eq')}}，
        {{$t('m.symbol.gt')}}，
        {{$t('m.symbol.lt')}}
      </p>
    </div>
    <div class="row">
      <h2>图片压缩测试</h2>
      <img src="./../assets/test.jpg" alt="" width="500" height="300" class="p">
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import api from '@/fetch/api'
import { formatFloat } from '@/util/tool'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome vue-cli 2x demo',
      date: Date.parse(new Date()),
      calc: 0
    }
  },
  created () {
    // ---------------------------            接口测试demo

    api.getInfo().then(res => {
      // 此作用域，接收网络状态为200且success为true的数据
      // 即无需if判断200和success为true,非200和success为false已经在拦截器中统一处理，并提示
      // 直接拿data数据撸业务就可以
      console.log(res)
    }).catch(error => {
      // 此作用域，接收，网络报错，和接口报错信息，catch如果无特殊处理，请求中不用写
      console.log('error', error)
    })
    api.getCurrentUserDataEntitys().then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })

    // ---------------------------         vuex 状态管理测试demo

    // mapState取值
    console.log('mapState-普通方式取值：', this.$store.state.com.subTitle)
    console.log('mapState-语法糖取值（***推荐***）：', this.com.subTitle)

    // mapGetters 取值
    console.log('mapGetters-语法糖取值（***推荐***）：', this.title)

    // 修改mutations
    this.$store.commit('COM_SHOW_TITLE', 111) // 普通防止修改mutatons
    this.COM_SHOW_TITLE(222) // 语法糖修改mutatons（***推荐***）
    console.log('更改mutations后的结果：', this.$store.state.com.title)

    // 修改action
    this.$store.dispatch('titleState', '234') // 普通防止修改action
    this.titleState('456') // 语法糖修改action（***推荐***）

    // ---------------------------         tool 工具类库应用测试

    this.calc = formatFloat((0.1 + 0.2), 2)

    // ---------------------------         end
  },
  methods: {
    ...mapMutations(['COM_SHOW_TITLE']),
    ...mapActions(['titleState'])
  },
  computed: {
    ...mapGetters(['title']),
    ...mapState(['com'])
  }
  // computed: mapState({
  //   subTitle: state => state.com.subTitle
  // })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = 'less'>
  .hello{
    font-size: 14px;
  }
  .tips{
    margin-top: 10px;
    color: red;
  }
  .tips2{
    margin-top: 10px;
    padding:20px;
    color: #fceb00;
    background: #000;
  }
  input{
    border:1px solid #e8e8e8;
    border-radius: 10px;
    padding:6px 10px;
  }
  .row{
    margin-top: 20px;
    h2{
      color: #65bf7d
    }
    p,.p{
      margin-top: 10px;
    }
    .md-fences{
      width: 700px;
      margin: 0 auto;
      font-size: 0.9rem;
      display: block;
      page-break-inside: avoid;
      text-align: left;
      overflow: visible;
      white-space: pre;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 3px;
      font-family: Consolas, 'Liberation Mono', Courier, monospace;
      padding: 10px 4px 0px;
      background-color: rgb(248, 248, 248);
    }
  }
</style>
