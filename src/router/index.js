import Vue from 'vue'
import VueRouter from 'vue-router'
import Xl from '@/views/Xl'
import Zh from '@/views/Zh'
import Sxl from '@/views/Sxl'
import Qrg from '@/views/Qrg'
import Czp from '@/views/Czp'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/Xl',
    name: 'Xl',
    component: Xl
  },
  {
    path: '/Zh',
    name: 'Zh',
    component: Zh
  },
  {
    path: '/Sxl',
    name: 'Sxl',
    component: Sxl
  },
  {
    path: '/Czp',
    name: 'Czp',
    component: Czp
  },
  {
    path:"/",
    redirect:"/Xl"
  },
  {
    path:"/Qrg",
    name:'Qrg',
    component:Qrg
  }
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
