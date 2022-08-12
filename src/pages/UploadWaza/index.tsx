import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { Row, Col, Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect, Checkbox } from 'antd';
import Updater from '../../interfaces/Updater';
import './index.css';
import LangUtils from '../../locales/langUtils';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import DougaUploader from '../../components/DougaUploader';

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
    CurrentPageStorage.set('uploadwaza');
    props.updater.setUpdate();
  }, []);

  const L = LangUtils.selectLang();

  return (
    <>
      <Row>
        <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3} style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px' }}>
          <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
            <Form.Item label="类型" name="is_chikagei">
              <Radio.Group>
                <Radio.Button value="default">光棒艺</Radio.Button>
                <Radio.Button value="default">地下艺</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="名称" name="namecn">
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="本家" name="honke">
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="作成时间">
              <DatePicker placeholder="" />
            </Form.Item>
            <Form.Item>
              <DougaUploader />
            </Form.Item>
            <Form.Item>
              <Button type="primary">提交</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
