import Vue from 'vue'
import VueRouter from 'vue-router'
import Shouye from '@/views/shouye'
import Fenlei from '@/views/fenlei'
import Shopping from '@/views/shopping'
import My from '@/views/my'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/shouye',
    name: 'Shouye',
    component: Shouye
  },
  {
    path: '/fenlei',
    name: 'Fenlei',
    component: Fenlei
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path:"/",
    redirect:"/shouye"
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
