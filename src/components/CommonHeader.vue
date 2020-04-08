
<template>
  <div class="common-header">
     <div class="content">
        <div class="logo" @click="toHome">
           <img src="@/assets/imgs/logo.png" alt="" class="logo-img">
           <h1 class="title">DEMO</h1>
        </div>
        <div class="menu">
          <span
            class="item"
            v-for="(item, index) in menu" :key="index"
            @click="clcMe(index)"
            :style="[ index === currentIndex ? acitve : '']">
            {{item.name}}
          </span>
        </div>
        <span>userName</span>
     </div>
  </div>
</template>

<script>
export default {
  name: 'commonHeader',
  data () {
    return {
      acitve: {
        background: 'hsla(0,0%,90%,.3)'
      },
      menu: [
        {
          name: 'menu1',
          path: '/views'
        },
        {
          name: 'menu2',
          path: '/entity'
        }
      ],
      currentIndex: 0
    }
  },
  mounted () {
    if (this.$route.path === '/entity/EntityMenu1') this.currentIndex = 1
  },
  methods: {
    clcMe (index) {
      this.currentIndex = index
      this.$router.push({ path: `${this.menu[index].path}` })
    },
    toHome () {
      window.location.href = `${process.env.DOMAIN}/loginsite/homepage`
    }
  },
  components: {
  }
}
</script>

<style lang="less" >
.common-header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: 64px;
    line-height: 64px;
    background: #3b5998;
    color: #fff;
    .content{
      display: flex;
      .logo{
        width: 300px;
        .logo-img{
            position: relative;
            padding-left: 25px;
            top: 12px;
            width: 75px;
            cursor: pointer;
        }
        .title{
          display: inline;
          padding-left: 8px;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
        }
      }
      .menu{
        flex: 1;
        text-align: right;
        margin-right: 20px;
        .item{
          display: inline-block;
          font-size: 14px;
          height: 64px;
          line-height: 64px;
          cursor: pointer;
          width: 80px;
          text-align: center;
          color: #fff;
        }
      }
    }
}
</style>
