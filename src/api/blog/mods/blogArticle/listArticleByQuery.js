import fetch from '@/utils/fetch';

/**
 * @desc 获取文章列表
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/api/article/listArticleByQuery',
      method: 'get',
      params: params,
    },
    options,
  );
  return fetch(fetchOption);
}
