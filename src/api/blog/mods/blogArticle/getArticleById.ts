import fetch from '@/utils/fetch';

/**
 * @desc 获取文章详情
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/api/article/getArticleById',
      method: 'get',
      params: params,
    },
    options,
  );
  return fetch(fetchOption);
}
