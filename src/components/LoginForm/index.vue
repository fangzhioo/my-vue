<template>
  <div class="login-form">
    <h1 class="title">登录</h1>
    <el-form ref="form" size="large">
      <el-form-item>
        <el-input
          v-model="form.account"
          class="account"
          placeholder="用户名/手机号/邮箱"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          class="password"
          placeholder="密码"
          show-password
        />
      </el-form-item>

      <el-button class="signin" type="primary" @click="onSubmit">
        登录
      </el-button>
    </el-form>

    <div class="help">
      <el-link type="primary" :underline="false">
        忘记密码？
      </el-link>
      <el-link type="primary" :underline="false" :style="{ float: 'right' }">
        免费注册
      </el-link>
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
