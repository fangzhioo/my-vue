import axios from "axios";
export const baseURL = "http://localhost:7001";

// 配置axios
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

// 添加请求拦截器
axios.interceptors.request.use(
    function(config) {
        // 在发送请求之前做些什么
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么
        if (response.status < 300 && response.status >= 200) {
            if (response.data) {
                // 业务报错
                if (response.data.code !== 10000) {
                    throw new Error(
                        response.data.msg || `业务错误 - ${response.data.code}`
                    );
                }
                return response.data;
            }
        }
        throw new Error("服务器请求异常！");
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default axios;
