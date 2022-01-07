import { useEffect } from 'react';
import { CurrentPageStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useParams } from 'react-router';
import { Row, Col, Tag } from 'antd';
import * as wanakana from 'wanakana';
import Updater from '../../utils/Updater';

const DetailItem = ({ title, children }: { title: JSX.Element | string; children?: JSX.Element | string }) => {
  return (
    <>
      <Row>
        <Col span={8}>
          <span>{title}</span>
        </Col>
        <Col span={16}>
          <span>{children}</span>
        </Col>
      </Row>
    </>
  );
};

interface P {
  updater: Updater;
}

export default (props: P) =>{
  const params = useParams();
  const mylocation = useLocation();

  let currentId: number = Number(params.wazaid);

  useEffect(() => {
    CurrentPageStorage.set('waza');
    props.updater.setUpdate();
  }, []);
  return (
    <>
      <Row style={{paddingTop: '30px'}}>
        <Col span={6}>
          <div style={{ border: 'solid 5px gray', borderRadius: '5px', padding: '10px', paddingBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px', paddingBottom: '30px' }}>
              <p style={{ fontSize: '200%', fontWeight: 'bold', margin: 0 }}>烈剑爆炎刃</p>
              <p>
                <ruby>
                  烈剣爆炎刃<rp>(</rp>
                  <rt>れっけんばくえんにん</rt>
                  <rp>)</rp>
                </ruby>
              </p>
              <p>
                  
                <span>
                  <a>ななせ  </a>
                </span>
                <span>・本家 </span>
              </p>
              <div>
                <a>
                  <Tag>烈系</Tag>
                </a>
                <a>
                  <Tag>烈剑系</Tag>
                </a>
                <a>
                  <Tag>爆炎刃</Tag>
                </a>
                <a>
                  <Tag>剑系</Tag>
                </a>
              </div>
            </div>

            <hr />
            <DetailItem title='别称'>
              <div>
                  烈剑保研人
              </div>
            </DetailItem>
            <DetailItem title='相关技'>
              <div>
                <a>烈火爆炎刃</a>,&nbsp;<a>烈剑</a>,&nbsp;<a>烈心爆炎刃</a>
              </div>
            </DetailItem>
            <DetailItem title='日文'>烈剣爆炎刃</DetailItem>
            <DetailItem title='假名'>れっけんばくえんにん</DetailItem>
            <DetailItem title='罗马字'>{wanakana.toRomaji('れっけんばくえんにん')}</DetailItem>
            <DetailItem title='本家'><a>ななせ</a></DetailItem>
            <DetailItem title='作成时间'>2021年</DetailItem>
          </div>
        </Col>
        <Col span={18}>
            <article style={{paddingLeft: '20px', paddingRight: '20px'}}>
                <section>
                    <p>介绍</p>
                    <hr/>
                </section>
                
                <section>
                    <p>技名由来</p>
                    <hr/>
                </section>
                
                <section>
                    <p>要点</p>
                    <hr/>
                </section>
                <section>
                    <p>视频</p>
                    <hr/>
                </section>
            </article>
        </Col>
      </Row>
    </>
  );
}
