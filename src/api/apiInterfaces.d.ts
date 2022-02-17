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

  interface WazaBaseResult {
    id: string;
    lang: string;
    name: {
      lang: string;
      waza_name: string;
      alter_name: string;
      ruby: string;
      redirect: boolean;
    };
    kei: {
      lang: string;
      kei_id: string;
      kei_name: string;
      redirect: boolean;
    }[];
    honke: {
      honke_id: string;
      honke_name: string;
    };
    kaiwai: {
      kaiwai_id: string;
      kaiwai_name: string;
    };
    tags: [];
    related: [];
    establish_time: string;
    view_count: number;
    waza_type: number;
    difficulty: number;
  }
}
