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
    alert1: <span>
    ここはヲタ芸ペディア(仮)の最終的なページの模様を部分的に示すための<b>DEMOページ</b>です。<b>あらゆる機能を含みません</b><br/>
    (当サイトの動画がすべて埋め込み機能でできているのです。著作権侵害になりません。)<br/><br/>        <hr />
    <span style={{backgroundColor: 'purple', padding: '5px', color: '#FFF', borderRadius: '5px'}}>紹介</span><br/>
    ヲタ芸ペディア（仮）はそれぞれ動画サイトで散らばっているヲタ芸動画にある技を系統的に登録・分類し、<span style={{fontWeight: 'bold'}}>「技名・系・動作(?)・本家・...」</span>などいろんな情報で技を簡単に検索できるウェブサイトです。
    <br /><br />
    サイリウム一覧、地下芸検索、ヲタ芸曲一覧、界隈一覧、掲示板などの付加機能も計画中。
    <br/><br/>
    <hr />
    {/*
    <span style={{backgroundColor: '#00b5e5', padding: '5px', color: '#FFF', borderRadius: '5px'}}>事前アンケート</span><br/>
    <span>包含了针对期望功能、网站名字等调查的问卷，会帮助开发者设计出更符合打师们需求的wota艺查询网站。记得浏览完预览网页后，点页面右侧参加问卷</span><br/>
    <a href="https://www.wjx.cn/vj/PlWjk8b.aspx" target="_blank" style={{fontWeight: 'bold', fontSize: '110%'}}>问卷: https://www.wjx.cn/vj/PlWjk8b.aspx</a><br /><br />
    
    <hr />　//日本語アンケートはツイッターで
    */}
    <span style={{backgroundColor: 'orange', padding: '5px', color: '#FFF', borderRadius: '5px'}}>開発協力</span><br/>
    <span>ヲタ芸ペディア（仮）はまだ開発が始まったばかりの非営利プロジェクトで、人手がめっちゃ足りていません、もし技術を持っていてヲタ芸の規範化に貢献したい方であれば、協力していただければ嬉しいです。</span><br/>
    連絡先：<br />
    <ul>
      <li>
      Email: elpwc@hotmail.com 
      </li>
      <li>
      Twitter: @elpwc
      </li>
      <li>
      Telegram: @elpwc
      </li>
      <li>
      QQ: 2575784532
      </li>
    </ul>
    <div style={{borderRadius: '3px', border: 'solid 1px black', padding: '3px'}}>
    <span>技術スタック：<br /></span>
    <span style={{color:'#FFF', borderRadius: '3px', backgroundColor: 'gray'}}>フロントエンド</span> React + TypeScript + Ant Design<br/>
    <span style={{color:'#FFF', borderRadius: '3px', backgroundColor: 'gray'}}>バックエンド</span> Python3.9 + FastAPI + MySQL + Redis, nginx + CentOS<br/>
      </div>

    <br/>
    <span style={{textAlign:'right'}}> ——うにこ, 西海勢, 2022 1</span>
    </span>,
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
