import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { Row, Col } from 'antd';
import Updater from '../../interfaces/Updater';
import './index.css';
import LangUtils from '../../locales/langUtils';
import PostItem from './components/PostItem';

interface P {
  updater: Updater;
}

export default (props: P) => {
  const params = useParams();
  const navigate = useNavigate();
  const mylocation = useLocation();

  // let currentId: number = Number(params.wazaid);

  useEffect(() => {
    document.title = '御宅艺论坛 - WotageiPedia';
    CurrentPageStorage.set('bbs');
    props.updater.setUpdate();
  }, []);

  // i18n
  const l = LangUtils.selectLang();

  return (
    <Row>
      <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3} style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px' }}>
        <div>
          <button>发布新贴子</button>
        </div>
        <div>
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
          <PostItem title={'测试贴子2'} reply={0} hasImage={true} postTime={new Date()} postUser={'田所浩二'} />
        </div>
      </Col>
    </Row>
  );
};
