import { Checkbox, Form, Input, Radio } from 'antd';
import { useState } from 'react';

export default () => {
  const [origin, setorigin]: [string, any] = useState('bilibili');

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" size="small">
      <Form.Item label="" name="">
        <Radio.Group
          defaultValue={'bilibili'}
          onChange={e => {
            setorigin(e.target.value);
          }}
        >
          <Radio value="bilibili"> Bilibili </Radio>
          <Radio value="youtube"> YouTube </Radio>
          <Radio value="twitter"> Twitter </Radio>
          <Radio value="other"> 其他 </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="视频链接">
        <Input placeholder="" />
      </Form.Item>
      {origin === 'bilibili' ? (
        <Form.Item label="分P">
          <Input placeholder="" defaultValue={'1'}/>
        </Form.Item>
      ) : (
        <></>
      )}
      <Form.Item label="视频中开始时间">
        <Input placeholder="00:00" defaultValue={'00:00'}/>
      </Form.Item>
      <Form.Item label="演出者">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="原标题">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="补充说明">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item name="is_honke" valuePropName="checked">
        <Checkbox>是本家视频</Checkbox>
      </Form.Item>
      <Form.Item name="is_tutorial" valuePropName="checked">
        <Checkbox>是教学视频</Checkbox>
      </Form.Item>
    </Form>
  );
};
