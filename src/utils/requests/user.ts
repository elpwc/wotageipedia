import { loginApiUserLoginPost } from '../../services/wotageipedia/user';
import md5 from 'md5';
export const userLogin = async (user: string, password: string, onDone: () => void, useEmail: boolean = false) => {
  const res = await loginApiUserLoginPost({ username: user, password: md5(password) });

  console.log(res);
};
