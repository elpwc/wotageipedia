export default {
  header: {
    home: 'ホーム',
    wotagei: 'サビ技',
    chikagei: '地下芸',
    bbs: '掲示板',
    kaiwaimap: '界隈地図',
    user: 'アカウント',
  },
  demoTips: {
    start: {
      title: 'DEMO版お知らせ',
      alert1: (
        <span>
          本ページはヲタ芸ペディア(仮)の最終仕様を展示するための<b>DEMOページ</b>です。<b>いかなる機能も含みません</b>
          <br />
          (当サイトの動画はすべて埋め込み機能によって作動しているため。著作権には抵触していません。)
          <br />
          <br /> <hr />
          <span style={{ backgroundColor: 'purple', padding: '5px', color: '#FFF', borderRadius: '5px' }}>概要</span>
          <br />
          ヲタ芸ペディア（仮）は各動画サイトに投稿されたヲタ芸動画にある技を系統的に登録・分類し、<span style={{ fontWeight: 'bold' }}>「技名・系・振付(?)・本家・...」</span>
          など様々な方法で技を簡単に検索できるようにすることを旨としたウェブサイトです。
          <br />
          <br />
          又、サイリウム一覧、地下芸検索、ヲタ芸曲一覧、界隈一覧、掲示板などの機能追加も計画しております。
          <br />
          <br />
          <hr />
          {/*
    <span style={{backgroundColor: '#00b5e5', padding: '5px', color: '#FFF', borderRadius: '5px'}}>事前アンケート</span><br/>
    <span>包含了针对期望功能、网站名字等调查的问卷，会帮助开发者设计出更符合打师们需求的wota艺查询网站。记得浏览完预览网页后，点页面右侧参加问卷</span><br/>
    <a href="https://www.wjx.cn/vj/PlWjk8b.aspx" target="_blank" style={{fontWeight: 'bold', fontSize: '110%'}}>问卷: https://www.wjx.cn/vj/PlWjk8b.aspx</a><br /><br />
    
    <hr />　//日本語アンケートはツイッターで
    */}
          <span style={{ backgroundColor: 'orange', padding: '5px', color: '#FFF', borderRadius: '5px' }}>ご支援のお願い</span>
          <br />
          <span>
            ヲタ芸ペディア（仮）は開発し始まったばかりで、かつ非営利プロジェクトなので、人手が不足しています。ヲタ芸の規範化のために、技術を持っている打ち師の皆様からのご支援・ご協力をお待ちしております。
          </span>
          <br />
          連絡先：
          <br />
          <ul>
            <li>Email: elpwc@hotmail.com</li>
            <li>Twitter: @elpwc</li>
            <li>Telegram: @elpwc</li>
            <li>QQ: 2575784532</li>
          </ul>
          <div style={{ borderRadius: '3px', border: 'solid 1px black', padding: '3px' }}>
            <span>
              技術スタック：
              <br />
            </span>
            <span style={{ color: '#FFF', borderRadius: '3px', backgroundColor: 'gray' }}>フロントエンド</span> React + TypeScript
            <br />
            <span style={{ color: '#FFF', borderRadius: '3px', backgroundColor: 'gray' }}>バックエンド</span> Python3.9 + FastAPI + MySQL + Redis, nginx + CentOS
            <br />
          </div>
          <br />
          <span style={{ textAlign: 'right' }}> ——うにこ, 西海勢, 2022 1</span>
        </span>
      ),
    },
    survey: '紹介\n開発協力',
  },

  components: {},

  utils: {
    langs: {
      zh_cn: '簡体字',
      zh_tw: '繁体字',
      ja: '日本語',
      ko: '韓国語',
      en: '英語',
      vi: 'ベトナム語',
      id: 'インドネシア語',
      ms: 'マレー語',
    },
  },
};
