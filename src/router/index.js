import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('@/components/index.vue')), 'index')
const main = r => require.ensure([], () => r(require('@/components/main.vue')), 'main')
const userinfo = r => require.ensure([], () => r(require('@/components/userinfo/index.vue')), 'userinfo')
const layout = r => require.ensure([], () => r(require('@/components/gallery/layout/index.vue')), 'layout')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/index",
      component: index,
      children:[
        {
          path: "/index",
          name: "main",
          component: main
        },
        {
          path: "/userinfo/:id",
          name: "userinfo",
          component: userinfo
        },
        {
          path: "/layout",
          name: "layout",
          component: layout
        }
      ]
    }
  ]
})
