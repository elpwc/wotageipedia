import { Row, Col } from 'antd';
import { useEffect } from 'react';
import { CurrentPageStorage, DeviceStorage } from '../../dataStorage/storage';
import Updater from '../../interfaces/Updater';

interface P {
  updater: Updater;
}

export default (props: P) => {
  useEffect(() => {
    // document.title = '';
    CurrentPageStorage.set('bbs');
    props.updater.setUpdate();
  }, []);

  return (
    <Row>
      <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3} style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px' }}>
        bbs
      </Col>
    </Row>
  );
};
