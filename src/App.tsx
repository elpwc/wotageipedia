import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminModeStorage, DeviceStorage, WinWidthStorage } from './dataStorage/storage';
import LangUtils from './locales/langUtils';
import cookie from 'react-cookies';
import Wotagei from './pages/Wotagei';
import Waza from './pages/Waza';
import BBS from './pages/BBS';
import Main from './pages/Main';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import WinSize, { WinSizeUtils } from './interfaces/enums/WinSize';
import appconfig from './appconfig';
import Register from './pages/Register';
import KaiwaiMap from './pages/KaiwaiMap';

function App() {
  const [update, setUpdate]: [number, any] = useState(0);

  const updateNow = () => {
    setUpdate(Math.random());
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

  // Device
  const isMobile: boolean = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
  DeviceStorage.set(isMobile ? 1 : 0);
  console.log('device: ', isMobile);

  // WinSize
  const getWindowInfo = () => {
    const windowInfo = {
      width: window.innerWidth,
      hight: window.innerHeight,
    };
    //console.log(windowInfo);
    const newWinSize = WinSizeUtils.getWinSize(windowInfo.width);

    WinWidthStorage.set(newWinSize);

    updateNow();

    /*
        let formarSize: WinSize = WinWidthStorage.value;
    if (newWinSize !== formarSize) {
      WinWidthStorage.set(newWinSize);

      console.log(WinWidthStorage.value);
      let timer2 = setInterval(() => {
        updateNow();
        clearInterval(timer2);
      }, 500);
    }
    */
  };
  let timer: any = null;
  const debounce = () => {
    if (!timer) {
      timer = setInterval(() => {
        getWindowInfo();
        clearInterval(timer);
        timer = null;
      }, 100);
    }
  };

  useEffect(() => {
    WinWidthStorage.set(WinSizeUtils.getWinSize(window.innerWidth));
    window.addEventListener('resize', debounce);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="./zhcn" />}></Route>

        <Route path=":lang" element={<Main updater={{ update, setUpdate: updateNow }} />}>
          <Route index element={<Home updater={{ update, setUpdate: updateNow }} />}></Route>
          <Route path="wotagei" element={<Wotagei updater={{ update, setUpdate: updateNow }} />}></Route>
          <Route path="wotagei/:wazaid" element={<Waza updater={{ update, setUpdate: updateNow }} />}></Route>
          <Route path="bbs" element={<BBS updater={{ update, setUpdate: updateNow }} />}></Route>
          <Route path="kaiwaimap" element={<KaiwaiMap updater={{ update, setUpdate: updateNow }} />}></Route>
          <Route path="register" element={<Register updater={{ update, setUpdate: updateNow }} />}></Route>
          <Route path="404" element={<ErrorPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
