<template>
    <div class="blank-layout">
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BlankLayout extends Vue {}
</script>

<style src="./index.scss" lang="scss" />
