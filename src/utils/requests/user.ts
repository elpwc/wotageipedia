import { loginApiUserLoginPost } from "../../services/wotageipedia/yonghu";


export const userLogin = async (username: string, password: string) => {
  const res = await loginApiUserLoginPost ({username, password });

  console.log(res);
};
