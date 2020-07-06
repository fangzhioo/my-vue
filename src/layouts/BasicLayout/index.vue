<template>
  <div class="basic-layout">
    <el-container class="container-layout">
      <el-header
        :class="['header-layout', fixedHeader ? 'header-layout-fixed' : '']"
        :style="headerStyle"
      >
        <nav-header
          :logo="logo"
          :title="title"
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
import settings from "../../../config/settings";
import { headerMenuConfig, asideMenuConfig } from "../../../config/menu";

export default {
  name: "BasicLayout",

  components: {
    NavHeader,
    SiderMenu
  },

  data() {
    return {
      headerMenuConfig,
      asideMenuConfig,
      layout: "basic",
      navHeight: 64,
      sideWidth: 256,
      sideTheme: "light",
      contentWidth: "fluid",
      fixedHeader: true,
      autoHideHeader: false,
      fixSiderbar: true,
      ...settings
    };
  },

  computed: {
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
          this.fixedHeader && this.fixSiderbar ? `${this.navHeight}px` : 0
      };
    },

    contentStyle() {
      return {
        paddingLeft:
          this.fixedHeader && this.fixSiderbar ? `${this.sideWidth}px` : 0
      };
    }
  },

  methods: {}
};
</script>

<style src="./index.less" lang="less" />
