// 运行时配置
import { RunTimeLayoutConfig, RequestConfig, RuntimeAntdConfig } from '@umijs/max';
import { MenuProps, message, theme, Dropdown } from 'antd';
import { BulbOutlined, LogoutOutlined } from '@ant-design/icons';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string, avatar?: string }> {
  return { 
    name: 'lbj',
    avatar:'https://p26-passport.byteacctimg.com/img/user-avatar/312989b46037c16843b1eb44aea82fa2~180x180.awebp?', };
}

export const layout: RunTimeLayoutConfig = ({initialState}) => {
  //initialState上面登录函数返回的信息
  const DropdownItems: MenuProps['items'] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
    {
      key: 'theam',
      icon: <BulbOutlined />,
      label: '切换主题',
    },
  ];
  const DropdownOnClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  return {
    title: 'self-rwkv',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    layout: 'mix',
    splitMenus: true, // 这里用了mix才会生效
    avatarProps: {
      src: initialState?.avatar || undefined, //右上角头像
      title: initialState?.name || '用户', //右上角名称
      size: 'small',
      render: (props, defaultDom) => {
        return (
          <Dropdown
            menu={{
              items: DropdownItems,
              onClick: DropdownOnClick,
            }}
          >
            {defaultDom}
          </Dropdown>
        );
      },
    },
    // 自定义 403 页面
    unAccessible: <div>'403 unAccessible'</div>,
    // 自定义 404 页面
    noFound: <div>'404 noFound'</div>,
  };
};

export const antd: RuntimeAntdConfig = (memo) => {
  memo.theme ??= {
    token: {
      // Seed Token，影响范围大
      colorPrimary: '#00b96b',
      borderRadius: 4,

      // 派生变量，影响范围小
      // colorBgContainer: '#f6ffed',
    },
  };
  memo.theme.algorithm = theme.darkAlgorithm; // 配置 antd5 的预设 dark 算法

  memo.appConfig = {
    message: {
      // 配置 message 最大显示数，超过限制时，最早的消息会被自动关闭
      maxCount: 3,
    }
  }

  return memo;
};

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {
    errorHandler(error: any){
      const { response } = error;
      if (response && response.status === 500) {
        message.error('请求错误：服务器故障，请稍后再试');
      }
    },
    errorThrower(){

    }
  },
  requestInterceptors:[
    (config: any) => {
      let token = localStorage.getItem('token') || '';
      if (token.startsWith('"')) {
        token = JSON.parse(token);
      }
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },
    (error: any) => {
      return error;
    },
  ],
  responseInterceptors: [
    (response: any) => {
      const { data, message } = response;
      if (!data.success) {
        message.error(message);
      }
      return response;
    },
  ],

}
