<template>
  <div class="user-account">
    <el-dropdown @command="handleCommand">
      <div class="user-avatar">
        <el-avatar
          size="small"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          :style="avatarStyle"
        />
        <el-link type="info" class="user-name" :underline="false">
          隔壁小王
        </el-link>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="center" icon="el-icon-user">
          个人中心
        </el-dropdown-item>
        <el-dropdown-item command="setting" icon="el-icon-setting">
          个人设置
        </el-dropdown-item>
        <el-dropdown-item command="logout" icon="el-icon-switch-button" divided>
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "UserAccount",

  props: {
    navHeight: Number
  },

  computed: {
    avatarStyle() {
      return {
        margin: `${(this.navHeight - 24) / 2}px 0`,
        marginRight: "8px",
        verticalAlign: "top"
      };
    }
  },

  methods: {
    handleCommand(command) {
      const from = this.$route.path;
      switch (command) {
        case "logout":
          this.$router.push({
            path: "/user/login",
            query: { to: from }
          });
          break;
      }
    }
  }
};
</script>

<style src="./index.less" lang="less" />
