// 全局状态，侧栏折叠、站内消息等

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

    actions: {},

    mutations: {},

    getters: {
        collapsed: state => state.collapsed
    }
};
