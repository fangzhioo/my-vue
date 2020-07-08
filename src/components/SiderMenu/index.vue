<template>
    <div class="sider-menu">
        <base-menu v-bind="$attrs" />
    </div>
</template>

<script>
import BaseMenu from "./BaseMenu";

export default {
    name: "SiderMenu",

    components: {
        BaseMenu
    },

    props: {}
};
</script>

<style src="./index.scss" lang="scss" />
