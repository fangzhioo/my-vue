import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from "../types";

export class GlobalState {
    version?: string = "1.0.0";
    token?: string = "";
    title?: string = "数据中台";
    logo?: string =
        "https://fe-workspace.oss-cn-hangzhou.aliyuncs.com/assets/logo.svg";
}
/**
 * state
 */
export const state: GlobalState = new GlobalState();

/**
 * getters
 */
export const getters: GetterTree<GlobalState, RootState> = {
    getVersion(state: GlobalState): string {
        return state.version;
    },
    getToken(state: GlobalState): string {
        return state.token;
    },
    getTitle(state): string {
        return state.title;
    },
    getLogo(state): string {
        return state.logo;
    }
};

/**
 * mutations
 */
export const mutations: MutationTree<GlobalState> = {
    setVersion(state: GlobalState, payload: string) {
        state.version = payload;
    },
    // 修改Token
    updateToken: (state, payload: string) => {
        state.token = payload;
    }
};

/**
 * actions
 */
export const actions: ActionTree<GlobalState, RootState> = {
    Version({ commit }, payload: string) {
        commit("setVersion", payload);
    },
    // 退出清除token
    logout({ commit }) {
        commit("updateToken", "");
    },
    setToken({ commit }, payload: string) {
        commit("updateToken", payload);
    }
};

const namespaced = true;

export const global: Module<GlobalState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
