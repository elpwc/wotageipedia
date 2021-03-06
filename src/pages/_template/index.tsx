import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { Row, Col } from 'antd';
import Updater from '../../interfaces/Updater';
import './index.css';
import LangUtils from '../../locales/langUtils';

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
    CurrentPageStorage.set('');
    props.updater.setUpdate();
  }, []);

  const L = LangUtils.selectLang();

  return (
    <>
      <Row>
        <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3} style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px' }}>
          {}
        </Col>
      </Row>
    </>
  );
};
