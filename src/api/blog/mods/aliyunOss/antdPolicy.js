import fetch from '@/utils/fetch';

/**
 * @desc antdPolicy
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/api/aliyun/antdPolicy',
      method: 'get',
    },
    options,
  );
  return fetch(fetchOption);
}
