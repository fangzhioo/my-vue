import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from "../types";

export type Layout = "sidemenu" | "topmenu" | "basic";
export type Theme = "light" | "dark";
export type ContentWidth = "fluid" | "fixed";

export class SettingsState {
    layout?: Layout = "basic"; // 页面布局，支持 sidemenu/topmenu/basic 三种布局，默认 basic
    navHeight?: number = 64; // 导航高度，默认 64px
    navTheme?: Theme = "dark"; // 导航主题，支持 light/dark 两种主题，默认 dark
    sideWidth?: number = 256; // 侧栏宽度，默认 256px
    sideTheme?: Theme = "light"; // 侧栏主题，支持 light/dark 两种主题，默认 light
    contentWidth?: ContentWidth = "fluid"; // 内容区宽度，支持 fluid/fixed 两种方案，默认 fluid
    fixedHeader?: boolean = true; // 固定导航栏，默认 true
    autoHideHeader?: boolean = false; // 自动隐藏导航栏，默认 false
    fixSiderbar?: boolean = false; // 固定侧边栏，默认 true
}
/**
 * state
 */
export const state: SettingsState = new SettingsState();

/**
 * getters
 */
export const getters: GetterTree<SettingsState, RootState> = {
    layout(state: SettingsState): Layout {
        return state.layout;
    },
    navHeight(state: SettingsState): number {
        return state.navHeight;
    },
    navTheme(state: SettingsState): Theme {
        return state.navTheme;
    },
    sideWidth(state: SettingsState): number {
        return state.sideWidth;
    },
    sideTheme(state: SettingsState): Theme {
        return state.sideTheme;
    },
    contentWidth(state: SettingsState): ContentWidth {
        return state.contentWidth;
    },
    fixedHeader(state: SettingsState): boolean {
        return state.fixedHeader;
    },
    autoHideHeader(state: SettingsState): boolean {
        return state.autoHideHeader;
    },
    fixSiderbar(state: SettingsState): boolean {
        return state.fixSiderbar;
    }
};

/**
 * mutations
 */
export const mutations: MutationTree<SettingsState> = {};

/**
 * actions
 */
export const actions: ActionTree<SettingsState, RootState> = {};

const namespaced = true;

export const settings: Module<SettingsState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
