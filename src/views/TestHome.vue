<template>
  <div class="test">
    你们郝 这是  新增用户 的页面
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="rule">
      <em>开发重要提示(请务必阅读)：</em>
      <em>滥用iview的栅格请注意，减少滥用</em>
      <em>请不要随意给容器设置高度，高度通常是内容自动撑开除特别，例如：button，input，img 等</em>
      <em>请flex弹性布局，content部分通栏的话请设置width：100%</em>
      <em>通常，请写完页面，大小屏幕自己看一下，解决>15分分钟证明你的布局样式有问题</em>
      <em>浅色灰色背景+白色圆角content 显着区块性和立体感强一点，漂亮一些，这个已经做好了包括padding，请直接写content里面内容即可</em>
      <em>自适应，用不着媒体查询，请勿根据屏幕尺寸进行样式修订，因为这这么干又累又搞得复杂化（参加第二条）</em>
      <em>最后进入开发，请delete me</em>
    </div>
    <p>
      原则上：根据ui设计师对，字体颜色、字号，button（大中小）input（大中小）等等整个网站系统的样式规范，还会出一个demoUI，也可以说是sodUI的vue文件
      <br>
      这样节省参加开发人员重复写同样的样式，也利于整个网站的样式的样式一致性，便用后期维护，(组件化或模块化思维)
      <br>
      举例： 加入有一天设计师，我们ui风格要变，所有的button全部换皮肤改大小，大家各自写各自的那可怎么改啊，改n个文件
      <br>
      不过目前业务大量使用ui组件库，所有这方面的需求，除一些非ui库提供而又需要定制化的大量使用的样式组件，需要写写着common.less 中，写完，请创建一个uidemo，进行说明，同步all
    </p>
    <br>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .test{
    .rule{
      background: #000;
      em{
        display: block;
        font-weight: 400px;
        color: red;
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }
</style>
