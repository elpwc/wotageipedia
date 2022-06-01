import { LangStorage } from '../dataStorage/storage';
import LangUtils from '../locales/langUtils';

/**
 * 返回当前语言的RootRoute
 * @param suffix 后缀
 * @returns 
 */
export const _rootRoute = (suffix: string = '') => {
  return '/' + LangUtils.LangToEnumStr(LangStorage.value) + suffix;
};
