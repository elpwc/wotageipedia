import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useParams } from 'react-router';
import { Row, Col, Input, Button, message } from 'antd';
import Updater from '../../interfaces/Updater';
import './index.css';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { userLogin } from '../../utils/requests/user';
import { createUserApiUserPost } from '../../services/wotageipedia/user';
//import { createUserApiUserPost } from '../../services/wotageipedia/yonghu';

import Recaptcha from 'react-recaptcha';

interface P {
  updater: Updater;
}

export default (props: P) => {
  const params = useParams();
  const mylocation = useLocation();

  // let currentId: number = Number(params.wazaid);

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [password2, setpassword2] = useState('');
  const [nick, setnick] = useState('');
  const [recaptchaLoading, setrecaptchaLoading] = useState(true);
  const [verified, setverified] = useState(false);

  // create a variable to store the component instance
  let recaptchaInstance: any;

  // create a reset function
  const resetRecaptcha = () => {
    recaptchaInstance.reset();
  };

  const onloadCallback = () => {
    setrecaptchaLoading(false);
  };

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
          <Form layout="vertical">
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
              <Input.Password
                value={password}
                onChange={e => {
                  setpassword(e.target.value);
                }}
                placeholder={'密码'}
              />
            </FormItem>

            <FormItem
              label={
                <p>
                  <span>再输一遍密码</span>
                  {password !== password2 ? <span style={{ color: 'red' }}> * 两次输入的密码不一致</span> : <></>}
                </p>
              }
            >
              <Input.Password
                value={password2}
                onChange={e => {
                  setpassword2(e.target.value);
                }}
                placeholder={'密码确认'}
              />
            </FormItem>
          </Form>

          {recaptchaLoading ? (
            <div>
              <p>验证码加载中</p>
              <button onClick={resetRecaptcha}>刷新</button>
            </div>
          ) : (
            <div>请点击完成验证</div>
          )}
          <Recaptcha
            ref={e => {
              recaptchaInstance = e;
            }}
            sitekey="6Ld7BHQcAAAAAIXgLrclWJIj5S2BErHyC_wLUHTK"
            render="explicit"
            verifyCallback={e => {
              //console.log(e);
              setverified(true);
            }}
            onloadCallback={onloadCallback}
            hl="zh-CN"
          />

          <Button
            onClick={async () => {
              if (username === '') {
                message.warn('请输入用户名');
              } else if (password === '') {
                message.warn('请输入密码');
              } else if (password !== password2) {
                message.warn('两次输入的密码不一样');
              } else if (!verified) {
                message.warn('请点击验证码通过验证');
              } else {
                const a = await createUserApiUserPost({ username, email: '', password, nickname: username, gender: 0 });
                console.log(a, 123);
              }
            }}
          >
            注册
          </Button>
          <Button
            onClick={() => {
              userLogin(username, password);
            }}
          >
            登录
          </Button>
        </Col>
      </Row>
    </>
  );
};
