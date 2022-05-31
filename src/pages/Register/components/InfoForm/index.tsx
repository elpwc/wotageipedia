import { Button, DatePicker, Form, Input, Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import moment from 'moment';
import { useState } from 'react';
import './index.css';

const { Option } = Select;

interface Props{
    username: string;
    onDone: () => void;
}

export default (props: Props) => {
  const [nick, setnick] = useState('');
  const [email, setemail] = useState('');
  const [emailVerify, setemailVerify] = useState('');
  const [birth, setbirth] = useState(moment());
  const [gender, setgender] = useState(0);



  return (
    <>
      <Form layout="vertical">
        <p className="titleTip">完善信息，不想填写的地方就留空吧</p>
        <FormItem label={'昵称'}>
          <Input
            value={nick}
            onChange={async e => {
              setnick(e.target.value);
            }}
            placeholder={'昵称'}
          />
        </FormItem>
        <FormItem label={'生日'}>
          <DatePicker onChange={e => {}} value={birth} />
        </FormItem>
        <FormItem label={'性别'}>
          <Select
            defaultValue={0}
            onChange={e => {
              setgender(e);
            }}
            value={gender}
          >
            <Option value={0}>不公开</Option>
            <Option value={1}>男</Option>
            <Option value={2}>女</Option>
            <Option value={3}>第三性别</Option>
          </Select>
        </FormItem>
        <FormItem label={'绑定邮箱（忘记密码找回时用）'}>
          <Input
            value={email}
            onChange={async e => {
              setemail(e.target.value);
            }}
            placeholder={'邮箱'}
          />
          <Input.Group style={{ paddingTop: '10px' }} compact>
            <Input
              style={{ width: 'calc(100% - 200px)' }}
              value={emailVerify}
              onChange={e => {
                setemailVerify(e.target.value);
              }}
            />
            <Button
              type="primary"
              onClick={() => {
                // 请求发送验证邮件
              }}
            >
              发送验证码
            </Button>
          </Input.Group>
        </FormItem>
      </Form>
        <Button onClick={async () => {
            props.onDone();
        }} type="primary">
          完成注册
        </Button>
    </>
  );
};
