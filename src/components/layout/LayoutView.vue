<template>
    <div>
        <div class="common-view-wrap" >
          <transition :name="transitionName">
              <keep-alive :include="/^[\w\W]*_keepAlive$/">
              <router-view  class="layout-view"></router-view>
            </keep-alive>
          </transition>
        </div>
    </div>
</template>
<script>

export default {
  name: 'layout',
  data () {
    return {
      transitionName: 'slide-left',
      isMenu: false
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
  },
  methods: {
  }
}
</script>
<style lang="less">
// 路由内容区域
.common-view-wrap {
  margin-left:216px;
  padding: 0 20px 20px 0;
  .layout-view {
    position: absolute;
    top:80px;
    left:16px;
    right: 16px;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
}
</style>
