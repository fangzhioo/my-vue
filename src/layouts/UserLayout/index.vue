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

<script>
import BasicFooter from "@/components/BasicFooter";
import settings from "../../../config/settings";

export default {
  name: "UserLayout",

  components: {
    BasicFooter
  },

  data() {
    return {
      ...settings
    };
  }
};
</script>

<style src="./index.less" lang="less" />
