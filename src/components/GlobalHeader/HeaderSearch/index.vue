<template>
    <div class="header-search">
        <a-input-search
            v-model="search"
            placeholder="请输入搜索内容"
            @search="handleSearch"
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
    methods: {
        handleSearch(val) {
            console.log(val);
        }
    },
    props: {}
};
</script>

<style src="./index.less" lang="less" />
