import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { AdminModeStorage, DeviceStorage } from './dataStorage/storage';
import LangUtils from './locales/langUtils';
import Main from './Main';
import Page404 from './pages/404';
import cookie from 'react-cookies';
import Wotagei from './pages/Wotagei';

function App() {
  const [update, setUpdate]: [boolean, any] = useState(false);

  const updateNow = () => {
    setUpdate(!update);
  };

  // 判断刷新后是否是管理员模式
  const isAdmin = sessionStorage.getItem('admin');
  if (isAdmin) {
    if (isAdmin === 'true') {
      AdminModeStorage.set(1);
    }
  } else {
    sessionStorage.setItem('admin', 'false');
    const isAdminFromCookie = cookie.load('auto-admin');
    console.log('cookie', isAdminFromCookie);
    if (isAdminFromCookie) {
      if (isAdminFromCookie === 'true') {
        AdminModeStorage.set(1);
      }
    } else {
      cookie.save('auto-admin', 'false', { path: '/' });
    }
  }

  // 判断设备
  const isMobile: boolean = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
  DeviceStorage.set(isMobile ? 1 : 0);
  console.log('device: ', isMobile);

  useEffect(() => {
    // 初始化数据
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route index element={<Navigate to='/zh-cn' />}></Route>
        <Route
          path=':lang'
          element={
            <Main
              update={update}
              setUpdate={() => {
                updateNow();
              }}
            />
          }
        >
          <Route
            index
            element={
              <Home
                update={update}
                setUpdate={() => {
                  updateNow();
                }}
              />
            }
          ></Route>
          <Route
            path='wotagei'
            element={
              <Wotagei
                update={update}
                setUpdate={() => {
                  updateNow();
                }}
              />
            }
          ></Route>
          <Route path='404' element={<Page404 />}></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
