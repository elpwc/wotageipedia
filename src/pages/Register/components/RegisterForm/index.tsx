import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { createUserApiUserPost, isexistUsernameApiUserExistGet } from '../../../../services/wotageipedia/user';
import md5 from 'md5';
//import { createUserApiUserPost } from '../../services/wotageipedia/yonghu';
import { ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

import Recaptcha from 'react-recaptcha';
import { useState } from 'react';
import { Button, Checkbox, Input, message } from 'antd';

interface Props {
  onDone: (uuid: string, username: string) => void;
}

export default (props: Props) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [password2, setpassword2] = useState('');
  const [recaptchaLoading, setrecaptchaLoading] = useState(true);
  const [verified, setverified] = useState(false);
  const [usernameStatus, setusernameStatus] = useState(0); // 0: 未检测，1: 请求中，2: 已存在，3: 可使用，4: 长度不合规，5: 字符不合规
  const [termChecked, settermChecked] = useState(false);

  const [recaptchaShowing, setrecaptchaShowing] = useState(true);

  // create a variable to store the component instance
  let recaptchaInstance: any;

  // create a reset function
  const resetRecaptcha = () => {
    recaptchaInstance.reset();
  };

  const onloadCallback = () => {
    setrecaptchaLoading(false);
  };

  /**
   * 用户名是否存在 Username Exists?
   * @param  username
   * @param onDone 完成後的回调
   */
  const usernameExist = async (username: string, onDone?: (res: number) => void) => {
    setusernameStatus(1);
    const res = await isexistUsernameApiUserExistGet({ username });
    if (res?.respCode === 200) {
      setusernameStatus(res?.respData?.exist ? 2 : 3);
      onDone?.(res?.respData?.exist ? 2 : 3);
    }
  };

  const checkPassword = (password: string) => {
    const reg = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
    return reg.test(password);
  };

  const checkUsername = (username: string) => {
    const reg = /^[a-zA-Z0-9_]{2,128}$/;
    return reg.test(username);
  };

  /**
   * 重新载入验证码
   */
  const reloadCaptcha = () => {
    setrecaptchaShowing(false);
    setTimeout(() => {
      setrecaptchaShowing(true);
    }, 500);
  };

  return (
    <>
      <Form layout="vertical">
        <FormItem
          label={
            <p>
              <span>用户ID</span>
              <span style={{ paddingLeft: '10px' }}>
                {(() => {
                  switch (usernameStatus) {
                    case 0:
                      return '';
                    case 1:
                      return '检查用户名中';
                    case 2:
                      return (
                        <span style={{ color: 'red' }}>
                          <ExclamationCircleOutlined />
                          用户名已存在~
                        </span>
                      );
                    case 3:
                      return (
                        <span style={{ color: 'green' }}>
                          <CheckCircleOutlined />
                          可使用
                        </span>
                      );
                    case 4:
                      return (
                        <span style={{ color: 'red' }}>
                          <ExclamationCircleOutlined />
                          长度需要在2-128之间
                        </span>
                      );
                    case 5:
                      return (
                        <span style={{ color: 'red' }}>
                          <ExclamationCircleOutlined />
                          使用了不合规的字符，请使用字母 数字 下划线
                        </span>
                      );
                    default:
                      return '';
                  }
                })()}
              </span>
            </p>
          }
        >
          <Input
            value={username}
            onChange={async e => {
              const usernameValue = e.target.value;
              setusername(usernameValue);
              if (usernameValue.length < 2 || usernameValue.length > 128) {
                setusernameStatus(4);
              } else if (!checkUsername(usernameValue)) {
                setusernameStatus(5);
              } else {
                setusernameStatus(0);
              }
            }}
            onBlur={async () => {
              if (checkUsername(username)) {
                usernameExist(username);
              }
            }}
            placeholder={'2位以上，字母 数字 下划线组合，作为唯一标识'}
            prefix={'@'}
          />
        </FormItem>

        <FormItem
          label={
            <p>
              <span>密码</span>
              <span style={{ paddingLeft: '10px', color: 'red' }}>{password === '' || checkPassword(password) ? '' : '密码需要在6-20位之间，至少使用数字 字母大小写，可用半角符号'}</span>
            </p>
          }
        >
          <Input.Password
            value={password}
            onChange={e => {
              setpassword(e.target.value);
            }}
            placeholder={'6-20位，包含数字、字母大小写、半角符号'}
          />
        </FormItem>

        <FormItem
          label={
            <p>
              <span>再输一遍密码</span>
              {password !== password2 ? <span style={{ color: 'red' }}> * 两次输入的密码不一致</span> : <></>}
            </p>
          }
        >
          <Input.Password
            value={password2}
            onChange={e => {
              setpassword2(e.target.value);
            }}
            placeholder={'密码确认'}
          />
        </FormItem>
      </Form>

      {recaptchaLoading ? (
        <div style={{ display: 'flex' }}>
          <p>验证码加载中，加载不出来请点→</p>
          <button onClick={reloadCaptcha}>刷新</button>
        </div>
      ) : (
        <div>请点击完成验证</div>
      )}

      {recaptchaShowing ? (
        <Recaptcha
          ref={e => {
            recaptchaInstance = e;
          }}
          sitekey="6Ld7BHQcAAAAAIXgLrclWJIj5S2BErHyC_wLUHTK"
          render="explicit"
          verifyCallback={e => {
            //console.log(e);
            setverified(true);
          }}
          onloadCallback={onloadCallback}
          expiredCallback={() => {
            setverified(false);
          }}
          hl="zh-CN"
        />
      ) : (
        <></>
      )}

      <Checkbox
        onChange={e => {
          settermChecked(e.target.checked);
        }}
      >
        同意用户规约
      </Checkbox>

      <Button
        onClick={async () => {
          usernameExist(username, async res => {
            if (res === 3) {
              const registerRes = await createUserApiUserPost({ username, email: '', password: md5(password), nickname: username, gender: 0 });
              if ((registerRes as API.CreateUser201).uid) {
                // 成功
                props.onDone((registerRes as API.CreateUser201).uid as string, username);
              } else {
                // 出错
                message.error(`发送错误！${registerRes.errcode} ${registerRes.error} ${registerRes.message} `);
              }
            } else {
              message.warn('用户名已存在, 请换一个吧');
            }
          });
        }}
        type="primary"
        disabled={!(termChecked && password === password2 && verified && checkPassword(password) && checkUsername(username))}
      >
        注册
      </Button>
    </>
  );
};
