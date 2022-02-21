import { Lang } from './locales/langUtils';

const inDebug = true;

export default {
  /** is in development? */
  inDebug: inDebug,
  /** available languages */
  usingLanguages: [Lang.ja, Lang.zhcn],
  /** server root folder */
  root: '', //'/wotagei/'
  /** API Base URL */
  apiBaseURL: inDebug ? 'http://wotagei.elpwc.com/' : '/',
};
