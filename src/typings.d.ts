import { apitype } from "./api";

declare module "vue/types/vue" {
  interface Vue {
    $api: apitype;
  }
}
