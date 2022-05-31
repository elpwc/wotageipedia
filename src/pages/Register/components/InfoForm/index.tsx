import { Button, DatePicker, Form, Input, Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { useState } from 'react';

const { Option } = Select;

export default () => {
  const [nick, setnick] = useState('');
  const [email, setemail] = useState('');

  return (
    <>
      <Form layout="vertical">
        <p>完善信息，不想填写的请留空</p>
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
          <DatePicker />
        </FormItem>
        <FormItem label={'性别'}>
          <Select>
            <Option>男</Option>
            <Option>女</Option>
            <Option>第三性别</Option>
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
        </FormItem>
      </Form>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={async () => {}}>跳过</Button>
        <Button onClick={async () => {}} type="primary">
          完成注册
        </Button>
      </div>
    </>
  );
};
