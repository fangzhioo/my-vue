<template>
    <div class="basic-layout">
        <el-container class="container-layout">
            <el-header
                :class="[
                    'header-layout',
                    fixedHeader ? 'header-layout-fixed' : ''
                ]"
                :style="headerStyle"
            >
                <nav-header
                    :logo="logo"
                    :title="title"
                    :nav-height="navHeight"
                    :side-width="sideWidth"
                    :menu-data="headerMenuConfig"
                />
            </el-header>
            <el-container class="container-layout" :style="containerStyle">
                <el-aside
                    :class="[
                        'aside-layout',
                        fixedHeader && fixSiderbar ? 'aside-layout-fixed' : ''
                    ]"
                    :style="asideStyle"
                >
                    <sider-menu :menu-data="asideMenuConfig" />
                </el-aside>
                <el-container class="content-layout" :style="contentStyle">
                    <el-main class="main">
                        <router-view />
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import NavHeader from "@/components/NavHeader";
import SiderMenu from "@/components/SiderMenu";

import { headerMenuConfig, asideMenuConfig } from "../../../config/menu";

import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
const namespace = "settings";

@Component({ components: { NavHeader, SiderMenu } })
export default class BasicLayout extends Vue {
    headerMenuConfig = headerMenuConfig;
    asideMenuConfig = asideMenuConfig;

    @Getter("layout", { namespace }) private layout!: string;
    @Getter("navHeight", { namespace }) private navHeight!: number;
    @Getter("navTheme", { namespace }) private navTheme!: string;
    @Getter("sideWidth", { namespace }) private sideWidth!: number;
    @Getter("sideTheme", { namespace }) private sideTheme!: string;
    @Getter("contentWidth", { namespace }) private contentWidth!: string;
    @Getter("fixedHeader", { namespace }) private fixedHeader!: boolean;
    @Getter("autoHideHeader", { namespace }) private autoHideHeader!: boolean;
    @Getter("fixSiderbar", { namespace }) private fixSiderbar!: boolean;
    @Getter("getTitle", { namespace: "global" }) private title!: string;
    @Getter("getLogo", { namespace: "global" }) private logo!: string;

    get headerStyle() {
        return {
            height: `${this.navHeight}px`,
            lineHeight: `${this.navHeight}px`
        };
    }

    get containerStyle() {
        return {
            paddingTop: this.fixedHeader ? `${this.navHeight}px` : 0
        };
    }

    get asideStyle() {
        return {
            width: `${this.sideWidth}px`,
            paddingTop:
                this.fixedHeader && this.fixSiderbar ? `${this.navHeight}px` : 0
        };
    }

    get contentStyle() {
        return {
            paddingLeft:
                this.fixedHeader && this.fixSiderbar ? `${this.sideWidth}px` : 0
        };
    }
}
</script>

<style src="./index.scss" lang="scss" />
