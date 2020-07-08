<template>
    <div class="header-right-content">
        <header-search class="action" />
        <a
            v-for="item in menuData"
            :key="item.name"
            type="info"
            class="action"
            :href="item.path"
            :icon="item.icon"
            :underline="false"
            :target="item.external ? '_blank' : '_self'"
        >
            {{ item.name }}
        </a>
        <user-account class="action" v-bind="$attrs" />
    </div>
</template>

<script lang="ts">
import UserAccount from "../UserAccount";
import HeaderSearch from "../HeaderSearch";

export default {
    name: "RightContent",

    components: {
        UserAccount,
        HeaderSearch
    },

    props: {
        menuData: Array
    }
};
</script>

<style src="./index.scss" lang="scss" />
