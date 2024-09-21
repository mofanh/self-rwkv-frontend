import { request } from '@umijs/max';
import { Navigate, Outlet } from 'umi';

export default () => {
  return <Outlet />;
//   const data = await request('/api/v1/user/');
//   console.log('data--', data);

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  if (userInfo.role === 'admin') {
    // 有权限正常展示页面
    console.log('有权限');
    return <Outlet />;
  } else {
    // 无权限重定向到登陆页面
    // message.error('无权限')
    return <Navigate to="/login" />;
  }
};
