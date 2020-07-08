import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { global } from "./global";
import { settings } from "./settings";
Vue.use(Vuex);
const store: StoreOptions<RootState> = {
    state: {
        version: "1.0.0"
    },
    modules: {
        global,
        settings
    }
};
export default new Vuex.Store<RootState>(store);
