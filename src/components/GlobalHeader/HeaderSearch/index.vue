<template>
    <div class="header-search">
        <el-input placeholder="请输入搜索内容" suffix-icon="sa-icon-search" />
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
    name: "HeaderSearch",

    props: {}
});
</script>

<style src="./index.scss" lang="scss" />
