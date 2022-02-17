import { Row, Col, Tag } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { WinWidthStorage } from '../../../dataStorage/storage';
import WinSize from '../../../interfaces/enums/WinSize';
import VideoCard from './VideoCard';

const MainContent = () => {
  const navigate = useNavigate();
  return (
    <>
      {WinWidthStorage.value !== WinSize.xs ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ marginTop: '0', fontSize: '120%' }}>在此检索 副歌技 · 系属 · 界隈 · 打师</p>

            <p style={{ color: 'gray' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
              </svg>
              摇骰子
            </p>
          </div>
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
              placeholder="天羽羽斩剑"
            />
            <Link to="./" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
              <span style={{ color: 'black', fontSize: '150%' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}

      <div
        className="dailywaza"
        style={{ marginTop: WinWidthStorage.value !== WinSize.xs ? '30px' : 'revert' }}
        onClick={() => {
          navigate('./wotagei/1');
        }}
      >
        <span className="videoTitle">每日一技</span>
        <Row justify="space-between" style={{ justifyContent: 'center' }}>
          <Col span={WinWidthStorage.value > WinSize.xs ? 12 : undefined}>
            <iframe src="//player.bilibili.com/player.html?aid=849727562&bvid=BV1nL4y1H7rx&cid=458304760&page=46&t=2" width="100%" scrolling="no" frameBorder="no" allowFullScreen></iframe>
          </Col>
          <Col span={WinWidthStorage.value > WinSize.xs ? 12 : undefined}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', marginLeft: '10px' }}>
              <div className="videoTitleP">
                <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                  <span className="wazaMainName">烈剑爆炎刃</span>&nbsp;
                  <span className="wazaAfterName">烈剣爆炎刃</span>&nbsp;
                </div>
                <div>
                  <Tag>烈系</Tag>
                  <Tag>烈剑系</Tag>
                  <Tag>爆炎刃</Tag>
                  <Tag>剑系</Tag>
                </div>
              </div>
              <p className="videoTitleP" style={{ color: 'gray', fontSize: '50%' }}>
                <span>本家: ななせ</span>
                &nbsp;&nbsp;&nbsp;
                <span>演出: ななせ</span>
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div style={{ marginTop: '30px' }}>
        <span className="videoTitle">最新上传</span>

        <Row justify="space-around">
          <Col span={WinWidthStorage.value > WinSize.xs ? 11 : undefined}>
            <VideoCard title="霞之门" secondTitle="霞ヶ門" honke="ゆーきち" url="//player.bilibili.com/player.html?aid=292830485&bvid=BV1bf4y1J7H9&cid=403718252&page=1&t=33" />
          </Col>
          <Col span={WinWidthStorage.value > WinSize.xs ? 12 : undefined}>
            <VideoCard title="Gate" secondTitle="ゲート" honke="とらぺ" url="//player.bilibili.com/player.html?aid=842980636&bvid=BV1H54y167ec&cid=260820916&page=1&t=61.6" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MainContent;
