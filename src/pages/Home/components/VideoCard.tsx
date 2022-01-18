const VideoCard = () => {
    return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
    <iframe src='//player.bilibili.com/player.html?aid=292830485&bvid=BV1bf4y1J7H9&cid=403718252&page=1&t=33' width='100%' scrolling='no' frameBorder='no' allowFullScreen></iframe>
    <div className='videoTitleP'>
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <span className='wazaMainName'>霞之门</span>&nbsp;
        <span className='wazaAfterName'>霞ヶ門</span>&nbsp;
      </div>
    </div>
    <p className='videoTitleP' style={{ color: 'gray', fontSize: '50%' }}>
      <span>本家: ゆーきち</span>
    </p>
  </div>
}

export default VideoCard;