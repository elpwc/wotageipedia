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
import './Main.css';

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
      <header
        className='header'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '0px',
          height: '50px',
          backgroundColor: '#141414',
          borderBottom: 'solid 5px orange',
          display: 'flex',
          flexFlow: 'column-reverse nowrap',
        }}
      >
        <Row justify='space-between'>
          <Col span={3}>
            <div style={{ display: 'flex', flexDirection: 'column', fontStyle: 'italic', fontWeight: 'bold', color: 'white', fontSize: '150%', textShadow: '1px 1px yellow' }}>
              <span style={{ height: '100%' }}>WOTAGEIPEDIA</span>
            </div>
          </Col>

          <Col span={6}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to='./' style={{ margin: 0 }}>
                <div className={'menu-item' + (CurrentPageStorage.value === 'home' ? ' menu-item-active' : '')}>
                  <span>{L.header.home}</span>
                </div>
              </Link>

              <Link to='./wotagei'>
                <div className={'menu-item' + (CurrentPageStorage.value === 'wotagei' ? ' menu-item-active' : '')}>
                  <span>{L.header.wotagei}</span>
                </div>
              </Link>
              <Link to='./chikagei'>
                <div className={'menu-item' + (CurrentPageStorage.value === 'chikagei' ? ' menu-item-active' : '')}>
                  <span>{L.header.chikagei}</span>
                </div>
              </Link>
              <Link to='./bbs'>
                <div className={'menu-item' + (CurrentPageStorage.value === 'bbs' ? ' menu-item-active' : '')}>
                  <span>{L.header.bbs}</span>
                </div>
              </Link>
              <Link to='./kaiwaimap'>
                <div className={'menu-item' + (CurrentPageStorage.value === 'kaiwaimap' ? ' menu-item-active' : '')}>
                  <span>{L.header.kaiwaimap}</span>
                </div>
              </Link>
            </div>
          </Col>

          <Col span={4}>
            <div style={{ display: 'flex', flexDirection: 'column-reverse', paddingBottom: '5px' }}>
              <div style={{ width: '250px', paddingRight: '10px', borderRadius: '10px', backgroundColor: '#555555', display: 'flex', flexDirection: 'row' }}>
                <input
                  style={{ width: '80%', outline: 'none', fontSize: '100%', border: 'none', backgroundColor: 'transparent', marginLeft: '10px', marginRight: '10px', color: 'white' }}
                  placeholder='搜索技·系·界隈·打师'
                />
                <Link to='./' style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                  <span style={{ color: 'white' }}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
                      <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </Col>

          <Col span={6}>
            <Space>
              <div className='uploadBtn'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-upload' viewBox='0 0 16 16'>
                  <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z' />
                  <path d='M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z' />
                </svg>
                &nbsp;&nbsp;添加技·界隈
              </div>
              <div>
                <Space>
                  <div className='menuBtn'>登录</div>
                  <div className='menuBtn'>成为编辑者</div>
                </Space>
              </div>
              <div style={{ width: 'max-content' }}>
                <span style={{ color: 'white' }}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-globe' viewBox='0 0 16 16'>
                    <path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z' />
                  </svg>
                  简中
                </span>
              </div>
            </Space>
          </Col>
        </Row>
      </header>
      <div
        style={{
          position: 'fixed',
          top: '50px',
          left: '0px',
          right: '0px',
          bottom: '0px',
          //background: `url(${BackgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `100%`,
          zIndex: 0,
          backgroundColor: '#FFFFFF',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '50px',
          left: '0px',
          right: '0px',
          bottom: '0px',
          zIndex: 1,
        }}
      >
        <Row>
          <Col span={DeviceStorage.value === 1 ? 22 : 18} offset={DeviceStorage.value === 1 ? 1 : 3}>
            <Outlet />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Main;
