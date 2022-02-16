import { Link } from 'react-router-dom';
import { CurrentPageStorage } from '../../../dataStorage/storage';
import LangUtils from '../../../locales/langUtils';
import { BBSSVG, CyalumeSVG, HomeSVG, MapSVG, UserSVG } from '../../../resource/svgs';

const PhoneMenuBar = () => {
  const L = LangUtils.selectLang();
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Link to="./" style={{ margin: 0 }} className={'menu-item-phone' + (CurrentPageStorage.value === 'home' ? ' menu-item-active-phone' : '')}>
          <div>
            <p>
              <HomeSVG />
            </p>
            <span>{L.header.home}</span>
          </div>
        </Link>

        <Link to="./wotagei" className={'menu-item-phone' + (CurrentPageStorage.value === 'wotagei' ? ' menu-item-active-phone' : '')}>
          <div>
            <p>
              <CyalumeSVG />
            </p>
            <span>{L.header.wotagei}</span>
          </div>
        </Link>

        <Link to="./bbs" className={'menu-item-phone' + (CurrentPageStorage.value === 'bbs' ? ' menu-item-active-phone' : '')}>
          <div>
            <p>
              <BBSSVG />
            </p>
            <span>{L.header.bbs}</span>
          </div>
        </Link>
        <Link to="./kaiwaimap" className={'menu-item-phone' + (CurrentPageStorage.value === 'kaiwaimap' ? ' menu-item-active-phone' : '')}>
          <div>
            <p>
              <MapSVG />
            </p>
            <span>{L.header.kaiwaimap}</span>
          </div>
        </Link>
        <Link to="./user" className={'menu-item-phone' + (CurrentPageStorage.value === 'user' ? ' menu-item-active-phone' : '')}>
          <div>
            <p>
              <UserSVG />
            </p>
            <span>{L.header.user}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PhoneMenuBar;
