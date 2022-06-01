import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { Row, Col, Form, Input, Button } from 'antd';
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

  // i18n
  const l = LangUtils.selectLang();

  return (
    <>
      <Row>
        <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3} style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px' }}>
          <Form>
            <Form.Item label="技名CN" name="wazaname">
              <Input />
            </Form.Item>
            <Form.Item label="技名别称CN" name="wazaname">
              <Input />
            </Form.Item>
            <Form.Item label="技名JP" name="wazaname">
              <Input />
            </Form.Item>
            <Form.Item label="技名别称JP" name="wazaname">
              <Input />
            </Form.Item>
            <Form.Item label="来自" name="wazaname">
              <Input />
            </Form.Item>
            <Form.Item label="链接" name="wazaname">
              <Input />
            </Form.Item>
            <Form.Item label="开始时间" name="wazaname">
              <Input />
            </Form.Item>
            <Form.Item label="本家" name="wazaname">
              <Input />
            </Form.Item>
            <Form.Item label="系" name="wazaname">
              <Input />
            </Form.Item>
            <Form.Item label="标签" name="wazaname">
              <Input />
            </Form.Item>
            <Form.Item label="创立时间" name="wazaname">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                添加
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
