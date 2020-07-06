<template>
    <div class="header-search">
        <el-input
            v-model="search"
            placeholder="请输入搜索内容"
            suffix-icon="el-icon-search"
        />
    </div>
</template>

<script>
export default {
    name: "HeaderSearch",
    data() {
        return {
            search: "vue"
        };
    },
    props: {}
};
</script>

<style src="./index.less" lang="less" />
