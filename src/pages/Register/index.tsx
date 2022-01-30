import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useParams } from 'react-router';
import { Row, Col, Input, Button } from 'antd';
import Updater from '../../utils/Updater';
import './index.css';
import { register } from '../../api/user';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';

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
        <Col
          span={DeviceStorage.value === 1 ? 24 : 18}
          offset={DeviceStorage.value === 1 ? 0 : 3}
          style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px', display: 'flex', flexDirection: 'column', gap: '50px' }}
        >
          <Form>
            <FormItem label={'用户名'}>
              <Input
                value={username}
                onChange={e => {
                  setusername(e.target.value);
                }}
                placeholder={'用户名'}
              />
            </FormItem>

            <FormItem label={'密码'}>
              <Input
                value={password}
                onChange={e => {
                  setpassword(e.target.value);
                }}
                placeholder={'密码'}
              />
            </FormItem>

            <FormItem label={'再输一遍密码'}>
              <Input
                value={password}
                onChange={e => {
                  setpassword(e.target.value);
                }}
                placeholder={'密码确认'}
              />
            </FormItem>

            <FormItem label={'昵称'}>
              <Input
                value={nick}
                onChange={e => {
                  setnick(e.target.value);
                }}
                placeholder={'昵称'}
              />
            </FormItem>

            <FormItem label={'用户名'}>
              <Input
                value={nick}
                onChange={e => {
                  setnick(e.target.value);
                }}
                placeholder={'昵称'}
              />
            </FormItem>
          </Form>
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