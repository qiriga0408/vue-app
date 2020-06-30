import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

import "./util/rem"

import './css/reset.css'

import  'swiper/css/swiper.min.css'

import axios from 'axios'
Vue.prototype.$axios=axios

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
