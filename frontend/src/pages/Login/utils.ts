import { login } from '@/services/auth/AuthController';

export const loginRequest = async (props: any) => {
  const { username, password } = props;
  const data = await login({ email: username, password: password });
  const { token } = data;
  localStorage.setItem('authToken', token);
  location.href = '/';
};
