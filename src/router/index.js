import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Layout = resolve => require(['@/components/layout/Layout'], resolve)
const LayoutView = resolve => require(['@/components/layout/LayoutView'], resolve)
const LayoutContent = resolve => require(['@/components/layout/LayoutContent'], resolve)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/HelloWorld', // 请将看完此demo，将应用再项目中后删除掉此组件，主要方便大家查看用法
      name: 'HelloWorld',
      component: () => import('@/views/HelloWorld'),
      meta: {
        title: 'demo'
      }
    },
    {
      path: '/',
      component: Layout,
      name: 'viewsMain',
      redirect: '/views', // 重定向到第一个子路由，否则只渲染Layout组件
      children: [
        {
          path: '/views',
          name: 'views',
          component: LayoutView,
          redirect: '/views/index',
          children: [
            {
              path: 'index',
              name: 'index',
              component: resolve => require(['@/views/View'], resolve),
              meta: {
                title: 'views'
              }
            }
          ]
        },
        {
          path: '/entity',
          name: 'entity',
          component: LayoutContent,
          redirect: '/entity/EntityMenu1',
          children: [
            {
              path: 'EntityMenu1',
              name: 'EntityMenu1',
              component: resolve => require(['@/views/EntityMenu1'], resolve),
              meta: {
                title: 'entity',
                menuTitle: 'menuTitle1'
              }
            },
            {
              path: 'testHome',
              name: 'testHome',
              component: resolve => require(['@/views/TestHome'], resolve),
              meta: {
                title: 'testHome',
                menuTitle: 'menuTitle2'
              }
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 页面title更替，若不需要可注释
  document.title = to.meta.title
  next()
})
export default router
