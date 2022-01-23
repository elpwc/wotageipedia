import { Row, Col, Tag } from 'antd';
import { DeviceStorage, WinWidthStorage } from '../../../dataStorage/storage';
import WinSize from '../../../utils/enums/WinSize';

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

const WazaInfo = () => {
  return (
    <div style={{ width: '100%', height: 'fit-content', color: 'white', backgroundColor: '#0d0d0d' }}>
      <Row>
        <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3}>
          <Row style={{ paddingTop: WinWidthStorage.value === WinSize.xs ? '0px' : '10px' }} justify='space-around' wrap>
            <Col span={15}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center' }}>
                <p style={{ fontSize: '200%', fontWeight: 'bold', margin: 0 }}>烈剑爆炎刃</p>
                <br />
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
                  {['烈系', '烈剑系', '爆炎刃', '剑系'].map((kei) => {
                    return (
                      <a key={kei}>
                        <Tag>{kei}</Tag>
                      </a>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col style={{ marginTop: '10px' }}>
              <DetailItem title='别称'>
                <div>烈剑保研人</div>
              </DetailItem>
              <DetailItem title='相关技'>
                <div>
                  {['烈火爆炎刃', '烈剑', '烈心爆炎刃'].map((waza) => {
                    return (
                      <span>
                        <a key={waza}>{waza}</a>,&nbsp;
                      </span>
                    );
                  })}
                </div>
              </DetailItem>
              <DetailItem title='作成时间'>2021年</DetailItem>

              <div className='wazaStateSelector'>
                <button>想抠</button>
                <button>会打</button>
                <button>得意技</button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WazaInfo;
