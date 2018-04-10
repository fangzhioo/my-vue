/**
 *  用户信息
 */
export default {
    state: {
        name:"fangzhi"
    },
  
    mutations: {
      SET_USERINFO(state,info){
        // do something
        
      }
    },
  
    actions: {
        // 全局Vuex函数 加上双下划线区分  私有函数或属性 用一个下划线标识
        __setUserInfo({commit},info){
            commit("SET_USERINFO",info)
        }
    }
  }
  