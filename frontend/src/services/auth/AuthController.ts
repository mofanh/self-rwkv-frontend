import { request } from '@umijs/max';

export async function login(
  params: {
    // login function
    /** current */
    email: string;
    password: string;
  },
  options?: { [key: string]: any },
) {
  return request('http://localhost:3000/api/auth/login', {
    method: 'POST',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function register(
  params: {
    // register function demo
    /** current */
    email: string;
    password: string;
  },
  options?: { [key: string]: any },
) {
  return request('http://localhost:3000/api/auth/login', {
    method: 'POST',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}