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
    '/v1': {
      'target': 'http://localhost:3000/',
      'changeOrigin': true,
      'pathRewrite': { '^/v1' : '' },
    },
    "spark": {
      'target': 'https://spark-api-open.xf-yun.com/v1',
      // 'changeOrigin': true,
      'pathRewrite': { '^/spark': '' },
    },
  },
  // https: {
  //   cert:'./httpCert/server.crt',
  //   key:'./httpCert/server.key'
  // },

});

