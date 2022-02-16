import { Button, Col, Row } from 'antd';
import { WinWidthStorage } from '../../../dataStorage/storage';
import { CyalumeSVG } from '../../../resource/svgs';
import WinSize from '../../../utils/enums/WinSize';

const RightSide = () => {
  return (
    <>
      <Row justify='space-between' wrap>
        <Col>
          <p style={{ fontSize: '120%', fontWeight: 'bold', fontStyle: 'italic' }}>WotageiPedia至今已经收录了...</p>
          <ul className='currentList' style={{ paddingLeft: WinWidthStorage.value === WinSize.xs ? 0 : 'revert' }}>
            <li>1421 个副歌技</li>
            <li>1982 个副歌技视频</li>
            <li>52 个副歌技系属</li>
            <li>212 位打师</li>
            <li>52 个界隈</li>
          </ul>
        </Col>
        <Col>
          <Row wrap justify='space-between'>
            <Col style={{ width: '100%' }}>
              <div className='uploadLinkList'>
                <span style={{ color: 'orange' }}>
                  <CyalumeSVG />
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
            </Col>
            <Col style={{ width: '100%' }}>
              <div className='uploadLinkList'>
                <span style={{ color: 'blue' }}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-person-plus-fill' viewBox='0 0 16 16'>
                    <path d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                    <path fillRule='evenodd' d='M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z' />
                  </svg>
                </span>
                <span>新增打师</span>
              </div>
              <div className='uploadLinkList'>
                <span style={{ color: 'purple' }}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-pin-map-fill' viewBox='0 0 16 16'>
                    <path
                      fillRule='evenodd'
                      d='M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z'
                    />
                    <path fillRule='evenodd' d='M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z' />
                  </svg>
                </span>
                <span>新增界隈</span>
              </div>
            </Col>
          </Row>
          <div>
            <Button shape='round'>采购光棒</Button>
            <Button shape='round'>伤痛贴</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RightSide;
