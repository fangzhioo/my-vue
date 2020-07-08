declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

interface CommonResult<T> {
  /** code */
  code: number;

  /** data */
  data: T;

  /** msg */
  msg: string;
}
