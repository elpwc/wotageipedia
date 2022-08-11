import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { Row, Col, Button } from 'antd';
import Updater from '../../interfaces/Updater';
import './index.css';
import LangUtils from '../../locales/langUtils';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import LeafletMap from './components/LeafletMap';
import { Input, Space } from 'antd';

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

  useEffect(() => {
    // document.title = '';
    CurrentPageStorage.set('map');
    props.updater.setUpdate();
  }, []);

  const L = LangUtils.selectLang();

  const onSearch = () => {};

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
            <LeafletMap width="100%" height="600px" />
          </div>
        </Col>
      </Row>
    </>
  );
};
