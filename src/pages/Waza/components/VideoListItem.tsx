import { Row, Col } from 'antd';
import VideoSites from '../../../interfaces/enums/VideoSites';
import { BilibiliLogo, YoutubeLogo } from '../../../utils/svgs/videosite';

interface P {
  title: string;
  site: VideoSites;
  performer?: string;
  selected?: boolean;
}

const VideoListItem = (props: P) => {
  return (
    <Row className={'videolist-item' + (props.selected ? ' videolist-item-selected' : ' videolist-item-unselected')}>
      <Col span={24}>
        <Row>
          <Col span={4}>
            {(() => {
              switch (props.site) {
                case VideoSites.Bilibili:
                  return (
                    <span style={{ color: '#40a9ff' }}>
                      <BilibiliLogo />
                    </span>
                  );
                case VideoSites.Youtube:
                  return (
                    <span style={{ color: 'red' }}>
                      <YoutubeLogo />
                    </span>
                  );
                case VideoSites.Twitter:
                  return <span></span>;
                default:
                  return <span></span>;
              }
            })()}
          </Col>
          <Col span={20}>
            <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>{props.title}</p>
          </Col>
        </Row>
        <p>{props.performer ? <span>演出: {props.performer}</span> : <></>}</p>
      </Col>
    </Row>
  );
};

export default VideoListItem;
