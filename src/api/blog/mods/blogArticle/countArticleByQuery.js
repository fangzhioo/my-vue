import fetch from '@/utils/fetch';

/**
 * @desc countArticleByQuery
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/api/article/countArticleByQuery',
      method: 'get',
      params: params,
    },
    options,
  );
  return fetch(fetchOption);
}
