import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'
// 引入rem
import "./util/rem"
// 公共样式
import './css/reset.css'
// 引入轮播
import 'swiper/css/swiper.min.css'

Vue.prototype.bus = new Vue;
// 引入公共http
import http from './util/http'

Vue.prototype.$http = http

// import loading from './util/Loading' // 引入loading
// Vue.use(loading) // 全局使用loading

// import './util/Loading'
// 引入插件变成二维码
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)

//  引入全局axios
import axios from 'axios' 

Vue.prototype.$axios=axios

import Iscroll from 'iscroll'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')