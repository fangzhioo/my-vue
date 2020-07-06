<template>
    <div class="user-login">
        <login-form @login="onLogin" />
    </div>
</template>


<script>
import LoginForm from '@/components/LoginForm';

export default {
    name: 'Login',

    components: {
        LoginForm,
    },

    methods: {
        onLogin(form) {
            console.log(form.account, form.password);
            const path = this.$route.query.to || '/';
            this.$router.push({ path });
        },
    },
};
</script>

<style src='./index.less' lang='less' />
