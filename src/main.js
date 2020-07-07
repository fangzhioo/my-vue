import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "./main.less";
import axios from "./utils/fetch";

Vue.config.productionTip = false;

Vue.use(Antd);

Vue.prototype.$axios = axios;

// 引入pont
import "@/api";
Vue.prototype.$API = window.API;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
