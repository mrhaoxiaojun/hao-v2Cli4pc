<template>
    <div>
        <!-- 这是侧导航 -->
        <common-menu/>
        <div class="common-con-wrap" >
          <transition :name="transitionName">
            <keep-alive :include="/^[\w\W]*_keepAlive$/">
              <router-view  class="layout-view"></router-view>
            </keep-alive>
          </transition>
        </div>
    </div>
</template>
<script>
import commonMenu from '@/components/CommonMenu.vue'

export default {
  name: 'layout',
  data () {
    return {
      transitionName: 'slide-left'

    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  },
  components: {
    'common-menu': commonMenu

  },
  methods: {

  }
}
</script>
<style lang="less">
// 路由内容区域
.common-con-wrap {
  .layout-view {
    position: absolute;
    top:74px;
    left:216px;
    right: 10px;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .full-screen{
    bottom:10px;
  }
}

</style>
