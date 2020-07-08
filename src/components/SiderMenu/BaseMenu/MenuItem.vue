<template>
    <el-submenu
        v-if="item.children"
        :index="item.path"
        :disabled="item.disabled"
    >
        <template slot="title">
            <i v-if="item.icon" :class="item.icon" />
            <span>{{ item.name }}</span>
        </template>
        <menu-item
            v-for="menu in item.children"
            :key="menu.path"
            :item="menu"
        />
    </el-submenu>
    <el-menu-item v-else :index="item.path" :disabled="item.disabled">
        <i v-if="item.icon" :class="item.icon" />
        <span>{{ item.name }}</span>
    </el-menu-item>
</template>

<script>
export default {
    name: "MenuItem",

    props: {
        item: {
            type: Object,
            required: true
        }
    }
};
</script>

<style src="./index.scss" lang="scss" />
