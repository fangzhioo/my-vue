// 全局状态，侧栏折叠、站内消息等
import Request from "@/utils/fetch";
class CurrentUser {
    userId = undefined;
    userName = undefined;
    nickName = undefined;
    avatar = undefined;
}

export default {
    state: {
        collapsed: false,
        currentUser: new CurrentUser()
    },

    actions: {
        login({ commit }, payload) {
            return Request({
                url: "/api/login",
                method: "post",
                data: { ...payload }
            }).then(res => {
                commit("CHANGE_STATE_CURRENT_USER", res.data);
                return res;
            });
        },
        getCurrentUser({ commit }) {
            return Request({
                url: "/api/currentUser"
            }).then(res => {
                commit("CHANGE_STATE_CURRENT_USER", res.data);
                return res;
            });
        }
    },

    mutations: {
        CHANGE_STATE_CURRENT_USER(state, payload) {
            state.currentUser = payload;
        }
    },

    getters: {
        collapsed: state => state.collapsed
    }
};
