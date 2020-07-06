<template>
  <el-menu
    class="base-menu"
    :router="true"
    :default-active="activeIndex"
    :unique-opened="true"
  >
    <menu-item v-for="item in menuData" :key="item.path" :item="item" />
  </el-menu>
</template>

<script>
import MenuItem from "./MenuItem";

export default {
  name: "BaseMenu",

  components: {
    MenuItem
  },

  props: {
    menuData: Array
  },

  data() {
    return {
      activeIndex: this.$route.path
    };
  }
};
</script>

<style src="./index.less" lang="less" />
