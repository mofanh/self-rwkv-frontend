import { request } from '@umijs/max';

export async function getMe(
  params?: {},
  options?: { [key: string]: any },
) {
  return request('http://localhost:3000/api/users/me', {
    method: 'GET',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function getUsers(
  params?: {},
  options?: { [key: string]: any },
) {
  return request('http://localhost:3000/api/users/users', {
    method: 'GET',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}
