import { loginApiUserLoginPost } from '../../services/wotageipedia/user';
import md5 from 'md5';
import { TokenStorage } from '../../dataStorage/storage';
import cookie from 'react-cookies';

/**
 * 用户登录
 * @param user 用户名或邮箱
 * @param password 密码或加密後的密码
 * @param onDone 完成的回调
 * @param onError 失败的回调
 * @param savePassword 是否保存密码
 * @param useMD5 是否是MD5密码
 * @param useEmail 是否是邮箱
 */
export const userLogin = async (user: string, password: string, onDone: (loginResponse: API.UserLogin200) => void, onError: () => void, savePassword: boolean = false, useEmail: boolean = false) => {
  const res = await loginApiUserLoginPost({ username: user, password: md5(password) });
  if (res.token) {
    // token存入storage
    TokenStorage.set(res.token);
    // 用户名密码存入cookie
    cookie.save('username', res.username ?? '', {});
    if (savePassword) {
      cookie.save('password', password, {});
    } else {
      cookie.save('password', '', {});
    }
    onDone(res);
  } else {
    //错误
    onError();
  }

  console.log(res);
};
