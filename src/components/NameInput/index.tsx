import { Input, Select } from 'antd';
import { LangStorage } from '../../dataStorage/storage';
import LangUtils, { Lang } from '../../locales/langUtils';
import './index.css';

const { Option } = Select;

export default () => {
  return (
    <div className='nameBlock'>
        <Select defaultValue={LangStorage.value}>
          {LangUtils.LangNames.map((lang: [Lang, string]) => {
            return <Option value={lang[0]}>{lang[1]}</Option>;
          })}
        </Select>
        <Input placeholder='名称'/>
    </div>

    
  );
};
