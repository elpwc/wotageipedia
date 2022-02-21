// 防止运行openai报错React nis not defined，不要去掉
//@ts-ignore
import React from "react";

export default {
  header: {
    home: '主页',
    wotagei: '副歌技',
    chikagei: '地下艺',
    bbs: '讨论区',
    kaiwaimap: '界隈地图',
    user: '用户设置',
  },

  demoTips: {
    start: {
      title: '预览版须知',
      alert1: (
        <span>
          这是wota艺百科(仮)的<b>demo预览网页</b>，仅用来展示最终界面效果，<b>尚不包含任何功能。</b>
          <br />
          (本站出现的视频皆为外链功能引入，不构成侵权)
          <br />
          <br /> <hr />
          <span style={{ backgroundColor: 'purple', padding: '5px', color: '#FFF', borderRadius: '5px' }}>介绍</span>
          <br />
          wota艺百科(仮)旨在创造一个将各个视频网站上零散分布的技连视频中的技系统地登记、归类在一起，能方便又快捷地按照<span style={{ fontWeight: 'bold' }}>「技名・系・动作(?)・本家・...」</span>
          等各种信息查技的网站。
          <br />
          <br />
          同时，光棒一览、地下艺查询、用曲查询、界隈查询、揭示板等附加功能也在开发计划中。
          <br />
          <br />
          <hr />
          <span style={{ backgroundColor: '#00b5e5', padding: '5px', color: '#FFF', borderRadius: '5px' }}>事前问卷</span>
          <br />
          <span>包含了针对期望功能、网站名字等调查的问卷，会帮助开发者设计出更符合打师们需求的wota艺查询网站。记得浏览完预览网页后，点页面右侧参加问卷</span>
          <br />
          <a href="https://www.wjx.cn/vj/PlWjk8b.aspx" target="_blank" style={{ fontWeight: 'bold', fontSize: '110%' }}>
            问卷: https://www.wjx.cn/vj/PlWjk8b.aspx
          </a>
          <br />
          <br />
          <hr />
          <span style={{ backgroundColor: 'orange', padding: '5px', color: '#FFF', borderRadius: '5px' }}>协助开发</span>
          <br />
          <span>wota艺百科(仮)是尚处早期开发阶段的非盈利项目，现在开发者非常不足，若你看到了这条信息并有相关技术能力，想为wota艺的规范化做出贡献，请联系到：</span>
          <br />
          <ul>
            <li>QQ: 2575784532</li>
            <li>Email: elpwc@hotmail.com</li>
            <li>Twitter: @elpwc</li>
            <li>Telegram: @elpwc</li>
          </ul>
          <div style={{ borderRadius: '3px', border: 'solid 1px black', padding: '3px' }}>
            <span>
              技术栈：
              <br />
            </span>
            <span style={{ color: '#FFF', borderRadius: '3px', backgroundColor: 'gray' }}>前端</span> React + TypeScript
            <br />
            <span style={{ color: '#FFF', borderRadius: '3px', backgroundColor: 'gray' }}>后端</span> Python3.9 + FastAPI + MySQL + Redis, nginx + CentOS
            <br />
          </div>
          <br />
          <span style={{ textAlign: 'right' }}> ——wniko, 青岛 西海势, 2022 1</span>
        </span>
      ),
    },
    survey: (
      <span>
        事前问卷
        <br />
        协助开发
      </span>
    ),
  },

  components: {},

  utils: {
    langs: {
      zh_cn: '简体中文',
      zh_tw: '繁体中文',
      ja: '日语',
      ko: '韩语',
      en: '英语',
      vi: '越南语',
      id: '印尼语',
      ms: '马来语',
    },
  },
};
