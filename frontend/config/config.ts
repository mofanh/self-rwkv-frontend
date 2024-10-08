import { defineConfig } from '@umijs/max';
import routes from './router';

export default defineConfig({
  antd: {
    configProvider: {},
    appConfig: {},
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    name: 'Self RWKV',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  },
  routes,
  npmClient: 'npm',
  dva: {},
  proxy: {
    "/api": { // 标识需要进行转换的请求的url
     "target": "http://localhost:3000/", // 服务端域名
     "changeOrigin": true, // 允许域名进行转换
     "pathRewrite": { "^/api": 'api'}  // 将请求url里的ci去掉
    }
  },
});

