// @ts-ignore
/* eslint-disable */
import request from '../../utils/request';

/** Login (404: errcode:[1:账号不存在]) (403: errcode:[1:用户或密码错误]) POST /api/user/login */
export async function loginApiUserLoginPost(body: API.UserLogin, options?: { [key: string]: any }) {
  return request<API.UserLogin200>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Create User (400: errcode:[1:参数错误]) (200: errcode:[1:用户已存在],[2:未知异常]) POST /api/user */
export async function createUserApiUserPost(
  body: API.CreateUserBase,
  options?: { [key: string]: any },
) {
  return request<API.CreateUser200>('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** User Info Base (404: errcode:[1:账号不存在])) GET /api/user/${param0}/base */
export async function userInfoBaseApiUser_userid_baseGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userInfoBaseApiUser_userid_baseGetParams,
  options?: { [key: string]: any },
) {
  const { userid: param0, ...queryParams } = params;
  return request<API.UserBaseInfo200>(`/api/user/${param0}/base`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** User Info Detail (404: errcode:[1:用户不存在]) (403: errcode:[1:token验证失败],[2:限权等级不够],[3:无限权]) GET /api/user/${param0}/extra */
export async function userInfoDetailApiUser_userid_extraGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userInfoDetailApiUser_userid_extraGetParams & {
    // header
    'jwt-token'?: string;
    'u-id'?: string;
  },
  options?: { [key: string]: any },
) {
  const { userid: param0, ...queryParams } = params;
  return request<API.UserExtraInfo200>(`/api/user/${param0}/extra`, {
    method: 'GET',
    headers: {},
    params: { ...queryParams },
    ...(options || {}),
  });
}
