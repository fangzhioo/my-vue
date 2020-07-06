<template>
  <div :class="['nav-header', theme === 'light' ? 'light' : '']">
    <div :class="['nav-header-main', contentWidth === 'fluid' ? 'wide' : '']">
      <div v-if="logo || title" class="nav-header-left">
        <div class="nav-header-logo" :style="logoStyle">
          <img v-if="logo" :src="logo" alt="logo" />
          <h1 v-if="title" :style="titleStyle">
            {{ title }}
          </h1>
        </div>
      </div>

      <div class="nav-header-menu" :style="menuStyle"></div>

      <right-content class="nav-header-right" v-bind="$attrs" />
    </div>
  </div>
</template>

<script>
import RightContent from "@/components/GlobalHeader/RightContent";
import { isBrowser } from "../../utils/utils";

export default {
  name: "NavHeader",

  components: {
    RightContent
  },

  props: {
    logo: String,
    title: String
  },

  data() {
    return {
      innerWidth: isBrowser() ? window.innerWidth : 0,
      theme: "",
      contentWidth: ""
    };
  },

  computed: {
    logoStyle() {
      return {
        width: this.layout !== "topmenu" && `${this.sideWidth}px`
      };
    },

    titleStyle() {
      return {
        marginLeft: this.logo ? "12px" : 0
      };
    },

    menuStyle() {
      return {
        flex: 1,
        maxWidth: `${(this.contentWidth === "fixed" && this.innerWidth > 1200
          ? 1200
          : this.innerWidth) -
          280 -
          120}px`
      };
    }
  }
};
</script>

<style src="./index.less" lang="less" />
