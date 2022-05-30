// @ts-ignore
/* eslint-disable */
import request from '../../utils/request';

/** Sys Exit return 寄 DELETE /api/sys/sys_exit */
export async function sysExitApiSysSysExitDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sysExitApiSysSysExitDeleteParams & {
    // header
    'jwt-token'?: string;
    'u-id'?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/sys/sys_exit', {
    method: 'DELETE',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** Sys Ping PING PONG Health Check PUT /api/sys/sys_ping */
export async function sysPingApiSysSysPingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sysPingApiSysSysPingPutParams & {
    // header
    'jwt-token'?: string;
    'u-id'?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/sys/sys_ping', {
    method: 'PUT',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
