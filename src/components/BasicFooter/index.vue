<template>
    <div class="basic-footer">
        <div class="line" />
        <div class="copyright">
            © Copyright 2016-{{ year }} StartDT.com 版权所有
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class BasicFooter extends Vue {
    year = new Date().getFullYear();
}
</script>

<style src="./index.scss" lang="scss" />
