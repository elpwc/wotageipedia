declare namespace API {
  interface LoginResult {
    token: string;
    nickname: string;
    username: string;
    user_id: string;
  }

  // (404: errcode:[1:账号不存在]) (403: errcode:[1:用户或密码错误])
  interface RequestError {
    errcode: number;
    username: string;
    message: string;
  }

  interface RegisterResult {
    message: string;
    uid: string;
  }
}
