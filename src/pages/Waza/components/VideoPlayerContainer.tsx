import { Row, Col } from 'antd';
import { memo, useCallback, useState } from 'react';
import { WinWidthStorage } from '../../../dataStorage/storage';
import WinSize from '../../../interfaces/enums/WinSize';
import { PlusOutlined, PlayCircleFilled, FullscreenExitOutlined, FullscreenOutlined, SplitCellsOutlined, StarFilled, HeartFilled, ShareAltOutlined, LogoutOutlined } from '@ant-design/icons';
import VideoListItem from './VideoListItem';
import VideoSites from '../../../interfaces/enums/VideoSites';

const VideoPlayerContainer = () => {
  const [rotate, setRotate] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const getVideoContainerHight = useCallback(() => {
    switch (WinWidthStorage.value) {
      case WinSize.xs:
        return '250px';
      case WinSize.sm:
        return '400px';
      case WinSize.md:
        return '450px';
      case WinSize.lg:
        return '500px';
      default:
        return '360px';
    }
  }, [WinWidthStorage.value]);

  return (
    <Row style={{ marginTop: WinWidthStorage.value === WinSize.xs ? '0px' : '0px', padding: WinWidthStorage.value === WinSize.xs ? '0px' : '3px' }} justify="space-between" wrap>
      <Col span={WinWidthStorage.value > WinSize.xs ? 18 : 24}>
        <div style={{ backgroundColor: /*'#0d0d0d'*/ 'white', borderRadius: '3px', boxShadow: '0 0 5px 0 gray', padding: '2px' }}>
          <div
            className="button-list"
            style={{
              position: fullscreen ? 'fixed' : 'inherit',
              zIndex: 3,
              transform: fullscreen && WinWidthStorage.value === WinSize.xs ? 'rotate(90deg)' : '',
              top: fullscreen ? (WinWidthStorage.value === WinSize.xs ? `${(window.innerHeight - 100) / 2 + 50}px` : '50px') : 'auto',
              left: fullscreen ? (WinWidthStorage.value === WinSize.xs ? `${window.innerWidth / 2 - 120}px` : '10px') : 'auto',
              width: fullscreen ? (WinWidthStorage.value === WinSize.xs ? `${window.innerHeight - 100}px` : '100%') : '100%',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <button
                onClick={() => {
                  setRotate(!rotate);
                }}
              >
                <SplitCellsOutlined />
                {rotate ? '退出镜像' : '镜像'}
              </button>
              <button
                onClick={() => {
                  setFullscreen(!fullscreen);
                }}
              >
                {fullscreen ? (
                  <>
                    <FullscreenExitOutlined />
                    退出全屏
                  </>
                ) : (
                  <>
                    <FullscreenOutlined />
                    网页全屏
                  </>
                )}
              </button>

              <button onClick={() => {}}>
                <LogoutOutlined />
                前往源页面
              </button>
              <button onClick={() => {}}>
                <ShareAltOutlined />
                分享
              </button>
              <a>报告错误</a>
            </div>
            <div>
              <button onClick={() => {}}>
                <span style={{ color: '#ddc800' }}>
                  <StarFilled />
                </span>
                收藏
              </button>
              <button onClick={() => {}}>
                <span style={{ color: '#ff8197' }}>
                  <HeartFilled />
                </span>
                看射了!🥵
              </button>
            </div>
            {/*button-list*/}
          </div>

          <div
            style={{
              transform:
                (rotate ? (fullscreen && WinWidthStorage.value === WinSize.xs ? 'rotateX(180deg)' : 'rotateY(180deg)') : '') +
                (fullscreen && WinWidthStorage.value === WinSize.xs ? 'rotate(90deg)' : ''),
              top: fullscreen ? (WinWidthStorage.value === WinSize.xs ? `${(window.innerHeight - 100 - window.innerWidth) / 2 + 50}px` : '50px') : 'inherit',
              left: fullscreen ? (WinWidthStorage.value === WinSize.xs ? `${(window.innerHeight - 100 - window.innerWidth) / -2}px` : '0') : 'inherit',
              width: fullscreen ? (WinWidthStorage.value === WinSize.xs ? `${window.innerHeight - 100}px` : '100%') : '100%',
              height: fullscreen ? (WinWidthStorage.value === WinSize.xs ? `${window.innerWidth}px` : 'calc( 100% - 50px )') : getVideoContainerHight(),
            }}
            className={fullscreen ? (WinWidthStorage.value > WinSize.xs ? 'video-fullscreen' : 'video-fullscreen-phone') : ''}
            id="video-container"
          >
            <iframe
              title="video"
              src="//player.bilibili.com/player.html?aid=849727562&bvid=BV1nL4y1H7rx&cid=458304760&page=46&t=2"
              width="100%"
              height="100%"
              scrolling="no"
              frameBorder="no"
              allow="fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Col>
      <Col span={WinWidthStorage.value > WinSize.xs ? 6 : 24}>
        <div
          style={{
            overflowY: 'scroll',
            height: `calc(${getVideoContainerHight()} + 30px)`,
            marginLeft: '5px',
            backgroundColor: 'rgb(199, 199, 199)',
            borderRadius: '5px',
            boxShadow: '0 0 3px 0 gray',
          }}
        >
          <div style={{ backgroundColor: '#0d0d0d', padding: '5px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', position: 'sticky', zIndex: 1, top: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <p style={{ color: 'white', margin: '0', marginRight: '10px', fontWeight: 'bold', fontSize: '110%' }}>
                <PlayCircleFilled /> 参考视频
              </p>
              <div className="button-list">
                <button>
                  <PlusOutlined />
                  添加视频
                </button>
              </div>
            </div>
          </div>

          <div style={{ padding: '5px' }}>
            <VideoListItem title="【WOTA艺】技单60发!!【Fly-N】（搬运）" performer="nanase" site={VideoSites.Bilibili} selected />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
            <VideoListItem title="技連60発!!【Fly-N】" performer="nanase" site={VideoSites.Youtube} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default VideoPlayerContainer;
