<template>
    <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
            <a-icon v-if="menuInfo.icon" :type="menuInfo.icon" />
            <span>{{ menuInfo.name }}</span>
        </span>
        <template v-for="item in menuInfo.children">
            <a-menu-item v-if="!item.children" :key="item.path">
                <a-icon v-if="item.icon" :type="item.icon" />
                <span>{{ item.name }}</span>
            </a-menu-item>
            <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
    </a-sub-menu>
</template>

<script>
import { Menu } from "ant-design-vue";
export default {
    name: "SubMenu",
    isSubMenu: true,
    props: {
        ...Menu.SubMenu.props,
        // Cannot overlap with properties within Menu.SubMenu.props
        menuInfo: {
            type: Object,
            default: () => ({})
        }
    }
};
</script>

<style src="./index.less" lang="less" />
