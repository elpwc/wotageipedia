interface P {
  title: string;
  secondTitle: string;
  honke?: string;
  url?: string;
}

const VideoCard = (props: P) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <iframe src={props.url} width='100%' scrolling='no' frameBorder='no' allowFullScreen></iframe>
      <div className='videoTitleP'>
        <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
          <span className='wazaMainName'>{props.title}</span>&nbsp;
          <span className='wazaAfterName'>{props.secondTitle}</span>&nbsp;
        </div>
      </div>
      <p className='videoTitleP' style={{ color: 'gray', fontSize: '50%' }}>
        {props.honke ? <span>本家: {props.honke}</span> : <></>}
      </p>
    </div>
  );
};

export default VideoCard;
