import { Button, Col, Row, Space, Tag } from 'antd';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentPageStorage, WinWidthStorage } from '../../dataStorage/storage';
import WinSize from '../../utils/enums/WinSize';
import Updater from '../../utils/Updater';
import MainContent from './components/MainContent';
import RightSide from './components/RightSide';
import './Home.css';

interface VideoBoxProps {
  title: string;
}

const VideoBox = () => {
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
    <span className='videoTitle'>每日一技</span>

    <iframe src='//player.bilibili.com/player.html?aid=292830485&bvid=BV1bf4y1J7H9&cid=403718252&page=1&t=33' width='90%' scrolling='no' frameBorder='no' allowFullScreen></iframe>
    <div className='videoTitleP'>
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <span className='wazaMainName'>霞之门</span>&nbsp;
        <span className='wazaAfterName'>霞ヶ門</span>&nbsp;
      </div>
      <div>
        <Tag>门系</Tag>
      </div>
    </div>
    <p className='videoTitleP' style={{ color: 'gray', fontSize: '50%' }}>
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
  useEffect(() => {
    document.title = 'WOTAGEIPEDIA';
    CurrentPageStorage.set('home');
    props.updater.setUpdate();
  }, []);
  return (
    <>
      <Row justify='space-around' wrap style={{ marginTop: '30px' }}>
        <Col >
          <MainContent />
        </Col>
        <Col span={WinWidthStorage.value>= WinSize.lg? 6:undefined}>
          <RightSide />
        </Col>
      </Row>
    </>
  );
};
