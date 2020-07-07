// 模板设置，自定义页面布局、模板主题等

class SearchListState {
    list = [];
    count = 0;
}

export default {
    state: new SearchListState(),

    actions: {
        getArticlesList({ commit }, payload) {
            return window.API.blog.blogArticle.listArticleByQuery
                .request({ ...payload })
                .then(res => {
                    commit("CHANGE_STATE_LIST", res.data);
                    return res;
                });
        },
        getArticlesCount({ commit }, payload) {
            return window.API.blog.blogArticle.countArticleByQuery
                .request({ ...payload })
                .then(res => {
                    commit("CHANGE_STATE_COUNT", res.data);
                    return res;
                });
        }
    },

    mutations: {
        CHANGE_STATE_LIST(state, payload) {
            const newList = (state.list || []).concat(payload || []);
            state.list = newList;
        },
        CHANGE_STATE_COUNT(state, payload) {
            state.count = payload || 0;
        }
    },

    getters: {
        list: state => state.list,
        count: state => state.count
    }
};
