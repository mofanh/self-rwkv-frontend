/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** 星火大模型API POST https://spark-api-open.xf-yun.com/v1/chat/completions */
export async function xfSparkRequest(
  params?: chatAPI.xfSparkRequestInfo,
  options?: { [key: string]: any },
) {
  return request<chatAPI.xfSparkRequestInfo>('/spark/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer nPLgqzEHEtEjZcnsDKdS:mZIvrDDeVfZRpYejdKau'
    },
    data: params,
    ...(options || {}),
  });
}
