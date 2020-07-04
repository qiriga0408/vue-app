import Vue from 'vue'
import VueRouter from 'vue-router'
import Xl from '@/views/Xl'
import Zh from '@/views/Zh'
import Sxl from '@/views/Sxl'
import Qrg from '@/views/Qrg'
import Czp from '@/views/Czp'
import qrgSite from '@/views/Qrg/qrgSite'
import qrgBank from '@/views/Qrg/qrgSite/qrgBank'
import qrgBankOne from '@/views/Qrg/qrgSite/qrgBanktwo/qrgBankOne'
import qrgBankTwo from '@/views/Qrg/qrgSite/qrgBanktwo/qrgBankTwo'
import qrgBankThree from '@/views/Qrg/qrgSite/qrgBanktwo/qrgBankThree'
import qrgBankFour from '@/views/Qrg/qrgSite/qrgBanktwo/qrgBankFour'
import qrgBankFive from '@/views/Qrg/qrgSite/qrgBanktwo/qrgBankFive'
import qrgBankSix from '@/views/Qrg/qrgSite/qrgBanktwo/qrgBankSix'
import qrgBankSeven from '@/views/Qrg/qrgSite/qrgBanktwo/qrgBankSeven'
import qrgPractice from '@/views/Qrg/qrgPractice'

//陈泽平的二级路由
import Czp_E1 from "@/views/Czp/Czp_E1";
import Czp_E2 from "@/views/Czp/Czp_E2";

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
    component: Czp,
    children:[
      {
        path: '/Czp/Czp_E1',
        name: 'Czp_E1',
        component: Czp_E1,
      },
      {
        path: '/',
        redirect:'/Czp/Czp_E1'
      },
      {
        path: '/Czp/Czp_E2',
        name: 'Czp_E2',
        component: Czp_E2
      },
    ]
  },
  {
    path:"/",
    redirect:"/Xl"
  },
  {
    path:"/Qrg",
    name:'Qrg',
    component:Qrg
  },
  {
    path:'/qrgSite',
    name:"qrgSite",
    component:qrgSite
  },
  {
    path:'/qrgPractice',
    name:'qrgPractice',
    component:qrgPractice
  },
  {
    path:'/qrgBank',
    name:'qrgBank',
    component:qrgBank,
    children:[
      {
        path:'qrgBankOne',
        name:'qrgBankOne',
        component:qrgBankOne
      },
      {
        path:'/',
        redirect:'qrgBankOne'
      },
      {
        path:'qrgBankTwo',
        name:'qrgBankTwo',
        component:qrgBankTwo
      },
       {
        path:'qrgBankThree',
        name:'qrgBankThree',
        component:qrgBankThree
      },
      {
        path:'qrgBankFour',
        name:'qrgBankFour',
        component:qrgBankFour
      },
      {
        path:'qrgBankFive',
        name:'qrgBankFive',
        component:qrgBankFive
      },
      {
        path:'qrgBankSix',
        name:'qrgBankSix',
        component:qrgBankSix
      },
      {
        path:'qrgBankSeven',
        name:'qrgBankSeven',
        component:qrgBankSeven
      }
    ]
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
