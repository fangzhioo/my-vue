<template>
    <div>
        {{ version }}
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, State, Getter } from "vuex-class";
const namespace = "global";

@Component
export default class Analysis extends Vue {
    @Getter("getVersion", { namespace }) private version!: string;
}
</script>
