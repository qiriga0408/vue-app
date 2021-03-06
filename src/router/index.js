import Vue from 'vue'
import VueRouter from 'vue-router'
import Xl from '@/views/Xl'
import Zh from '@/views/Zh'
import Sxl from '@/views/Sxl'
import Qrg from '@/views/Qrg'
import Czp from '@/views/Czp'





//其日嘎的路由配置
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
import qrgPracticeSerach from '@/views/Qrg/qrgPractice/qrgPracticeSerach'
import qrgDry from '@/views/Qrg/qrgDry'
import qrgTopic from '@/views/Qrg/qrgTopic'
import qrgCalendar from '@/views/Qrg/qrgCalendar'
import gredit from '@/views/Czp/gredit'


const qrgMessage =()=>import('@/components/qrgMessage')
const qrgCodeLogin =()=>import('@/components/qrgCodeLogin')
const qrgBoarding =()=>import('@/components/qrgBoarding')
const qrgPassword =()=>import('@/components/qrgPassword')
const qrgSetPassword =()=>import('@/components/qrgSetPassword')
const qrgRecod =()=> import ('@/views/Qrg/qrgRecod')



// 张豪的路由
import Zhedit from "@/views/zh/zhedit"
import Zhseach from "@/views/zh/zhseach"
// import Zhxf from "@/views/zh/zhxf"

//陈泽平的二级路由
import Czp_E1 from "@/views/Czp/Czp_E1";
import Czp_E2 from "@/views/Czp/Czp_E2";
import Czp_E3 from "@/views/Czp/Czp_E3";
import Czp_E4 from "@/views/Czp/Czp_E4";
import Czp_E6 from "@/views/Czp/Czp_E6";
import Czp_E7 from "@/views/Czp/Czp_E7";
import Czp_E10 from "@/views/Czp/Czp_E10";
import Xg from "@/views/Czp/xiugai";
import MyClass from "../views/Czp/MyClass";

import teacher from "../views/teacher";
import Focuson from '../views/Czp/Focuson.vue';

import Xq from "@/views/Czp/xiangq.vue";



import SxlYdy from "@/views/sxl/SxlYdy";



import Xlrl from "../views/xlrl"

Vue.use(VueRouter)


// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }

const routes = [
    {
        path: '/Xl',
        name: 'Xl',
        component: Xl,
        meta:{
            title:"首页"
        }
    },
    {
        path: '/teacher',
        name: 'teacher',
        component: teacher
    },
	{
	    path: '/focuson',
	    name: 'Focuson',
	    component: Focuson
	},
    {

        path: '/Xlrl',
        name: 'Xlrl',
        component: Xlrl,
        meta:{
            title:"详情"
        }
    }, 
{
    path:'/qrgCodeLogin',
    name:'qrgCodeLogin',
    component:qrgCodeLogin
},
{
    path:'/qrgBoarding',
    name:'qrgBoarding',
    component:qrgBoarding
},
{
    path:'/qrgRecod',
    name:'qrgRecod',
    component:qrgRecod
},
{
    path:'/qrgPassword',
    name:'qrgPassword',
    component:qrgPassword
},
{
    path:'/qrgCalendar',
    name:'qrgCalendar',
    component:qrgCalendar
},
{
    path:'/qrgSetPassword',
    name:'qrgSetPassword',
    component:qrgSetPassword
},
{
    path:'/qrgCodeLogin',
    name:'qrgCodeLogin',
    component:qrgCodeLogin,
     meta:{
        title:"登录"
    },
},
{
    path:'/qrgBoarding',
    name:'qrgBoarding',
    component:qrgBoarding,
    meta:{
        title:"验证码登录"
    }
},
{
    path:'/qrgPassword',
    name:'qrgPassword',
    component:qrgPassword
},
{
    path:'/qrgSetPassword',
    name:'qrgSetPassword',
    component:qrgSetPassword
},

    {
        path: '/Zh',
        name: 'Zh',
        component: Zh,
        meta:{
            title:"课程"
        }
    },
    {
        path: '/zhedit',
        name: 'Zhedit',
        component: Zhedit
    },
    {
        path: '/zhseach',
        name: 'Zhseach',
        component: Zhseach

      },
      
      {
          path:'/gredit',
          name:'gredit',
          component:gredit
      },

    
    // {
    //   path: '/zhxf',
    //   name: 'Zhxf',
    //   component: Zhxf
    // },

    {
        path: '/Sxl',
        name: 'Sxl',
        component: Sxl,
        meta:{
            title:"约课记录"
        }
    },
    {
        path: '/sxl/SxlYdy',
        name: 'SxlYdy',
        component: SxlYdy
    },
    {
        path: '/MyClass',
        name: 'MyClass',
        component: MyClass
    },
    {
        path: '/Czp',
        name: 'Czp',
        component: Czp,
        
        children: [{
                path: '/Czp/Czp_E1',
                name: 'Czp_E1',
                component: Czp_E1,
                
        meta:{
            title:"个人中心"
        },
            },
            {
                path: '/',
                redirect: '/Czp/Czp_E1'
            },
            {
                path: '/Czp/Czp_E2',
                name: 'Czp_E2',
                component: Czp_E2,
                meta:{
                    title:"个人信息"
                },
            },

			{
			    path: '/Czp/Czp_E3',
			    name: 'Czp_E3',
			    component: Czp_E3
			},
			{
			    path: '/Czp/Czp_E4',
			    name: 'Czp_E4',
			    component: Czp_E4
			},
			{
			    path: '/Czp/Czp_E6',
			    name: 'Czp_E6',
			    component: Czp_E6
			},
			{
			    path: '/Czp/Czp_E7',
			    name: 'Czp_E7',
			    component: Czp_E7
			},
			{
			    path: '/Czp/Czp_E10',
			    name: 'Czp_E10',
                component: Czp_E10,
                meta:{
                    title:"设置密码"
                }
            },
            {
                path: '/Czp/xg',
                name: 'Xg',
                component: Xg
              },
            {
                path: '/Czp/Czp_E3',
                name: 'Czp_E3',
                component: Czp_E3
            },
            {
                path: '/Czp/Czp_E4',
                name: 'Czp_E4',
                component: Czp_E4
            },
            {
                path: '/Czp/Czp_E6',
                name: 'Czp_E6',
                component: Czp_E6
            },
            {
                path: '/Czp/Czp_E7',
                name: 'Czp_E7',
                component: Czp_E7
            },
            {
                path: '/Czp/Czp_E10',
                name: 'Czp_E10',
                component: Czp_E10
            },
            {
                path: '/Czp/xingq',
                name: 'Xq',
                component: Xq
            }
        ]
    },
    {
        path: "/",
        redirect: "/Xl"
    },
    {
        path: "/Qrg",
        name: 'Qrg',
        component: Qrg,
        meta:{
            title:"练习"
        }
    },
    //考点陪练
    {
        path: '/qrgSite',
        name: "qrgSite",
        component: qrgSite
    },
    //套卷练习
    {
        path: '/qrgPractice',
        name: 'qrgPractice',
        component: qrgPractice
    },
    //错题练习
    {
        path: '/qrgTopic',
        name: 'qrgTopic',
        component: qrgTopic
    },
    //仿真模考
    {
        path: '/qrgDry',
        name: 'qrgDry',
        component: qrgDry
    },
    //套卷练习里的搜索
    {
        path: '/qrgPracticeSerach',
        name: 'qrgPracticeSerach',
        component: qrgPracticeSerach
    },
    //留言的页面
    {
        path: '/qrgMessage',
        name: 'qrgMessage',
        component: qrgMessage
    },
    //考点专练里的
    {
        path: '/qrgBank',
        name: 'qrgBank',
        component: qrgBank,
        children: [{
                path: 'qrgBankOne',
                name: 'qrgBankOne',
                component: qrgBankOne
            },
            {
                path: '/',
                redirect: 'qrgBankOne'
            },
            {
                path: 'qrgBankTwo',
                name: 'qrgBankTwo',
                component: qrgBankTwo
            },
            {
                path: 'qrgBankThree',
                name: 'qrgBankThree',
                component: qrgBankThree
            },
            {
                path: 'qrgBankFour',
                name: 'qrgBankFour',
                component: qrgBankFour
            },
            {
                path: 'qrgBankFive',
                name: 'qrgBankFive',
                component: qrgBankFive
            },
            {
                path: 'qrgBankSix',
                name: 'qrgBankSix',
                component: qrgBankSix
            },
            {
                path: 'qrgBankSeven',
                name: 'qrgBankSeven',
                component: qrgBankSeven
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

router.beforeEach((to,from,next)=>{
    // console.log(to)
    next()
    document.title=to.meta.title
})



export default router