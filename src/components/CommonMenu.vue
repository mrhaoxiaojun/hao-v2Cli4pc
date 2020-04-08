<template>
  <div class="common-menu-wrap">
     <Menu ref="menu"  :active-name="activeName" :open-names="openedNames" :theme="theme" class="menu" width= "200px">
        <Submenu :name="item.name"  v-for="(item, index) in menuList" :key="index">
            <template slot="title">
                <Icon :type="item.icon" />
                {{item.text}}
            </template>
            <MenuItem :name="childItem.name" :to="childItem.path" v-for="(childItem, index) in item.children" :key="index">
             {{childItem.text}}
            </MenuItem>
        </Submenu>
    </Menu>
  </div>
</template>
<script>

export default {
  name: 'commonmenu',
  data () {
    return {
      theme: 'dark',
      activeName: '',
      openedNames: [],
      menuList: [
        {
          name: 'menuTitle1', // 目录name （请和路由表中的meta.menuTitle保持一直）
          text: '内容管理',
          icon: 'ios-paper',
          nodeType: 'directory',
          children: [
            {
              name: 'EntityMenu1', // 菜单name（请和路由表中的meta.menuTitle保持一直）
              text: '文章管理',
              icon: 'ios-paper',
              nodeType: 'menu',
              path: '/entity/EntityMenu1'
            }
          ]
        }, {
          name: 'menuTitle2',
          text: '用户管理',
          icon: 'ios-people',
          nodeType: 'directory',
          children: [
            {
              name: 'testHome',
              text: '新增用户',
              icon: 'ios-paper',
              nodeType: 'menu',
              path: '/entity/testHome'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.activeName = this.$route.name
      this.openedNames = [this.$route.meta.menuTitle]
      this.$refs.menu.updateActiveName()
    })
  },
  watch: {
    openedNames () {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  }
}
</script>
<style lang="less">
.common-menu-wrap{
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width:200px;
  padding-top:16px;
  box-sizing: border-box;
  z-index: 20;
  overflow-y: auto;
  overflow-x: hidden;
  background: #515a6e;
}
</style>
