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
                    :theme="theme"
                    :contentWidth="contentWidth"
                    :current-user="currentUser"
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

<script>
import NavHeader from "@/components/NavHeader";
import SiderMenu from "@/components/SiderMenu";
import { headerMenuConfig, asideMenuConfig } from "../../../config/menu";
import { mapState } from "vuex";
// const { mapState } = createNamespacedHelpers("global");

export default {
    name: "BasicLayout",

    components: {
        NavHeader,
        SiderMenu
    },

    data() {
        return {
            headerMenuConfig,
            asideMenuConfig
        };
    },

    computed: {
        ...mapState("global", ["currentUser"]),
        ...mapState("setting", [
            "logo",
            "title",
            "layout",
            "theme",
            "navHeight",
            "sideWidth",
            "sideTheme",
            "contentWidth",
            "fixedHeader",
            "autoHideHeader",
            "fixSiderbar"
        ]),
        headerStyle() {
            return {
                height: `${this.navHeight}px`,
                lineHeight: `${this.navHeight}px`
            };
        },

        containerStyle() {
            return {
                paddingTop: this.fixedHeader ? `${this.navHeight}px` : 0
            };
        },

        asideStyle() {
            return {
                width: `${this.sideWidth}px`,
                paddingTop:
                    this.fixedHeader && this.fixSiderbar
                        ? `${this.navHeight}px`
                        : 0
            };
        },

        contentStyle() {
            return {
                paddingLeft:
                    this.fixedHeader && this.fixSiderbar
                        ? `${this.sideWidth}px`
                        : 0
            };
        }
    },

    methods: {}
};
</script>

<style src="./index.less" lang="less" />
