<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>{{ data.title }}</span>
        </div>
        <div class="text item">
            <div>
                {{ data.content }}
            </div>
            <div>
                {{ data.authorNickname }}
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: new window.defs.blog.BlogArticleVO()
        }
    }
};
</script>

<style></style>
