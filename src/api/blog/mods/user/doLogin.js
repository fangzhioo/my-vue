import fetch from '@/utils/fetch';

/**
 * @desc doLogin
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/api/login',
      method: 'post',

      data: bodyParams,
    },
    options,
  );
  return fetch(fetchOption);
}
