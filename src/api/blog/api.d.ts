type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace blog {
    export class AliyunOssAntdPolicyBo {
      /** accessId */
      accessId?: string;

      /** dir */
      dir?: string;

      /** expire */
      expire?: number;

      /** host */
      host?: string;

      /** policy */
      policy?: string;

      /** signature */
      signature?: string;
    }

    export class BlogArticleDTO {
      /** cid */
      cid?: number;

      /** content */
      content?: string;

      /** cover */
      cover?: string;

      /** editor */
      editor?: string;

      /** editorContent */
      editorContent?: string;

      /** editorTheme */
      editorTheme?: string;

      /** id */
      id?: number;

      /** subtitle */
      subtitle?: string;

      /** title */
      title?: string;
    }

    export class BlogArticleVO {
      /** articleId */
      articleId?: number;

      /** authorAvatar */
      authorAvatar?: string;

      /** authorId */
      authorId?: number;

      /** authorNickname */
      authorNickname?: string;

      /** cid */
      cid?: number;

      /** content */
      content?: string;

      /** cover */
      cover?: string;

      /** editor */
      editor?: string;

      /** editorTheme */
      editorTheme?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** status */
      status?: number;

      /** subtitle */
      subtitle?: string;

      /** title */
      title?: string;

      /** userLike */
      userLike?: number;
    }

    export class CommonResult<T0 = any> {
      /** code */
      code?: number;

      /** data */
      data?: T0;

      /** msg */
      msg?: string;
    }

    export class UserLoginDTO {
      /** password */
      password?: string;

      /** remember */
      remember?: boolean;

      /** username */
      username?: string;
    }
  }
}

declare namespace API {
  export namespace blog {
    /**
     * Aliyun Oss Controller
     */
    export namespace aliyunOss {
      /**
       * antdPolicy
       * /api/aliyun/antdPolicy
       */
      export namespace antdPolicy {
        export class Params {}

        export type Response = defs.blog.CommonResult<
          defs.blog.AliyunOssAntdPolicyBo
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.blog.CommonResult<defs.blog.AliyunOssAntdPolicyBo>>;
      }
    }

    /**
     * Blog Article Controller
     */
    export namespace blogArticle {
      /**
       * countArticleByQuery
       * /api/article/countArticleByQuery
       */
      export namespace countArticleByQuery {
        export class Params {
          /** current */
          current;
          /** limit */
          limit;
          /** offset */
          offset;
          /** pageSize */
          pageSize;
        }

        export type Response = defs.blog.CommonResult<number>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.blog.CommonResult<number>>;
      }

      /**
       * 获取文章详情
       * /api/article/getArticleById
       */
      export namespace getArticleById {
        export class Params {
          /** articleId */
          articleId;
        }

        export type Response = defs.blog.CommonResult<defs.blog.BlogArticleVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.blog.CommonResult<defs.blog.BlogArticleVO>>;
      }

      /**
       * 获取文章列表
       * /api/article/listArticleByQuery
       */
      export namespace listArticleByQuery {
        export class Params {
          /** current */
          current;
          /** limit */
          limit;
          /** offset */
          offset;
          /** pageSize */
          pageSize;
        }

        export type Response = defs.blog.CommonResult<
          Array<defs.blog.BlogArticleVO>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.blog.CommonResult<Array<defs.blog.BlogArticleVO>>>;
      }

      /**
       * publishArticle
       * /api/article/publishArticle
       */
      export namespace publishArticle {
        export class Params {}

        export type Response = defs.blog.CommonResult<number>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.blog.BlogArticleDTO,
        ): Promise<defs.blog.CommonResult<number>>;
      }
    }

    /**
     * User Controller
     */
    export namespace user {
      /**
       * currentUser
       * /api/currentUser
       */
      export namespace currentUser {
        export class Params {}

        export type Response = defs.blog.CommonResult;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.blog.CommonResult>;
      }

      /**
       * doLogin
       * /api/login
       */
      export namespace doLogin {
        export class Params {}

        export type Response = defs.blog.CommonResult;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.blog.UserLoginDTO,
        ): Promise<defs.blog.CommonResult>;
      }
    }
  }
}
