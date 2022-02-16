import { login } from '../../api/user';

export const userLogin = async (username: string, password: string) => {
  const res = await login(username, password);

  console.log(res);
};
