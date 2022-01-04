import { Button, Checkbox, Col, Input, Layout, Menu, message, Modal, Row, Select, Space } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import { Link, Navigate, Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import { CurrentPageStorage, LangStorage, AdminModeStorage, DeviceStorage } from './dataStorage/storage';
import BackgroundImage from './resource/bg.jpg';
import LangUtils from './locales/langUtils';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import cookie from 'react-cookies';
import appconfig from './appconfig';

const { Option } = Select;

interface P {
  update: boolean;
  setUpdate: () => void;
}

function Main(props: P) {
  const [update, setUpdate]: [boolean, any] = useState(false);
  const updateNow = () => {
    setUpdate(!update);
  };

  // Inputed admin password in Admin Win
  const [pw, setPw]: [string, any] = useState('');
  // Admin Win para
  const [rememberPw, setRememberPw]: [boolean, any] = useState(false);
  // Admin Win state
  const [adminWinState, setAdminWinState]: [number, any] = useState(AdminModeStorage.value === 1 ? 2 : 0); // 0 not admin, 1 open requireWin, 2 admin mode

  const params = useParams();
  const navigate = useNavigate();
  const mylocation = useLocation();

  const currentLang: string = String(params.lang).toLowerCase().replace('-', '_');

  if (LangUtils.getEnumStrings().includes(currentLang)) {
    LangStorage.set(LangUtils.enumStrToLang(currentLang));
  } else {
    return <Navigate to='/zh-cn' />;
  }

  const L = LangUtils.selectLang();

  return (
    <div className='main'>
      <Layout
        style={{
          position: 'fixed',
          top: '0px',
          left: '0px',
          right: '0px',
          height: '60px',
          zIndex: 2,
        }}
      >
        <Header className='header' style={{ padding: '0px', height: '60px', backgroundColor: 'white' }}>
          <div className='logo' />
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={[CurrentPageStorage.value]}
            selectedKeys={[CurrentPageStorage.value]}
            style={{ fontSize: '15px', height: '60px' }}
            onClick={(key) => {
              CurrentPageStorage.set(key.key);
            }}
          >
            <Menu.Item key='home'>
              <Link to='./'>{L.header.home}</Link>
            </Menu.Item>
            <Menu.Item key='wotagei'>
              <Link to='./wotagei'>{L.header.wotagei}</Link>
            </Menu.Item>
            <Menu.Item key='chikagei'>
              <Link to='./chikagei'>{L.header.chikagei}</Link>
            </Menu.Item>
            <Menu.Item key='bbs'>
              <Link to='./bbs'>{L.header.bbs}</Link>
            </Menu.Item>
            <Menu.Item key='kaiwaimap'>
              <Link to='./kaiwaimap'>{L.header.kaiwaimap}</Link>
            </Menu.Item>

            <Menu.Item key='langsele' disabled style={{ cursor: 'default', position: 'absolute', width: '200px', right: '0px' }}>
              <Select
                defaultValue='zh_cn'
                style={{ width: 120 }}
                onChange={(value) => {
                  navigate(`/${value.replace('_', '-')}/` + mylocation.pathname.split('/').slice(2).join('/'));
                  props.setUpdate();
                }}
              >
                {LangUtils.getEnumStrings().map((lang: string) => {
                  if (appconfig.usingLanguages.includes(LangUtils.enumStrToLang(lang))) {
                    return (
                      <Option value={lang} key={lang}>
                        {LangUtils.enumStrToLangName(lang)}
                      </Option>
                    );
                  }
                })}
              </Select>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <div
        style={{
          position: 'fixed',
          top: '60px',
          left: '0px',
          right: '0px',
          bottom: '0px',
          //background: `url(${BackgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `100%`,
          zIndex: 0,
          backgroundColor: 'rgb(20,20,20)',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '0px',
          right: '0px',
          bottom: '0px',
          zIndex: 1,
        }}
      >
        <Row>
          <Col span={DeviceStorage.value === 1 ? 22 : 14} offset={DeviceStorage.value === 1 ? 1 : 5}>
            <Outlet />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Main;
