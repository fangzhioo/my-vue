<template>
    <div class="search-list-wapper">
        <a-spin :spinning="loading" tip="Loading...">
            <div class="infinite-list-wrapper">
                <ul class="list-content">
                    <li
                        v-for="item in list"
                        :key="item.articleId"
                        class="list-item"
                    >
                        <article-card :data="item"></article-card>
                    </li>
                </ul>
                <p v-if="noMore">没有更多了</p>
            </div>
        </a-spin>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ArticleCard from "@/components/ArticleCard";
export default {
    components: { ArticleCard },
    data() {
        return {
            loading: false,
            current: 1
        };
    },
    computed: {
        ...mapGetters("SearchList", ["list", "count"]),
        disabled() {
            return this.loading || this.noMore;
        },
        noMore() {
            return (this.list || []).length >= this.count;
        }
    },
    methods: {
        ...mapActions("SearchList", ["getArticlesList", "getArticlesCount"])
    },

    async mounted() {
        this.loading = true;
        await this.getArticlesList({});
        await this.getArticlesCount({});
        this.loading = false;
    }
};
</script>

<style src="./index.less" lang="less" />
