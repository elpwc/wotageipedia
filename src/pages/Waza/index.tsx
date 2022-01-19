/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from 'react';
import { CurrentPageStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useParams } from 'react-router';
import { Row, Col, Tag } from 'antd';
import * as wanakana from 'wanakana';
import Updater from '../../utils/Updater';
import './index.css';

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

export default (props: P) => {
  const params = useParams();
  const mylocation = useLocation();

  let currentId: number = Number(params.wazaid);

  useEffect(() => {
    document.title = '烈剑爆炎刃 - WOTAGEIPEDIA';
    CurrentPageStorage.set('wotagei');
    props.updater.setUpdate();
  }, []);//sb eslint
  return (
    <>
      <div style={{ width: '100%', height: 'fit-content', color: 'white', backgroundColor: '#0d0d0d' }}>
        <Row style={{ padding: '10px' }} justify='space-around' wrap>
          <Col span={15}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px', paddingBottom: '30px' , textAlign: 'center'}}>
              <p style={{ fontSize: '200%', fontWeight: 'bold', margin: 0 }}>烈剑爆炎刃</p>
              <br/>
              <p>
                <ruby>
                  烈剣爆炎刃<rp>(</rp>
                  <rt>れっけんばくえんにん</rt>
                  <rp>)</rp>
                </ruby>
              </p>
              <p>
                <span>
                  <a>ななせ </a>
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
            <hr/>
          </Col>
          <Col style={{marginTop: '10px'}}>
            <DetailItem title='别称'>
              <div>烈剑保研人</div>
            </DetailItem>
            <DetailItem title='相关技'>
              <div>
                <a>烈火爆炎刃</a>,&nbsp;<a>烈剑</a>,&nbsp;<a>烈心爆炎刃</a>
              </div>
            </DetailItem>
            <DetailItem title='日文'>烈剣爆炎刃</DetailItem>
            <DetailItem title='假名'>れっけんばくえんにん</DetailItem>
            <DetailItem title='罗马字'>{wanakana.toRomaji('れっけんばくえんにん')}</DetailItem>
            <DetailItem title='本家'>
              <a>ななせ</a>
            </DetailItem>
            <DetailItem title='作成时间'>2021年</DetailItem>
          </Col>
        </Row>
      </div>

      <Row style={{ paddingTop: '10px' }} justify='space-between' wrap>
        <Col span={12}>
            <div>
              
            </div>
        </Col>
        <Col >          <article>

<section>
  <p className='sectionTitle'>介绍</p>
  <hr/>
  <p>rua</p>
</section>

<section>
  <p className='sectionTitle'>名称由来</p>
  <hr/>
  <p>rua</p>
</section>
</article>
        </Col>
      </Row>
    </>
  );
};
