<template>
    <div class="user-account">
        <a-dropdown>
            <div class="user-avatar">
                <a-avatar size="small" :src="avatar" :style="avatarStyle" />
                <a type="info" class="user-name" :underline="false">
                    {{ nickName }}
                </a>
            </div>
            <a-menu slot="overlay">
                <a-menu-item>
                    <a href="javascript:;">个人中心</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">个人设置</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">退出登录</a>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
        <!-- <el-dropdown @command="handleCommand">
            <div class="user-avatar">
                <el-avatar size="small" :src="avatar" :style="avatarStyle" />
                <el-link type="info" class="user-name" :underline="false">
                    {{ nickName }}
                </el-link>
            </div>
            <el-dropdown-menu v-if="isLogin" slot="dropdown">
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
            <el-dropdown-menu v-else slot="dropdown">
                <el-dropdown-item
                    command="logout"
                    icon="el-icon-switch-button"
                    divided
                >
                    登录
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown> -->
    </div>
</template>

<script>
import * as _ from "lodash";
const defaultAvatar =
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
export default {
    name: "UserAccount",

    props: {
        navHeight: Number,
        currentUser: Object
    },

    computed: {
        avatar() {
            return _.get(this, "currentUser.avatar", defaultAvatar);
        },
        nickName() {
            return _.get(this, "currentUser.nickName", "guest");
        },
        isLogin() {
            return !_.isEmpty(_.get(this, "currentUser.userName"));
        },
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
