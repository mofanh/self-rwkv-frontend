import { layout } from '@/app';
import { defineConfig } from '@umijs/max';
import routes from './router';

export default defineConfig({
  antd: {},
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
});

