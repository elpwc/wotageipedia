// @ts-ignore
/* eslint-disable */
import request from '../../utils/request';

/** User Search {searchtype: "id", "username", "nickname"} (400: errcode:[1:参数异常]) (403: errcode:[1:token验证失败],[2:限权等级不够],[3:无限权]) GET /api/search/user */
export async function userSearchApiSearchUserGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userSearchApiSearchUserGetParams & {
    // header
    'jwt-token'?: string;
    'u-id'?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserSearch200>('/api/search/user', {
    method: 'GET',
    headers: {},
    params: {
      // searchcount has a default value: 1
      searchcount: '1',
      // searchlimit has a default value: 20
      searchlimit: '20',
      ...params,
    },
    ...(options || {}),
  });
}
