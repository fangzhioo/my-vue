import fetch from '@/utils/fetch';

/**
 * @desc publishArticle
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/api/article/publishArticle',
      method: 'post',

      data: bodyParams,
    },
    options,
  );
  return fetch(fetchOption);
}
