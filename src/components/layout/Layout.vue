<template>
    <div>
        <!-- 这是侧导航 -->
        <common-header/>
        <div class="common-content" >
          <transition :name="transitionName">
              <keep-alive >
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
    </div>
</template>
<script>
import commonHeader from '@/components/CommonHeader.vue'
export default {
  name: 'layout',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  components: {
    'common-header': commonHeader
  },
  methods: {
  }
}
</script>
<style lang="less">
</style>
