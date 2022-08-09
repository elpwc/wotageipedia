import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { Row, Col } from 'antd';
import Updater from '../../interfaces/Updater';
import './index.css';
import LangUtils from '../../locales/langUtils';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

interface P {
  updater: Updater;
}

export default (props: P) => {
  const params = useParams();
  const navigate = useNavigate();
  const mylocation = useLocation();

  // let currentId: number = Number(params.wazaid);

  useEffect(() => {
    // document.title = '';
    CurrentPageStorage.set('map');
    props.updater.setUpdate();
  }, []);

  const L = LangUtils.selectLang();

  return (
    <>
      <Row>
        <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3} style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px' }}>

            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={true}
              style={{
                width: '1000px',
                height: '500px',
              }}
            >
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
        </Col>
      </Row>
    </>
  );
};
