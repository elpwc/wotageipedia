/* eslint-disable valid-jsdoc */
import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { Row, Col, Button, Select } from 'antd';
import Updater from '../../interfaces/Updater';
import './index.css';
import LangUtils from '../../locales/langUtils';
import { Input, Space } from 'antd';
import L, { LatLngExpression } from 'leaflet';

const { Search } = Input;

interface P {
  updater: Updater;
}

interface Kaiwai {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

let map: L.Map;
let mapLayer: L.Layer;
let markers: L.Marker[];

export default (props: P) => {
  const params = useParams();
  const navigate = useNavigate();
  const mylocation = useLocation();

  // let currentId: number = Number(params.wazaid);

  const [position, setPosition]: [LatLngExpression | null, any] = useState(null);

  const [kaiwais, setkaiwais]: [Kaiwai[], any] = useState([]);

  const [mapType, setmapType] = useState('baidu');

  const refreshKaiwais = async () => {
    // test data
    setkaiwais([
      { name: '吸嗨势', lat: 50, lng: 100, id: 0 },
      { name: 'test', lat: 20, lng: 20, id: 1 },
    ]);
  };

  /**
   * 根据服务器返回的Kaiwai获取L.Marker
   * @param marker
   */
  const getMarker = (kaiwai: Kaiwai) => {
    const getPopupContent = (kaiwai: Kaiwai) => {
      return `
      <div>
      <b>${kaiwai.name}</b>
      <p>content?</p>
      </div>
      `;
    };

    return L.marker(L.latLng(kaiwai.lat, kaiwai.lng), {
      icon: L.divIcon(),
    })
      .on('click', e => {
        //markerInfoVisibility = true;
        //e.popup();
      })
      .bindPopup(getPopupContent(kaiwai))
      .openPopup();
  };

  useEffect(() => {
    // document.title = '';
    CurrentPageStorage.set('map');
    props.updater.setUpdate();

    map = L.map('map', { attributionControl: false, zoomControl: false, maxBounds: L.latLngBounds(L.latLng(-200, -200), L.latLng(200, 100)) }).setView([51.505, -0.09], 13);

    mapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 2,
      tileSize: 200,
      zoomOffset: 0,
    });

    mapLayer.addTo(map);

    // 注册map event
    map.on('locationfound', e => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });

    refreshKaiwais();
  }, []);

  useEffect(() => {
    markers = [];
    kaiwais.forEach(kaiwai => {
      markers.push(getMarker(kaiwai));
    });

    markers.forEach(marker => {
      marker.addTo(map);
    });
  }, [kaiwais]);

  const La = LangUtils.selectLang();

  const onSearch = () => {};

  const onLocate = () => {
    console.log(map);
    map?.locate();
  };

  return (
    <>
      <Row>
        <Col
          span={DeviceStorage.value === 1 ? 24 : 18}
          offset={DeviceStorage.value === 1 ? 0 : 3}
          style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px', display: 'flex', flexDirection: 'row' }}
        >
          <div className="leftCol">
            <div className="listContainer">
              <div className="searchContainer">
                <div style={{ display: 'flex' }}>
                  <Button onClick={() => {}}>添加界隈</Button>
                  <Button onClick={onLocate}>定位</Button>
                  <Select
                    defaultValue="baidu"
                    style={{ width: 120 }}
                    onChange={e => {
                      setmapType(e);
                    }}
                    options={[
                      { value: 'baidu', label: '百度地图' },
                      { value: 'opm', label: 'OpenStreetMap' },
                    ]}
                  />
                </div>
                <Search placeholder="搜索界隈" onSearch={onSearch} style={{ width: '100%' }} />
              </div>
              <div className="listItems">
                {kaiwais?.map(kaiwai => {
                  return (
                    <div
                      key={kaiwai.name}
                      className="listitem"
                      onClick={() => {
                        map.flyTo(L.latLng(kaiwai.lat, kaiwai.lng));
                      }}
                    >
                      {kaiwai.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="rightCol">
            {(() => {
              switch (mapType) {
                case 'baidu':
                  return <></>;
                case 'osm':
                  return (
                    <div
                      id="map"
                      style={{
                        width: '100%',
                        height: '600px',
                      }}
                    ></div>
                  );
                default:
                  return <></>;
              }
            })()}
          </div>
        </Col>
      </Row>
    </>
  );
};
