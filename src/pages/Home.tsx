import { Col, Row, Space, Tag } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CurrentPageStorage } from '../dataStorage/storage';
import './Home.css';

interface P {
  update: boolean;
  setUpdate: () => void;
}

export default function Home(props: P) {
  useEffect(() => {
    CurrentPageStorage.set('home');
    props.setUpdate();
  }, []);
  return (
    <>
      <Row justify='space-around' style={{ marginTop: '30px' }}>
        <Col span={12}>
          <Row justify='space-between' style={{ marginTop: '0' }}>
            <Col span={12}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <span className='videoTitle'>每日一技</span>
                <p className='videoTitleP'>
                  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                    <span className='wazaMainName'>霞之门</span>&nbsp;
                    <span className='wazaAfterName'>霞ヶ門</span>&nbsp;
                    <div>
                      <Tag>门系</Tag>
                    </div>
                  </div>
                </p>
                <p className='videoTitleP' style={{ color: 'gray', fontSize: '50%' }}>
                  <span>本家: ゆーきち</span>
                  &nbsp;&nbsp;&nbsp;
                  <span>演出: ゆーきち</span>
                </p>
                <iframe src='//player.bilibili.com/player.html?aid=292830485&bvid=BV1bf4y1J7H9&cid=403718252&page=1&t=33' width='90%' scrolling='no' frameBorder='no' allowFullScreen></iframe>
              </div>
            </Col>
            <Col span={12}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <span className='videoTitle'>最新上传</span>
                <p className='videoTitleP'>
                  <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                    <span className='wazaMainName'>烈剑爆炎刃</span>&nbsp;
                    <span className='wazaAfterName'>烈剣爆炎刃</span>&nbsp;
                    <div>
                      <Tag>烈系</Tag>
                      <Tag>烈剑系</Tag>
                      <Tag>爆炎刃系</Tag>
                    </div>
                  </div>
                </p>
                <p className='videoTitleP' style={{ color: 'gray', fontSize: '50%' }}>
                  <span>本家: ななせ</span>
                  &nbsp;&nbsp;&nbsp;
                  <span>演出: ななせ</span>
                </p>
                <iframe src='//player.bilibili.com/player.html?aid=849727562&bvid=BV1nL4y1H7rx&cid=458304760&page=46&t=2' width='90%' scrolling='no' frameBorder='no' allowFullScreen></iframe>
              </div>
            </Col>
          </Row>
          <p style={{ marginTop: '5%', fontSize: '120%' }}>在此检索 副歌技 · 系属 · 界隈 · 打师</p>
          <div
            style={{
              border: 'solid 1px gray',
              boxShadow: '0 0 5px 0 gray',
              height: '50px',
              paddingRight: '10px',
              borderRadius: '10px',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <input
              style={{ width: '90%', outline: 'none', fontSize: '150%', border: 'none', backgroundColor: 'white', marginLeft: '10px', marginRight: '10px', color: 'black' }}
              placeholder='天羽羽斩剑'
            />
            <Link to='./' style={{ display: 'flex', flexDirection: 'column-reverse' }}>
              <span style={{ color: 'black', fontSize: '150%' }}>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
                  <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                </svg>
              </span>
            </Link>
          </div>
        </Col>
        <Col span={8}>
          <p style={{ fontSize: '120%', fontWeight: 'bold', fontStyle: 'italic' }}>WotageiPedia至今已经收录了...</p>
          <ul className='currentList'>
            <li>1421 个副歌技</li>
            <li>1982 个副歌技视频</li>
            <li>52 个副歌技系属</li>
            <li>212 位打师</li>
            <li>52 个界隈</li>
          </ul>

          <div>
            <div className='uploadLinkList'>
              <span style={{ color: 'orange' }}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-magic' viewBox='0 0 16 16'>
                  <path d='M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z' />
                </svg>
              </span>

              <span>新增副歌技</span>
            </div>
            <div className='uploadLinkList'>
              <span style={{ color: 'red' }}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-play-btn-fill' viewBox='0 0 16 16'>
                  <path d='M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z' />
                </svg>
              </span>
              <span>新增视频</span>
            </div>
            <div className='uploadLinkList'>
              <span style={{ color: 'blue' }}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-person-plus-fill' viewBox='0 0 16 16'>
                  <path d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                  <path fill-rule='evenodd' d='M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z' />
                </svg>
              </span>
              <span>新增打师</span>
            </div>
            <div className='uploadLinkList'>
              <span style={{ color: 'purple' }}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-pin-map-fill' viewBox='0 0 16 16'>
                  <path fill-rule='evenodd' d='M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z' />
                  <path fill-rule='evenodd' d='M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z' />
                </svg>
              </span>
              <span>新增界隈</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row justify='space-around' style={{ marginTop: '30px' }}>
        <Col span={10}></Col>
        <Col></Col>
        <Col span={10}></Col>
      </Row>
    </>
  );
}
