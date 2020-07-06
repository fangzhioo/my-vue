<template>
    <div class="basic-footer">
        <div class="line" />
        <div class="copyright">
            © Copyright 2016-{{ year }} StartDT.com 版权所有
        </div>
    </div>
</template>

<script>
export default {
    name: 'BasicFooter',

    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
};
</script>

<style src="./index.less" lang="less" />
