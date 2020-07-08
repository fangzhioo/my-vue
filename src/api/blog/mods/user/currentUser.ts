import fetch from '@/utils/fetch';

/**
 * @desc currentUser
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/api/currentUser',
      method: 'get',
    },
    options,
  );
  return fetch(fetchOption);
}
