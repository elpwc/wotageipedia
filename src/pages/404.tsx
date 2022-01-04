import { Divider } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CurrentPageStorage, LangStorage } from '../dataStorage/storage';
import LangUtils from '../locales/langUtils';

interface P {
  title?: JSX.Element;
  text?: JSX.Element;
  returnText?: JSX.Element;
  returnRoute?: string;
}

export default function Page404(props: P) {
  useEffect(() => {
    CurrentPageStorage.set('404');
  }, []);
  let title = props.title ? props.title : <>这个页面不存在捏</>;
  let text = props.text ? props.text : <>如果你确信网址没有问题，那大概是因为已经被删了或者改了位置了8</>;
  let returnText = props.returnText ? props.returnText : <>👉返回主页👈</>;
  let returnRoute = props.returnRoute ? props.returnRoute : `/${LangUtils.LangToEnumStr(LangStorage.value).replace('_', '-')}`;

  return (
    <>
      <div style={{ backgroundColor: 'white', borderRadius: '5px', marginTop: '10px' }}>
        <div style={{ padding: '60px 30px' }}>
          <p style={{ fontSize: '50px', color: 'red' }}>404</p>
          <Divider />
          <p>
            {title}
            <br />
            {text}
          </p>
          <Link to={returnRoute as string}>{returnText}</Link>
        </div>
      </div>
    </>
  );
}
