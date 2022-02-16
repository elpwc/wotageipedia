import { Button, Col, Modal, Row, Space, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentPageStorage, DeviceStorage, IsFirstEnterStorage, WinWidthStorage } from '../../dataStorage/storage';
import LangUtils from '../../locales/langUtils';
import WinSize from '../../utils/enums/WinSize';
import Updater from '../../utils/Updater';
import MainContent from './components/MainContent';
import RightSide from './components/RightSide';
import './index.css';

interface VideoBoxProps {
  title: string;
}

const VideoBox = () => {
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
    <span className="videoTitle">每日一技</span>

    <iframe src="//player.bilibili.com/player.html?aid=292830485&bvid=BV1bf4y1J7H9&cid=403718252&page=1&t=33" width="90%" scrolling="no" frameBorder="no" allowFullScreen></iframe>
    <div className="videoTitleP">
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <span className="wazaMainName">霞之门</span>&nbsp;
        <span className="wazaAfterName">霞ヶ門</span>&nbsp;
      </div>
      <div>
        <Tag>门系</Tag>
      </div>
    </div>
    <p className="videoTitleP" style={{ color: 'gray', fontSize: '50%' }}>
      <span>本家: ゆーきち</span>
      &nbsp;&nbsp;&nbsp;
      <span>演出: ゆーきち</span>
    </p>
  </div>;
};

interface P {
  updater: Updater;
}

export default (props: P) => {
  const navigate = useNavigate();

  const L = LangUtils.selectLang();

  useEffect(() => {
    document.title = 'WOTAGEIPEDIA';
    CurrentPageStorage.set('home');
    props.updater.setUpdate();
  }, []);

  return (
    <>
      <Row>
        <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3} style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px' }}>
          <Row justify="space-around" wrap style={{ marginTop: '30px' }}>
            <Col>
              <MainContent />
            </Col>
            <Col style={{ width: '100%', marginLeft: '20px' }} span={WinWidthStorage.value >= WinSize.lg ? 4 : undefined}>
              <RightSide />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
