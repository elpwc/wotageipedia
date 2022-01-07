import { useEffect } from 'react';
import { CurrentPageStorage } from '../../dataStorage/storage';
import Updater from '../../utils/Updater';

interface P {
  updater: Updater;
}

export default (props: P) => {
  useEffect(() => {
    CurrentPageStorage.set('wotagei');
    props.updater.setUpdate();
  }, []);
  return <>wotagei</>;
};
