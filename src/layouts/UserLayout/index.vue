<template>
    <div class="user-layout">
        <div class="header">
            <a href="#">
                <img class="logo" :src="logo" alt="logo" />
                <span class="title">{{ title }} </span>
            </a>
        </div>
        <router-view />
        <basic-footer />
    </div>
</template>

<script>
import BasicFooter from "@/components/BasicFooter";
import { mapState } from "vuex";

export default {
    name: "UserLayout",

    components: {
        BasicFooter
    },

    computed: {
        ...mapState("setting", [
            "logo",
            "title",
            "layout",
            "navHeight",
            "sideWidth",
            "sideTheme",
            "contentWidth",
            "fixedHeader",
            "autoHideHeader",
            "fixSiderbar"
        ])
    }
};
</script>

<style src="./index.less" lang="less" />
