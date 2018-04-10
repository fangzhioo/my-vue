// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex/index"

// 添加UI
import ElementUI from "element-ui"
Vue.use(ElementUI);

// 添加全局工具类和HTTP类
import Tools from "./utils/Tools"
Vue.prototype.$Tools = Tools;
import axios from "./utils/Http"
Vue.prototype.$Http = axios;

// vue-bus 事件总线
import VueBus from "vue-bus"
Vue.use(VueBus);

// 导入全局样式
import "@/assets/css/reset.css"
import "@/assets/css/common.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
