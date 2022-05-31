import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useParams } from 'react-router';
import { Row, Col, Input, Button, message, Checkbox } from 'antd';
import Updater from '../../interfaces/Updater';
import './index.css';
import RegisterForm from './components/RegisterForm';
import InfoForm from './components/InfoForm';

interface P {
  updater: Updater;
}

export default (props: P) => {
  const params = useParams();
  const mylocation = useLocation();

  // let currentId: number = Number(params.wazaid);

  const [step, setstep] = useState(1);
  const [username, setusername] = useState('');

  useEffect(() => {
    // document.title = '';
    CurrentPageStorage.set('register');
    props.updater.setUpdate();
  }, []);

  return (
    <>
      <Row>
        <Col
          span={DeviceStorage.value === 1 ? 24 : 18}
          offset={DeviceStorage.value === 1 ? 0 : 3}
          style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          {(() => {
            switch (step) {
              case 1:
                return (
                  <RegisterForm
                    onDone={(uuid, username) => {
                      setusername(username);
                      setstep(2);
                    }}
                  />
                );
              case 2:
                return <InfoForm />;
              default:
                return <></>;
            }
          })()}
          
          <button
            onClick={() => {
              setstep(2);
            }}
          >
            next test
          </button>
        </Col>
      </Row>
    </>
  );
};
