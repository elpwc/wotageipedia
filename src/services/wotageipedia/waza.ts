// @ts-ignore
/* eslint-disable */
import request from '../../utils/request';

/** Waza Index Info GET /api/waza/${param0}/index */
export async function wazaIndexInfoApiWaza_wazaId_indexGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.wazaIndexInfoApiWaza_wazaId_indexGetParams,
  options?: { [key: string]: any },
) {
  const { waza_id: param0, ...queryParams } = params;
  return request<API.WazaIndexInfo200>(`/api/waza/${param0}/index`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Waza Name Info GET /api/waza/${param0}/name */
export async function wazaNameInfoApiWaza_wazaId_nameGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.wazaNameInfoApiWaza_wazaId_nameGetParams,
  options?: { [key: string]: any },
) {
  const { waza_id: param0, ...queryParams } = params;
  return request<API.WazaNameInfo200>(`/api/waza/${param0}/name`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** Waza Tags Info GET /api/waza/${param0}/tags */
export async function wazaTagsInfoApiWaza_wazaId_tagsGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.wazaTagsInfoApiWaza_wazaId_tagsGetParams,
  options?: { [key: string]: any },
) {
  const { waza_id: param0, ...queryParams } = params;
  return request<API.WazaTagsInfo200>(`/api/waza/${param0}/tags`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** Waza Urls Info GET /api/waza/${param0}/urls */
export async function wazaUrlsInfoApiWaza_wazaId_urlsGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.wazaUrlsInfoApiWaza_wazaId_urlsGetParams,
  options?: { [key: string]: any },
) {
  const { waza_id: param0, ...queryParams } = params;
  return request<API.WazaUrlsInfo200>(`/api/waza/${param0}/urls`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Waza Content Info GET /api/waza/${param0}/content */
export async function wazaContentInfoApiWaza_wazaId_contentGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.wazaContentInfoApiWaza_wazaId_contentGetParams,
  options?: { [key: string]: any },
) {
  const { waza_id: param0, ...queryParams } = params;
  return request<API.WazaContentInfo200>(`/api/waza/${param0}/content`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** Waza Kei Info GET /api/waza/${param0}/kei */
export async function wazaKeiInfoApiWaza_wazaId_keiGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.wazaKeiInfoApiWaza_wazaId_keiGetParams,
  options?: { [key: string]: any },
) {
  const { waza_id: param0, ...queryParams } = params;
  return request<API.WazaKeiInfo200>(`/api/waza/${param0}/kei`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
