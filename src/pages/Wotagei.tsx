import { useEffect } from 'react';
import { CurrentPageStorage } from '../dataStorage/storage';

interface P {
  update: boolean;
  setUpdate: () => void;
}

export default function Wotagei(props: P) {
  useEffect(() => {
    CurrentPageStorage.set('wotagei');
    props.setUpdate();
  }, []);
  return <>wotagei</>;
}
