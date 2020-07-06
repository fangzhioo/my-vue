<template>
    <div class="user-login">
        <login-form @login="onLogin" />
    </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import { mapActions } from "vuex";
export default {
    name: "Login",

    components: {
        LoginForm
    },

    methods: {
        ...mapActions("global", ["login"]),
        onLogin(form) {
            const { account, password } = form;
            console.log(account, password);
            if (!account || !password) {
                this.$message.info("请填写账号密码！");
                return;
            }
            const payload = {
                username: account,
                password
            };
            this.login(payload)
                .then(res => {
                    console.log(res);
                    const path = this.$route.query.to || "/";
                    this.$router.push({ path });
                })
                .catch(err => {
                    this.$message.error(err.message);
                });
        }
    }
};
</script>

<style src="./index.less" lang="less" />
