/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/queryUserList */
export async function queryUserList(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>('/api/v1/queryUserList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 星火大模型API POST https://spark-api-open.xf-yun.com/v1/chat/completions */
export async function xfSparkRequest(
  params?: chatAPI.xfSparkRequestInfo,
  options?: { [key: string]: any },
) {
  return request<chatAPI.xfSparkRequestInfo>('https://spark-api-open.xf-yun.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer nPLgqzEHEtEjZcnsDKdS:mZIvrDDeVfZRpYejdKau'
    },
    data: params,
    ...(options || {}),
  });
}
