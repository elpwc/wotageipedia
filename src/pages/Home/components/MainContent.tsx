import { Row, Col, Tag } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { WinWidthStorage } from '../../../dataStorage/storage';
import { CursorSVG, SearchSVG } from '../../../resource/svgs';
import WinSize from '../../../utils/enums/WinSize';
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
              <CursorSVG />
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
                <SearchSVG />
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
