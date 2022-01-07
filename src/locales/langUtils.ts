import ZhCn from './zh_cn';
import Ja from './ja';
import ZhTw from './zh_tw';
import En from './en';
import Ko from './ko';
import { LangStorage } from '../dataStorage/storage';

export enum Lang {
  ja,
  zhcn,
  zhtw,
  ko,
  en,
  vi,
  id,
  ms,
}

export default class LangUtils {
  static selectLang(currentLang?: Lang | undefined): typeof ZhCn {
    if (currentLang === undefined) {
      currentLang = LangStorage.value;
    }
    switch (currentLang) {
      case Lang.zhcn:
        return ZhCn;
      case Lang.ja:
        return Ja;
      case Lang.zhtw:
        return ZhTw;
      case Lang.en:
        return En;
      case Lang.ko:
        return Ko;
      default:
        return ZhCn;
    }
  }

  // enum字符串转换为语言称呼
  static enumStrToLangName(str: string, lang?: Lang | undefined): string {
    const L = this.selectLang(lang);
    switch (this.enumStrToLang(str)) {
      case Lang.zhcn:
        return L.utils.langs.zh_cn;
      case Lang.zhtw:
        return L.utils.langs.zh_tw;
      case Lang.ja:
        return L.utils.langs.ja;
      case Lang.ko:
        return L.utils.langs.ko;
      case Lang.en:
        return L.utils.langs.en;
      case Lang.vi:
        return L.utils.langs.vi;
      case Lang.id:
        return L.utils.langs.id;
      case Lang.ms:
        return L.utils.langs.ms;

      default:
        return L.utils.langs.zh_cn;
    }
  }

  static enumStrToLang(str: string): Lang {
    switch (str) {
      case 'zhcn':
        return Lang.zhcn;
      case 'zhtw':
        return Lang.zhtw;
      case 'ja':
        return Lang.ja;
      case 'ko':
        return Lang.ko;
      case 'en':
        return Lang.en;
      case 'vi':
        return Lang.vi;
      case 'id':
        return Lang.id;
      case 'ms':
        return Lang.ms;
      default:
        return Lang.zhcn;
    }
  }

  static LangToEnumStr(lang: Lang): string {
    switch (lang) {
      case Lang.zhcn:
        return 'zhcn';
      case Lang.zhtw:
        return 'zhtw';
      case Lang.ja:
        return 'ja';
      case Lang.ko:
        return 'ko';
      case Lang.en:
        return 'en';
      case Lang.vi:
        return 'vi';
      case Lang.id:
        return 'id';
      case Lang.ms:
        return 'ms';
      default:
        return 'zhcn';
    }
  }

  // 获取包含所有enum值的字符串数组
  static getEnumStrings(): string[] {
    return Object.keys(Lang).filter((k) => typeof Lang[k as any] === 'number');
  }
}
