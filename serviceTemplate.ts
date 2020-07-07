import * as Pont from "pont-engine";
import { CodeGenerator, Interface } from "pont-engine";

export class FileStructures extends Pont.FileStructures {}

export default class MyGenerator extends CodeGenerator {
    /** 获取接口实现内容的代码 */
    getInterfaceContent(inter: Interface) {
        const bodyParams = inter.getBodyParamsCode();
        const paramsCode = inter.getParamsCode();
        const isEmptyParams =
            paramsCode.replace(/(\n|\s)/g, "") === "classParams{}";

        const requestArgs: string[] = [];
        !isEmptyParams && requestArgs.push(`params`);
        bodyParams && requestArgs.push(`bodyParams`);
        requestArgs.push("options");
        const requestParams = requestArgs.join(", ");

        return `
    import fetch from '@/utils/fetch';
    
    /**
     * @desc ${inter.description}
     */
    export function request(${requestParams}) {
      const fetchOption = Object.assign({
        url: '${inter.path}',
        method: '${inter.method}',
        ${isEmptyParams ? "" : "" + "params: params,"}
        ${bodyParams ? "data: bodyParams" : ""}
      },
      options)
      return fetch(fetchOption);
    }
   `;
    }
}
