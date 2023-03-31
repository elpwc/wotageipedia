import Well from './well.class';
import FloatIFrameSendRcv from './floatIframeSendRcv';
import FloatWinLoader from 'renderer/winDivs/mapPages/floatWinLoader';
import * as APPCONFIG from '../appconfig';
import ICON from '../../../assets/wellIcons/icon.png';

let map: BMapGL.Map;
// @ts-ignore
let point: number[] = [116.40769, 39.89945];
// @ts-ignore
let zoom: number = 12;

let init: boolean = false;

interface PackedMarker {
  marker: BMapGL.Marker;
  wellid: string;
}

export class BaiduMapUtils {
  static AddMouseMoveEventListener(callback: (e: any) => void) {
    map.addEventListener('mousemove', callback);
  }
  static AddDragStartEventListener(callback: (e: any) => void) {
    map.addEventListener('dragstart', callback);
  }
  static AddDragEndEventListener(callback: (e: any) => void) {
    map.addEventListener('dragend', callback);
  }

  static currentZoom(): number {
    if (init) {
      return map.getZoom();
    } else {
      return 0;
    }
  }

  static currentLnglat(): [number, number] {
    if (init) {
      return [map.getCenter().lng, map.getCenter().lat];
    } else {
      return [0, 0];
    }
  }

  static init(
    divID: string,
    // @ts-ignore
    defaultCenterPoint?: number[],
    // @ts-ignore
    defaultZoom?: number
  ) {
    let mapType = BMAP_EARTH_MAP;
    switch (APPCONFIG.default.mapConfig.baidumap.defaultMapType) {
      case 'normal':
        mapType = BMAPGL_NORMAL_MAP;
        break;
      case 'satellite':
        mapType = BMAP_EARTH_MAP;
        break;
      default:
        break;
    }
    //初始化地图对象
    map = new BMapGL.Map(divID, {
      minZoom: 4,
      maxZoom: 22,
      mapType: mapType,
    });
    console.log('Map init');
    //中心点和缩放级别
    map.centerAndZoom(
      new BMapGL.Point(
        (defaultCenterPoint === undefined || defaultCenterPoint[0] == null
          ? point[0]
          : defaultCenterPoint[0]) as number,
        (defaultCenterPoint === undefined || defaultCenterPoint[1] == null
          ? point[1]
          : defaultCenterPoint[1]) as number
      ),
      (defaultZoom === undefined || defaultZoom == null
        ? zoom
        : defaultZoom) as number
    ); // 初始化地图,设置中心点坐标和地图级别
    // @ts-ignore
    //console.log('Set center and zoom', map.isLoaded());

    init = true;

    //允许鼠标滚动
    map.enableScrollWheelZoom();
    map.enableInertialDragging();
    map.enableKeyboard();
    console.log('Map settings');

    const scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
    map.addControl(scaleCtrl);
    const zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
    map.addControl(zoomCtrl);
    map.addControl(new BMapGL.MapTypeControl()); // 类型切换控件
    //console.log('Map controls', map.getOverlays());
  }

  static markers: PackedMarker[] = [];
  // @ts-ignore
  static updateWells(wells: Well[], onFloatWinShown: (well: Well) => void) {
    const iconWidth = 30;
    wells.forEach((well: Well) => {
      let marker = new BMapGL.Marker(new BMapGL.Point(well.lng, well.lat), {
        icon: new BMapGL.Icon(ICON, new BMapGL.Size(iconWidth, iconWidth), {
          anchor: new BMapGL.Size(iconWidth / 2, iconWidth),
        }),
        title: well.name,
      });
      marker.addEventListener('click', () => {
        onFloatWinShown(well);
        FloatIFrameSendRcv.setIframeDOM();

        let infoWin: BMapGL.InfoWindow = new BMapGL.InfoWindow('', {
          width: APPCONFIG.default.mapConfig.floatWinSize.width,
          height: APPCONFIG.default.mapConfig.floatWinSize.height,
          title: well.name,
        });

        infoWin.setContent(FloatWinLoader.getContent(well));

        map.openInfoWindow(infoWin, new BMapGL.Point(well.lng, well.lat));
      });
      map.addOverlay(marker);
      this.markers.push({ marker: marker, wellid: well.id });
    });
  }

  // @ts-ignore
  static selectWellMarker(id: string) {
    let marker: PackedMarker = this.markers.filter((marker: PackedMarker) => {
      return marker.wellid === id;
    })[0];

    console.log(map.getOverlays());
    map.removeOverlay(marker.marker);
    console.log(map.getOverlays());
    let newicon = marker.marker.getIcon();
    newicon.setSize(new BMapGL.Size(100, 100));
    marker.marker.setIcon(newicon);

    map.addOverlay(marker.marker);
  }

  // @ts-ignore
  static clearWells() {
    if (map !== null) {
      map.clearOverlays();
    }
  }

  // @ts-ignore
  static dispose() {
    if (map !== null) {
      map.clearOverlays();
      //map.destroy();
    }
  }
}
