import { Lang } from './locales/langUtils';

const inDebug = true;

export default {
  inDebug: inDebug,
  /** 启用的语言 */
  usingLanguages: [Lang.ja, Lang.zhcn],
  /** 服务器根目录 */
  root: '', //'/wotagei/'
  /** API Base URL */
  apiBaseURL: inDebug ? 'http://wotagei.elpwc.com/' : '/',
};
