<template>
    <div class="user-layout">
        <div class="header">
            <a href="#">
                <img class="logo" :src="logo" alt="logo" />
                <span class="title">
                    奇点云
                </span>
            </a>
        </div>
        <router-view />
        <basic-footer />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BasicFooter from "@/components/BasicFooter";

@Component({
    components: { BasicFooter }
})
export default class UserLayout extends Vue {
    logo = "https://fe-workspace.oss-cn-hangzhou.aliyuncs.com/assets/logo.svg";
}
</script>

<style src="./index.scss" lang="scss" />
