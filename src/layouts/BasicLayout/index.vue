<template>
    <div class="basic-layout">
        <a-layout class="container-layout">
            <a-layout-header
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
            </a-layout-header>
            <a-layout class="container-layout" :style="containerStyle">
                <a-layout-sider
                    :class="[
                        'aside-layout',
                        fixedHeader && fixSiderbar ? 'aside-layout-fixed' : ''
                    ]"
                    :style="asideStyle"
                >
                    <sider-menu :menu-data="asideMenuConfig" />
                </a-layout-sider>
                <a-layout-content class="content-layout" :style="contentStyle">
                    <a-layout-content class="main">
                        <router-view />
                    </a-layout-content>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import NavHeader from "@/components/NavHeader";
import SiderMenu from "@/components/SiderMenu";
import { headerMenuConfig, asideMenuConfig } from "../../../config/menu";
import { mapState, mapActions } from "vuex";
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
    methods: {
        ...mapActions("global", ["getCurrentUser"])
    },
    mounted() {
        this.getCurrentUser().catch(() => {
            this.$message.warning("尚未登陆");
        });
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
    }
};
</script>

<style src="./index.less" lang="less" />
