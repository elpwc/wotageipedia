import { Button, Checkbox, Col, Dropdown, Form, Input, Layout, Menu, message, Modal, Popover, Row, Select, Space } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import { CurrentPageStorage, LangStorage, AdminModeStorage, DeviceStorage, WinWidthStorage, IsFirstEnterStorage } from '../../dataStorage/storage';
import LangUtils, { Lang } from '../../locales/langUtils';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import cookie from 'react-cookies';
import appconfig from '../../appconfig';
import './index.css';
import SiteMenu from './components/Menu';
import WinSize from '../../interfaces/enums/WinSize';
import Updater from '../../interfaces/Updater';
import PhoneMenuBar from './components/PhoneMenuBar';
import ModalForm from '../../components/ModalForm';
import FormItem from 'antd/lib/form/FormItem';
import { userLogin } from '../../utils/requests/user';
import { CyalumeSVG } from '../../utils/svgs/cyalume';

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

  const [loginUsername, setusername] = useState('');
  const [loginPassword, setpassword] = useState('');

  const [demoTipsModalVisibility, setdemoTipsModalVisibility] = useState(false);
  const [loginModal, setloginModal] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const mylocation = useLocation();

  const currentLang: string = String(params.lang).toLowerCase();

  if (LangUtils.getEnumStrings().includes(currentLang)) {
    LangStorage.set(LangUtils.enumStrToLang(currentLang));
  } 

  useEffect(() => {
    if (IsFirstEnterStorage.value) {
      // 正式上线前取消注释
      // setdemoTipsModalVisibility(true);
      IsFirstEnterStorage.set(false);
    }
  }, [IsFirstEnterStorage.value]);

  const L = LangUtils.selectLang();

  const onLoginClick = () => {
    setloginModal(true);
  };

  return (
    <div className="main">
      <Modal
        visible={demoTipsModalVisibility}
        title={L.demoTips.start.title}
        footer={null}
        onCancel={() => {
          setdemoTipsModalVisibility(false);
        }}
      >
        <div>{L.demoTips.start.alert1}</div>
      </Modal>

      <Modal
        visible={loginModal}
        title={'登录'}
        footer={null}
        onCancel={() => {
          setloginModal(false);
        }}
      >
        <Form>
          <FormItem label={'用户名'}>
            <Input
              value={loginUsername}
              onChange={(e: any) => {
                setusername(e.target.value);
              }}
              placeholder={'用户名'}
            />
          </FormItem>

          <FormItem label={'密码'}>
            <Input
              value={loginUsername}
              onChange={(e: any) => {
                setpassword(e.target.value);
              }}
              placeholder={'密码'}
            />
          </FormItem>

          <Button
            onClick={() => {
              userLogin(loginUsername, loginPassword);
            }}
          >
            登录
          </Button>
          <Button
            onClick={() => {
              setloginModal(false);
            }}
          >
            取消
          </Button>
        </Form>
      </Modal>

      <div className="uploadModal"></div>

      <header
        className="header"
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
        <Row justify="space-between" wrap={false}>
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
              className="searchInput"
              style={{ width: '80%', outline: 'none', fontSize: '110%', border: 'none', backgroundColor: 'transparent', marginLeft: '10px', marginRight: '10px', color: 'white' }}
              placeholder="搜索技·系·界隈·打师"
            />
            <Link to="./" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
              <span style={{ color: 'white' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </Link>
          </Col>

          <Col style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'end' }}>
            <Popover
              content={
                <div className="uploadButtonsContainer">
                  <Link to="./uploadwaza" className="uploadButtons" style={{ borderRadius: '10px 0 0 0' }}>
                    <div>
                      <span style={{ color: 'orange' }}>
                        <CyalumeSVG />
                      </span>
                      添加新技
                    </div>
                  </Link>

                  <Link to="./uploadwaza" className="uploadButtons" style={{ borderRadius: '0 10px 0 0' }}>
                    <div>
                      <span style={{ color: 'red' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn-fill" viewBox="0 0 16 16">
                          <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </svg>
                      </span>
                      添加新视频
                    </div>
                  </Link>

                  <Link to="./uploadwaza" className="uploadButtons" style={{ borderRadius: '0 0 0 10px' }}>
                    <div>
                      <span style={{ color: 'purple' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                          />
                          <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                        </svg>
                      </span>
                      添加界隈
                    </div>
                  </Link>

                  <Link to="./uploadwaza" className="uploadButtons" style={{ borderRadius: '0 0 10px 0' }}>
                    <div>
                      <span style={{ color: 'blue' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </span>
                      添加打师
                    </div>
                  </Link>
                </div>
              }
            >
              <div className="uploadBtn">
                <p style={{ width: 'max-content', margin: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                  </svg>

                  {WinWidthStorage.value !== WinSize.sm ? <span>&nbsp;&nbsp;添加技·界隈等</span> : <></>}
                </p>
              </div>
            </Popover>

            {WinWidthStorage.value > WinSize.xs ? (
              <div>
                <Space>
                  <div className="menuBtn" onClick={onLoginClick}>
                    登录
                  </div>
                  <Link to="./register">
                    <div className="menuBtn">注册</div>
                  </Link>
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
                  items={LangUtils.LangNames.map((lang: [Lang, string]) => {
                    if (appconfig.usingLanguages.includes(lang[0])) {
                      return { label: lang[1], key: LangUtils.LangToEnumStr(lang[0]) };
                    }
                    return { label: lang[1], key: 'unavailable-' + LangUtils.LangToEnumStr(lang[0]), disabled: true };
                  })}
                />
              }
            >
              <a className="ant-dropdown-link" style={{ marginTop: '5px', marginLeft: '10px', marginRight: '10px' }} onClick={e => e.preventDefault()}>
                <span style={{ color: 'white', width: 'max-content' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
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
        <a
          onClick={() => {
            setdemoTipsModalVisibility(true);
          }}
        >
          {L.demoTips.survey}
        </a>
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
