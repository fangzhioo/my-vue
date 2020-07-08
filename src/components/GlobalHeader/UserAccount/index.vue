<template>
    <div class="user-account">
        <el-dropdown @command="handleCommand">
            <div class="user-avatar">
                <el-avatar
                    size="small"
                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    :style="avatarStyle"
                />
                <a type="info" class="user-name">
                    隔壁小王
                </a>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="center" icon="el-icon-user">
                    个人中心
                </el-dropdown-item>
                <el-dropdown-item command="setting" icon="el-icon-setting">
                    个人设置
                </el-dropdown-item>
                <el-dropdown-item
                    command="logout"
                    icon="el-icon-switch-button"
                    divided
                >
                    退出登录
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
class UserAccount extends Vue {
    @Prop({ type: Number, default: 64 }) navHeight!: number;

    get avatarStyle() {
        return {
            margin: `${(this.navHeight - 24) / 2}px 0`,
            marginRight: "8px",
            verticalAlign: "top"
        };
    }

    handleCommand(command: string) {
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

export default UserAccount;
</script>

<style src="./index.scss" lang="scss" />
