import Storage from '../utils/storage';
import { Lang } from '../locales/langUtils';
import WinSize, { WinSizeUtils } from '../interfaces/enums/WinSize';

// Current showing language
export const LangStorage: Storage<Lang> = new Storage<Lang>(0);

// Current showing page keyname
export const CurrentPageStorage: Storage<string> = new Storage<string>('home');

// Current user mode.
// To distinguish exploring user identity.
export const AdminModeStorage: Storage<number> = new Storage<number>(0); // 0 not admin, 1 admin mode

// Running device
export const DeviceStorage: Storage<number> = new Storage<number>(0); // 0 pc, 1 mobile

export const WinWidthStorage: Storage<WinSize> = new Storage<WinSize>(WinSize.default);

export const IsFirstEnterStorage: Storage<boolean> = new Storage<boolean>(true);

/** token */
export const TokenStorage: Storage<string> = new Storage<string>('');

export const CurrentUserStorage: Storage<API.UserLogin200> = new Storage<API.UserLogin200>({});
