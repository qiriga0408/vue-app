import Vue from 'vue'
import VueRouter from 'vue-router'
import Xl from '@/views/Xl'
import Zh from '@/views/Zh'
import Sxl from '@/views/Sxl'
import Qrg from '@/views/Qrg'
import Czp from '@/views/Czp'

//陈泽平的二级路由
import Czp_E1 from "../views/Czp/Czp_E1";
import Czp_E2 from "../views/Czp/Czp_E2";


//孙晓亮的二级路由
import Sxldsk from "../views/sxl/sxldsk.vue"
import Sxlyqs from "../views/sxl/sxlyqs.vue"
import Sxlysk from "../views/sxl/sxlysk.vue"



Vue.use(VueRouter)

const routes = [{
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
        component: Sxl,
        children: [

            {
                path: '/Sxl/Sxldsk',
                name: 'Sxldsk',
                component: Sxldsk,
            },

            {
                path: '/Sxl/Sxlysk',
                name: 'Sxlysk',
                component: Sxlysk,
            },

            {
                path: '/Sxl/Sxlyqs',
                name: '/Sxlyqs',
                component: Sxlyqs,
            },

        ]
    },
    {
        path: '/Czp',
        name: 'Czp',
        component: Czp,
        children: [{
                path: '/Czp/Czp_E1',
                name: 'Czp_E1',
                component: Czp_E1,
            },
            {
                path: '/',
                redirect: '/Czp/Czp_E1'
            },
            {
                path: '/Czp/Czp_E2',
                name: 'Czp_E2',
                component: Czp_E2
            },
        ]
    },
    {
        path: "/",
        redirect: "/Xl"
    },
    {
        path: "/Qrg",
        name: 'Qrg',
        component: Qrg
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