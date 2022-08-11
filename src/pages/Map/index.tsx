import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { Row, Col, Button } from 'antd';
import Updater from '../../interfaces/Updater';
import './index.css';
import LangUtils from '../../locales/langUtils';
import { Input, Space } from 'antd';
import L, { LatLngExpression } from 'leaflet';

const { Search } = Input;

interface P {
  updater: Updater;
}

export default (props: P) => {
  const params = useParams();
  const navigate = useNavigate();
  const mylocation = useLocation();

  // let currentId: number = Number(params.wazaid);

  const [tmp, settmp]: [number, any] = useState(5);
  const [position, setPosition]: [LatLngExpression | null, any] = useState(null);

  let map: L.Map;
  let mapLayer: L.Layer;

  useEffect(() => {
    // document.title = '';
    CurrentPageStorage.set('map');
    props.updater.setUpdate();

    map = L.map('map', { attributionControl: false, zoomControl: false, maxBounds: L.latLngBounds(L.latLng(-100, -200), L.latLng(100, 100)) }).setView([51.505, -0.09], 13);

    mapLayer =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 7,
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
  }, []);

  const La = LangUtils.selectLang();

  const onSearch = () => {};

  const onLocate = () => {
    map.locate();
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
                <Search placeholder="搜索界隈" onSearch={onSearch} style={{ width: 200 }} />
                <Button
                  onClick={() => {
                    settmp(tmp + 1);
                  }}
                >
                  添加界隈
                </Button>
                <Button onClick={onLocate}>定位</Button>
              </div>
              <div className="listItems">
                {Array.from(new Array(tmp).keys()).map(i => {
                  console.log(123, tmp);
                  return <div className="listitem">test {i}</div>;
                })}
              </div>
            </div>
          </div>
          <div className="rightCol">
            <div
              id="map"
              style={{
                width: '100%',
                height: '600px',
              }}
            ></div>
            {/*
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={true}
              style={{
                width: '100%',
                height: '600px',
              }}
            >
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            <LeafletMap width="100%" height="600px" />*/}
          </div>
        </Col>
      </Row>
    </>
  );
};
