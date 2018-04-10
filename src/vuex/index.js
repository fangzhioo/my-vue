import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from "./modules/userInfo"
import * as getters from './getters'


Vue.use(Vuex)

// 创建 store 实例
export default new Vuex.Store({
    getters,
    modules:{
        userInfo

        
    }
})