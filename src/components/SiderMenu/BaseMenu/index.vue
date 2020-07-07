<template>
    <div>
        <a-menu
            mode="inline"
            :default-selected-keys="activeIndex"
            :default-open-keys="activeIndex"
            @click="handleClickMenu"
            :inline-collapsed="collapsed"
        >
            <template v-for="item in menuData">
                <a-menu-item v-if="!item.children" :key="item.path">
                    <a-icon v-if="item.icon" :type="item.icon" />
                    <span>{{ item.name }}</span>
                </a-menu-item>
                <sub-menu v-else :key="item.path" :menu-info="item" />
            </template>
        </a-menu>
    </div>
</template>

<script>
import SubMenu from "./SubMenu";
export default {
    name: "BaseMenu",

    components: {
        "sub-menu": SubMenu
    },

    props: {
        menuData: {
            type: Array,
            default: () => []
        },
        collapsed: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            activeIndex: [this.$route.path]
        };
    },

    methods: {
        handleClickMenu({ key }) {
            if (this.$route.path !== key) {
                this.$router.push(key);
            }
        }
    }
};
</script>

<style src="./index.less" lang="less" />
