<template>
    <div class="login-form">
        <h1 class="title">登录</h1>
        <a-form ref="form" size="large">
            <a-form-item>
                <a-input
                    v-model="form.account"
                    class="account"
                    placeholder="用户名/手机号/邮箱"
                />
            </a-form-item>
            <a-form-item>
                <a-input
                    v-model="form.password"
                    class="password"
                    placeholder="密码"
                    show-password
                />
            </a-form-item>

            <a-button class="signin" type="primary" @click="onSubmit">
                登录
            </a-button>
        </a-form>

        <div class="help">
            <a type="primary" :underline="false">
                忘记密码？
            </a>
            <a type="primary" :underline="false" :style="{ float: 'right' }">
                免费注册
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginForm",

    data() {
        return {
            year: new Date().getFullYear(),
            form: {
                account: "",
                password: ""
            }
        };
    },

    methods: {
        onSubmit() {
            this.$emit("login", this.form);
        }
    }
};
</script>

<style src="./index.less" lang="less" />
