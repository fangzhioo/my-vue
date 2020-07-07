<template>
    <div class="search-list-wapper">
        <div class="infinite-list-wrapper">
            <ul
                class="list-content"
                v-infinite-scroll="load"
                :infinite-scroll-disabled="disabled"
                v-loading="loading"
            >
                <li
                    v-for="item in list"
                    :key="item.articleId"
                    class="list-item"
                >
                    <article-card :data="item"></article-card>
                </li>
            </ul>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { isEmpty } from "lodash";
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
        ...mapActions("SearchList", ["getArticlesList", "getArticlesCount"]),
        async load() {
            // loading
            this.loading = true;
            await this.getArticlesList({ current: this.current }).then(res => {
                if (!isEmpty(res.data)) {
                    this.current++;
                }
            });
            this.loading = false;
        }
    },

    mounted() {
        this.getArticlesCount({});
    }
};
</script>

<style src="./index.less" lang="less" />
