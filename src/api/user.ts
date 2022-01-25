import request from '../utils/request';
import api from './api';

export const register = (username: string, email: string, password: string, nickname: string, gender: number, state: string, birth: string) => {
  return request({
    url: api.user.register,
    method: 'POST',
    data: {
      username,
      email,
      password,
      nickname,
      gender,
      state,
      birth,
    },
  });
};

export const login = (username: string, password: string) => {
  return request({
    url: api.user.login,
    method: 'POST',
    data: {
      username,
      password,
      identifying: '',
    },
  });
};
