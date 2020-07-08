import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "./main.scss";

import { api } from "@/api";

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.$api = api;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
