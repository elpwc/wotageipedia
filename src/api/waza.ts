import request from '../utils/request';
import api from './api';

export const getWaza = (wazaid: string, lang: string = 'ja') => {
  return request({
    url: api.waza.getwaza.replace('{wazaid}', wazaid),
    method: 'get',
    params: { lang },
  });
};
