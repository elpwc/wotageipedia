/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useParams } from 'react-router';
import { Row, Col, Tag, Button } from 'antd';
import Updater from '../../utils/Updater';
import './index.css';
import WinSize from '../../utils/enums/WinSize';
import WazaInfo from './components/WazaInfo';
import VideoPlayerContainer from './components/VideoPlayerContainer';
import AriticleSection from './components/AriticleSection';

interface P {
  updater: Updater;
}

export default (props: P) => {
  const params = useParams();
  const mylocation = useLocation();

  let currentId: number = Number(params.wazaid);

  useEffect(() => {
    document.title = '烈剑爆炎刃 - WOTAGEIPEDIA';
    CurrentPageStorage.set('wotagei');
    props.updater.setUpdate();
  }, []); //sb eslint
  return (
    <>
      <WazaInfo />
      <Row>
        <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3} style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px' }}>
          <VideoPlayerContainer />

          <Row style={{ paddingTop: WinWidthStorage.value === WinSize.xs ? '0px' : '10px' }} justify="space-between" wrap>
            <Col span={WinWidthStorage.value > WinSize.xs ? 18 : 24}>
              <article style={{ padding: '10px' }}>
                <AriticleSection title="介绍" />
                <AriticleSection title="名称由来" />
                <AriticleSection title="要点" />
              </article>
            </Col>
            <Col span={WinWidthStorage.value > WinSize.xs ? 6 : 24}>
              <div style={{ border: 'solid 1px gray', borderRadius: '5px' }}>评论区</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
