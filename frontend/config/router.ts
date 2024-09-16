const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  {
    name: 'Login',
    path: '/login',
    component: './Login',
    layout: false,
  },
  {
    name: 'AI',
    path: '/ai',
    component: './AI',
    routes: [
      {
        name: 'chat',
        icon: 'TeamOutlined',
        path: '/ai/chat',
        component: './AI/Chat',
      },
      {
        name: ' flow',
        icon: 'FileProtectOutlined',
        path: '/ai/flow',
        component: './AI/Flow',
      },
    ],
  },
];

export default routes;
