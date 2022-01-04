import { useEffect } from 'react';
import { CurrentPageStorage } from '../dataStorage/storage';

interface P {
  update: boolean;
  setUpdate: () => void;
}

export default function Home(props: P) {
  useEffect(() => {
    CurrentPageStorage.set('home');
    props.setUpdate();
  }, []);
  return <>home</>;
}
