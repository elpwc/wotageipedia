import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useParams } from 'react-router';
import { Row, Col, Input, Button } from 'antd';
import Updater from '../../utils/Updater';
import './index.css';
import { register } from '../../api/user';

interface P {
  updater: Updater;
}

export default (props: P) => {
  const params = useParams();
  const mylocation = useLocation();

  // let currentId: number = Number(params.wazaid);

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [nick, setnick] = useState('');

  useEffect(() => {
    // document.title = '';
    CurrentPageStorage.set('register');
    props.updater.setUpdate();
  }, []);
  return (
    <>
      <Row>
        <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3} style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px' }}>
          <Input
            value={username}
            onChange={e => {
              setusername(e.target.value);
            }}
            placeholder={'用户名'}
          />
          <Input
            value={password}
            onChange={e => {
              setpassword(e.target.value);
            }}
            placeholder={'密码'}
          />
          <Input
            value={nick}
            onChange={e => {
              setnick(e.target.value);
            }}
            placeholder={'昵称'}
          />
          <Button
            onClick={() => {
              register(username, '', password, nick, 0, '', '').then(res => {
                console.log(res);
                const result: API.RegisterResult = res.data;
              });
            }}
          >
            注册
          </Button>
        </Col>
      </Row>
    </>
  );
};
