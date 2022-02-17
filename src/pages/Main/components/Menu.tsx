import { Link } from 'react-router-dom';
import { CurrentPageStorage } from '../../../dataStorage/storage';
import LangUtils from '../../../locales/langUtils';

const SiteMenu = () => {
  const L = LangUtils.selectLang();
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Link to="./" style={{ margin: 0 }}>
          <div className={'menu-item' + (CurrentPageStorage.value === 'home' ? ' menu-item-active' : '')}>
            <span>{L.header.home}</span>
          </div>
        </Link>

        {/* 
        <Link to="./wotagei">
          <div className={'menu-item' + (CurrentPageStorage.value === 'wotagei' ? ' menu-item-active' : '')}>
            <span>{L.header.wotagei}</span>
          </div>
        </Link>
        <Link to="./chikagei">
          <div className={'menu-item' + (CurrentPageStorage.value === 'chikagei' ? ' menu-item-active' : '')}>
            <span>{L.header.chikagei}</span>
          </div>
        </Link>
        */}

        
        <Link to="./bbs">
          <div className={'menu-item' + (CurrentPageStorage.value === 'bbs' ? ' menu-item-active' : '')}>
            <span>{L.header.bbs}</span>
          </div>
        </Link>
        <Link to="./kaiwaimap">
          <div className={'menu-item' + (CurrentPageStorage.value === 'kaiwaimap' ? ' menu-item-active' : '')}>
            <span>{L.header.kaiwaimap}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SiteMenu;
