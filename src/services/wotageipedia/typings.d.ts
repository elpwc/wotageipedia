declare namespace API {
  type AuthErrorToken403 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
    /** Errcode */
    errcode?: string;
  };

  type CreateUser200 = {
    /** Errcode */
    errcode?: number;
    /** Error */
    error?: string;
    /** Message */
    message?: string;
  };

  type CreateUser201 = {
    /** Message */
    message?: string;
    /** Uid */
    uid?: string;
  };

  type CreateUser400 = {
    /** Errcode */
    errcode?: number;
    /** Error */
    error?: string;
    /** Message */
    message?: string;
  };

  type CreateUserBase = {
    /** Origin */
    origin?: string;
    /** Username */
    username: string;
    /** Email */
    email?: string;
    /** Password */
    password: string;
    /** Nickname */
    nickname: string;
    /** Gender */
    gender: number;
    /** State */
    state?: string;
    /** Birth */
    birth?: string;
  };

  type HTTPValidationError = {
    /** Detail */
    detail?: ValidationError[];
  };

  type UserBaseInfo200 = {
    /** Id */
    id: string;
    /** Bind Uchishi Id */
    bind_uchishi_id: string;
    /** Nickname */
    nickname: string;
    /** Register Time */
    register_time: string;
    /** Gender */
    gender: number;
    /** Birth */
    birth: string;
    /** Hitokoto */
    hitokoto: string;
  };

  type UserExtraInfo200 = {
    /** Id */
    id: string;
    /** Bind Uchishi Id */
    bind_uchishi_id: string;
    /** Nickname */
    nickname: string;
    /** Username */
    username: string;
    /** Email */
    email: string;
    /** Tel */
    tel: string;
    /** Register Time */
    register_time: string;
    /** Last Login */
    last_login: string;
    /** Gender */
    gender: number;
    /** State */
    state: string;
    /** Position */
    position: string;
    /** Birth */
    birth: string;
    /** Hitokoto */
    hitokoto: string;
  };

  type UserLogin = {
    /** Username */
    username: string;
    /** Password */
    password: string;
    /** Identifying */
    identifying?: string;
  };

  type UserLogin200 = {
    /** Token */
    token?: string;
    /** Nickname */
    nickname?: string;
    /** Username */
    username?: string;
    /** User Id */
    user_id?: string;
  };

  type UserLogin403 = {
    /** Errcode */
    errcode?: number;
    /** Username */
    username?: string;
    /** Message */
    message?: string;
  };

  type UserLogin404 = {
    /** Errcode */
    errcode?: number;
    /** Username */
    username?: string;
    /** Message */
    message?: string;
  };

  type UserSearch200 = {
    /** Userlist */
    UserList?: any[];
  };

  type UserSearch400 = {
    /** Errcode */
    errcode?: number;
    /** Error */
    error?: string;
    /** Message */
    message?: string;
  };

  type ValidationError = {
    /** Location */
    loc: string[];
    /** Message */
    msg: string;
    /** Error Type */
    type: string;
  };

  type WazaContentInfo200 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type WazaContentInfo404 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type WazaIndexInfo200 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type WazaIndexInfo404 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type WazaKeiInfo200 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type WazaKeiInfo404 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type WazaNameInfo200 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type WazaNameInfo404 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type WazaTagsInfo200 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type WazaTagsInfo404 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type WazaUrlsInfo200 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type WazaUrlsInfo404 = {
    /** Respcode */
    respCode?: number;
    /** Showtype */
    showType?: number;
    /** Msgcode */
    msgCode?: string;
    /** Message */
    message?: string;
    /** Respdata */
    respData?: Record<string, any>;
  };

  type views_api_user_userInfoBase_ResponsesMessage_UserInfo404 = {
    /** Errcode */
    errcode?: number;
    /** Userid */
    userid?: string;
    /** Message */
    message?: string;
  };

  type views_api_user_userInfoExtra_ResponsesMessage_UserInfo404 = {
    /** Errcode */
    errcode?: number;
    /** Userid */
    userid?: string;
    /** Message */
    message?: string;
  };

  type sysExitApiSysSysExitDeleteParams = {
    'jwt-token'?: string;
    'u-id'?: string;
  };

  type sysPingApiSysSysPingPutParams = {
    ping: string;
    'jwt-token'?: string;
    'u-id'?: string;
  };

  type wazaIndexInfoApiWaza_wazaId_indexGetParams = {
    waza_id: string;
  };

  type wazaNameInfoApiWaza_wazaId_nameGetParams = {
    waza_id: string;
    lang: string;
  };

  type wazaTagsInfoApiWaza_wazaId_tagsGetParams = {
    waza_id: string;
    lang: string;
  };

  type wazaUrlsInfoApiWaza_wazaId_urlsGetParams = {
    waza_id: string;
  };

  type wazaContentInfoApiWaza_wazaId_contentGetParams = {
    waza_id: string;
    lang: string;
    content?: string;
  };

  type wazaKeiInfoApiWaza_wazaId_keiGetParams = {
    waza_id: string;
  };

  type userSearchApiSearchUserGetParams = {
    searchtype: string;
    searchstr?: string;
    searchcount?: number;
    searchlimit?: number;
    'jwt-token'?: string;
    'u-id'?: string;
  };

  type userInfoBaseApiUser_userid_baseGetParams = {
    userid: string;
  };

  type userInfoDetailApiUser_userid_extraGetParams = {
    userid: string;
    'jwt-token'?: string;
    'u-id'?: string;
  };
}
