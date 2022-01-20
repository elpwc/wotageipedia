/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from 'react';
import { CurrentPageStorage, DeviceStorage, WinWidthStorage } from '../../dataStorage/storage';
import { Navigate, useLocation, useParams } from 'react-router';
import { Row, Col, Tag, Button } from 'antd';
import * as wanakana from 'wanakana';
import Updater from '../../utils/Updater';
import './index.css';
import WinSize from '../../utils/enums/WinSize';
import { PlusOutlined,PlayCircleFilled } from '@ant-design/icons';

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

  const [rotate, setRotate] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px', paddingBottom: '30px', textAlign: 'center' }}>
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
          </Col>
          <Col style={{ marginTop: '10px' }}>
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

      <Row>
        <Col span={DeviceStorage.value === 1 ? 24 : 18} offset={DeviceStorage.value === 1 ? 0 : 3} style={{ /*backgroundColor: 'white', boxShadow: '0 0 5px 0 gray',*/ paddingBottom: '100px' }}>

          <Row style={{ marginTop: WinWidthStorage.value === WinSize.xs ? '0px' : '0px', padding: WinWidthStorage.value === WinSize.xs ? '0px' : '3px', backgroundColor: '#252525' }} justify='space-between' wrap>
            <Col span={WinWidthStorage.value > WinSize.xs ? 18 : 24}>
              <div>
                <div style={{
                  transform: (rotate ? ((fullscreen && WinWidthStorage.value === WinSize.xs) ? 'rotateX(180deg)' : 'rotateY(180deg)') : '') + (fullscreen && WinWidthStorage.value === WinSize.xs ? 'rotate(90deg)' : ''),
                  top: (fullscreen ? WinWidthStorage.value === WinSize.xs ? `${((window.innerHeight - 100) - window.innerWidth) / 2 + 50}px` : '0' : 'inherit'),
                  left: (fullscreen ? WinWidthStorage.value === WinSize.xs ? `${((window.innerHeight - 100) - window.innerWidth) / -2}px` : '0' : 'inherit'),
                  width: (fullscreen ? WinWidthStorage.value === WinSize.xs ? `${window.innerHeight - 100}px` : '100%' : '100%'),
                  height: (fullscreen ? WinWidthStorage.value === WinSize.xs ? `${window.innerWidth}px` : '100%' : (() => {
                    switch (WinWidthStorage.value) {
                      case WinSize.xs:
                        return '360px';
                      case WinSize.sm:
                        return '400px';
                      case WinSize.md:
                        return '450px';
                      case WinSize.lg:
                        return '500px';
                      default:
                        return '360px';
                    }
                  })()),
                }} className={fullscreen ? WinWidthStorage.value > WinSize.xs ? 'video-fullscreen' : 'video-fullscreen-phone' : ''}
                  id='video-container'>

                  <iframe title='video' src='//player.bilibili.com/player.html?aid=849727562&bvid=BV1nL4y1H7rx&cid=458304760&page=46&t=2' width='100%' height='100%' scrolling='no' frameBorder='no' allow='fullscreen' allowFullScreen></iframe>

                </div>
              </div>
            </Col>
            <Col span={WinWidthStorage.value > WinSize.xs ? 6 : 24}>
              <div>

                <div style={{ backgroundColor: '#505050', display: 'flex', justifyContent: 'space-between', flexWrap:'wrap' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <p style={{ color: 'white', margin: '0', marginRight: '10px' }}>视频列表</p>
                    <div className='button-list'>
                      <button><PlusOutlined />添加视频</button>
                    </div>
                  </div>
                  <div className='button-list' style={{
                    position: fullscreen ? 'fixed' : 'inherit', zIndex: 2,
                    transform: (fullscreen && (WinWidthStorage.value === WinSize.xs)) ? 'rotate(90deg)' : '',
                    top: fullscreen ? WinWidthStorage.value === WinSize.xs ? 'auto' : '50px' : 'auto',

                    bottom: fullscreen ? WinWidthStorage.value === WinSize.xs ? '150px' : 'auto' : 'auto',
                    right: fullscreen ? WinWidthStorage.value === WinSize.xs ? '-50px' : '10px' : 'auto'
                  }}>
                    <button onClick={() => { setRotate(!rotate) }}>{rotate ? '退出镜像' : '镜像'}</button>
                    <button onClick={() => { setFullscreen(!fullscreen) }}>{fullscreen ? '退出全屏' : '网页全屏'}</button>
                  </div>
                </div>

                <div style={{ padding: '10px' }}>
                  <div className='videolist-item'>
                    <div>

                    <p><span style={{ color: '#40a9ff' }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 950 950"><path d="M711.7824 385.706667H317.860978c-11.963733 0-22.038756 9.12384-22.038756 21.379982v261.158684c0 12.255004 10.073884 21.251413 22.038756 21.251414h393.921422c11.964871 0 20.946489-8.995271 20.946489-21.251414V407.086649c0-12.25728-8.983893-21.379982-20.946489-21.379982z m-367.101724 96.493795l111.015253-21.255964 8.388835 41.665422-109.899093 21.253689-9.504995-41.663147z m171.137706 126.95552c-34.116267 37.19168-69.907342-11.744142-69.907342-11.744142l18.176-11.744142s24.327964 43.902293 51.453724-14.262045c26.006187 56.486116 54.809031 14.821831 54.809032 15.099449l16.500053 10.62912c-0.002276-0.003413-30.762098 49.212302-71.031467 12.02176z m164.706987-85.291235l-110.176711-21.251414 8.669866-41.66656 110.73536 21.255965-9.228515 41.662009z"></path><path d="M512 115.456c-219.005156 0-396.544 177.539982-396.544 396.542862 0 219.005156 177.539982 396.545138 396.544 396.545138S908.544 731.004018 908.544 512c0-219.005156-177.538844-396.544-396.544-396.544z m208.828871 626.904178c-27.71968-0.877227-37.05856 0-37.05856 0s-2.042311 31.806578-29.177173 32.38912c-27.428409 0.291271-31.514169-22.177564-32.391396-30.63808-16.630898 0-216.512284 0.873813-216.512284 0.873813s-3.500942 29.47072-30.63808 29.47072c-27.428409 0-28.889316-24.511147-30.63808-29.47072-17.801671 0-41.729138-0.584818-41.729138-0.584818s-60.109938-12.541724-67.987911-90.744604c0.874951-78.201742 0-232.8576 0-232.8576s-5.544391-72.071396 66.239147-92.790329c22.173013-0.873813 70.03136-1.16736 125.471857-1.16736l-51.065742-49.605973s-7.877973-9.921422 5.544391-21.009067c13.717049-11.086507 14.296178-6.568391 18.966756-3.35872 4.66944 3.208533 76.160569 73.672249 76.160569 73.672249h-9.629014c27.427271 0 55.732907 0.444871 82.868907 0.444871 10.502827-10.505102 70.322631-69.082453 74.407253-71.99744 4.668302-2.9184 5.542116-7.841564 18.967894 3.244942 13.422364 11.087644 5.543253 21.028409 5.543253 21.028409l-49.898382 48.155307c68.572729 0.584818 121.387236 0.878364 121.387235 0.878364s67.694364 14.885547 69.446543 92.500196c-0.874951 77.6192 0.291271 233.732551 0.291271 233.732551s-3.7888 75.867022-68.569316 87.834169z" ></path></svg>
                    </span>
                      【WOTA艺】技单60发!!【Fly-N】（搬运）</p>
                    <p><span>开始时间: 00:00</span><span>演出：nanase</span></p>
                    </div>
                    <div className='playicon'>

                    <PlayCircleFilled />
                    </div>
                      
                  </div>
                  <div className='videolist-item'>
                    <div>
                    <p><span style={{ color: 'red' }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                    </span>
                      技連60発!!【Fly-N】</p>
                    <p><span>开始时间: 00:00</span><span>演出：nanase</span></p>
                    </div>
                    <div className='playicon'>

                    <PlayCircleFilled />
                    </div>
                      
                  </div>
                </div>
              </div>
            </Col>
          </Row>


          <Row style={{ paddingTop: WinWidthStorage.value === WinSize.xs ? '0px' : '10px' }} justify='space-between' wrap>
            <Col span={WinWidthStorage.value > WinSize.xs ? 18 : 24}>
              <article style={{ padding: '10px' }}>

                <section>
                  <div className='sectionTitle'><span>介绍</span><span>
                    <button style={{ border: 'none', backgroundColor: 'transparent' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                    </button>
                  </span></div>
                  <hr />
                  <p>rua</p>
                </section>

                <section>                  <div className='sectionTitle'><span>名称由来</span><span>
                  <button style={{ border: 'none', backgroundColor: 'transparent' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                  </button>
                </span></div>
                  <hr />
                  <p>bulabula</p>
                </section>

                <section>                  <div className='sectionTitle'><span>要点</span><span>
                  <button style={{ border: 'none', backgroundColor: 'transparent' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                  </button>
                </span></div>
                  <hr />
                  <p>rua</p>
                </section>
              </article>
            </Col>
            <Col span={WinWidthStorage.value > WinSize.xs ? 6 : 24}>
              <div style={{border: 'solid 1px gray', borderRadius: '5px'}}>
                评论区
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

    </>
  );
};
