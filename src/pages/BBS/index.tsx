import { Row, Col } from 'antd';
import { useEffect } from 'react';
import { CurrentPageStorage, DeviceStorage } from '../../dataStorage/storage';
import Updater from '../../interfaces/Updater';
import PostItem from './components/PostItem';
import './index.css';

interface P {
  updater: Updater;
}

export default (props: P) => {
  useEffect(() => {
    // document.title = '';
    CurrentPageStorage.set('bbs');
    props.updater.setUpdate();
  }, []);

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
