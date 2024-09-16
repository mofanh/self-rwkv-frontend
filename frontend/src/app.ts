// 运行时配置
import { RunTimeLayoutConfig, RequestConfig } from '@umijs/max';
import { message } from 'antd';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string, avatar?: string }> {
  return { 
    name: 'lbj',
    avatar:'https://p26-passport.byteacctimg.com/img/user-avatar/312989b46037c16843b1eb44aea82fa2~180x180.awebp?', };
}

export const layout: RunTimeLayoutConfig = ({initialState}) => {
  return {
    title: 'self-rwkv',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    layout: 'top',
    avatarProps: {
      src: initialState?.avatar || undefined, //右上角头像
      title: initialState?.name || '用户', //右上角名称
      size: 'small',
      },
  };
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
