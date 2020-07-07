<template>
    <a-card :title="data.title">
        <a slot="extra" href="#">more</a>
        <div>
            {{ data.content }}
        </div>
        <div>
            {{ data.authorNickname }}
        </div>
    </a-card>
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
