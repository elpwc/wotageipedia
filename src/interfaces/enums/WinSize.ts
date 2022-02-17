enum WinSize {
  lg = 3, // Desktop, iPad(Horiz)           1000~
  md = 2, // Phone(Horiz)                   780~999
  sm = 1, // iPad(Verti), Surface(Horiz)    660~779
  xs = 0, // Phone, Surface(Verti)          0~659
  default = -1,
}

export default WinSize;

export class WinSizeUtils {
  public static getWinSize = (width: number) => {
    if (width < 670) {
      return WinSize.xs;
    } else if (width < 780) {
      return WinSize.sm;
    } else if (width < 1000) {
      return WinSize.md;
    } else {
      return WinSize.lg;
    }
  };
}
