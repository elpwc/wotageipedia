import { Button, Checkbox, Col, Dropdown, Input, Layout, Menu, message, Modal, Row, Select, Space } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import { Link, Navigate, Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import { CurrentPageStorage, LangStorage, AdminModeStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import BackgroundImage from './resource/bg.jpg';
import LangUtils, { Lang } from '../../locales/langUtils';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import cookie from 'react-cookies';
import appconfig from '../../appconfig';
import './Main.css';
import SiteMenu from './components/Menu';
import WinSize from '../../utils/enums/WinSize';
import Updater from '../../utils/Updater';
import PhoneMenuBar from './components/PhoneMenuBar';
import qqgroupcode from '../../resource/qqgroup.jpg';

const { Option } = Select;

interface P {
  updater: Updater;
}

export default (props: P) => {
  const [update, setUpdate]: [boolean, any] = useState(false);
  const updateNow = () => {
    setUpdate(!update);
  };
  console.log(props.updater);

  // Inputed admin password in Admin Win
  const [pw, setPw]: [string, any] = useState('');
  // Admin Win para
  const [rememberPw, setRememberPw]: [boolean, any] = useState(false);
  // Admin Win state
  const [adminWinState, setAdminWinState]: [number, any] = useState(AdminModeStorage.value === 1 ? 2 : 0); // 0 not admin, 1 open requireWin, 2 admin mode

  const [qqgroupcodeModalVisibility, setqqgroupcodeModalVisibility] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const mylocation = useLocation();

  const currentLang: string = String(params.lang).toLowerCase();

  if (LangUtils.getEnumStrings().includes(currentLang)) {
    LangStorage.set(LangUtils.enumStrToLang(currentLang));
  } else {
    return <Navigate to='/zhcn' />;
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
          borderBottom: 'solid 5px #df3b3b',
          display: 'flex',
          flexFlow: 'column-reverse nowrap',
          zIndex: 4,
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        <Row justify='space-between' wrap={false}>
          {WinWidthStorage.value >= WinSize.lg ? (
            <Col span={3}>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
                <span style={{ height: '100%', fontStyle: 'italic', fontWeight: 'bold', color: 'white', fontSize: '150%', textShadow: '1px 1px yellow' }}>WOTAGEIPEDIA</span>
              </div>
            </Col>
          ) : (
            <></>
          )}

          {WinWidthStorage.value >= WinSize.sm ? (
            <Col>
              <SiteMenu />
            </Col>
          ) : (
            <></>
          )}

          <Col
            span={WinWidthStorage.value >= WinSize.sm ? 4 : undefined}
            style={{
              marginRight: '5px',
              marginLeft: '5px',
              width: '-webkit-fill-available',
              maxWidth: '300px',
              marginTop: '-5px',
              marginBottom: '5px',
              paddingRight: '10px',
              borderRadius: '10px',
              backgroundColor: '#666666',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <input
              className='searchInput'
              style={{ width: '80%', outline: 'none', fontSize: '110%', border: 'none', backgroundColor: 'transparent', marginLeft: '10px', marginRight: '10px', color: 'white' }}
              placeholder='搜索技·系·界隈·打师'
            />
            <Link to='./' style={{ display: 'flex', flexDirection: 'column-reverse' }}>
              <span style={{ color: 'white' }}>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
                  <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                </svg>
              </span>
            </Link>
          </Col>

          <Col style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'end' }}>
            <div className='uploadBtn'>
              <p style={{ width: 'max-content', margin: 0 }}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-upload' viewBox='0 0 16 16'>
                  <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z' />
                  <path d='M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z' />
                </svg>

                {WinWidthStorage.value !== WinSize.sm ? <span>&nbsp;&nbsp;添加技·界隈</span> : <></>}
              </p>
            </div>
            {WinWidthStorage.value > WinSize.xs ? (
              <div>
                <Space>
                  <div className='menuBtn'>登录</div>
                  <div className='menuBtn'>成为编辑者</div>
                </Space>
              </div>
            ) : (
              <></>
            )}
            <Dropdown
              overlay={
                <Menu
                  onClick={({ item, key }) => {
                    navigate(`/${key}/` + mylocation.pathname.split('/').slice(2).join('/'));
                    props.updater.setUpdate();
                  }}
                >
                  {LangUtils.LangNames.map((lang: [Lang, string]) => {
                    if (appconfig.usingLanguages.includes(lang[0])) {
                      return <Menu.Item key={LangUtils.LangToEnumStr(lang[0])}>{lang[1]}</Menu.Item>;
                    } else {
                      return (
                        <Menu.Item key={'unavailable-' + LangUtils.LangToEnumStr(lang[0])} style={{ backgroundColor: 'lightgray', color: 'gray', cursor: 'not-allowed' }}>
                          {lang[1]}
                        </Menu.Item>
                      );
                    }
                  })}
                </Menu>
              }
            >
              <a className='ant-dropdown-link' style={{ marginTop: '5px', marginLeft: '10px', marginRight: '10px' }} onClick={(e) => e.preventDefault()}>
                <span style={{ color: 'white', width: 'max-content' }}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-translate' viewBox='0 0 16 16'>
                    <path d='M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z' />
                    <path d='M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z' />
                  </svg>
                </span>
              </a>
            </Dropdown>
            <div style={{ width: 'max-content' }}></div>
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
          backgroundColor: 'white',
        }}
      ></div>
      {WinWidthStorage.value >= WinSize.sm ? (
        <></>
      ) : (
        <div
          style={{
            position: 'fixed',
            height: '50px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            zIndex: 2,
            backgroundColor: '#141414',
            WebkitBackfaceVisibility: 'hidden',
            boxShadow: '0 0 5px 0 gray',
          }}
        >
          <PhoneMenuBar />
        </div>
      )}
      <div
        style={{
          position: 'fixed',
          height: 'fit-content',
          width: 'max-content',
          right: '0px',
          top: '10%',
          zIndex: 2,
          border: 'solid 1px white',
          backgroundColor: 'whitesmoke',
          WebkitBackfaceVisibility: 'hidden',
          boxShadow: '0 0 5px 0 gray',
        }}
      >
        <a href={LangStorage.value === Lang.zhcn ? 'https://www.wjx.cn/vj/PlWjk8b.aspx' : ''} target='_blank'>
          ·{L.demoTips.survey}
        </a>
        <br />

        <a
          onClick={() => {
            setqqgroupcodeModalVisibility(true);
          }}
        >
          ·{L.demoTips.group.title}
        </a>
        <Modal title='' visible={qqgroupcodeModalVisibility} footer={null} onCancel={() => {setqqgroupcodeModalVisibility(false)}}>
          <img src={qqgroupcode} width='100%' height='80%'/>
        </Modal>
      </div>
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
        <Outlet />

      </div>
    </div>
  );
};
