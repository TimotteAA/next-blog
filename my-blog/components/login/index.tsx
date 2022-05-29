import { useState } from 'react';
import { message } from 'antd';

import styles from './index.module.scss';
import Countdown from 'components/countdown';
import request from 'service/fetch';

interface IProps {
  isShowLogin: boolean;
  onClose: Function;
}

// 倒计时组件
// 点击获取验证码，获取验证码小时，开始倒计时，倒计时结束，获取验证码重新出现

const Login = (props: IProps) => {
  const { isShowLogin } = props;
  const [isShowVerifyCode, setIsShowVerifyCode] = useState(false);
  const [form, setForm] = useState({
    phone: '',
    verify: '',
  });
  const handleClose = () => {};

  const handleGetVerifyCode = () => {
    // setIsShowVerifyCode(true);
    if (!form?.phone) {
      message.warning('请输入手机号');
      return;
    }

    request.post('/api/user/sendVerifyCode');
  };

  const handleLogin = () => {};

  const handleOAuthGithub = () => {};

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 倒计时结束
  const handleCountDownEnd = () => {
    setIsShowVerifyCode(false);
  };

  return isShowLogin ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>
          <div>手机号登录</div>
          <div className={styles.close} onClick={handleClose}>
            x
          </div>
        </div>
        <input
          type="text"
          name="phone"
          placeholder="请输入手机号"
          value={form.phone}
          onChange={handleFormChange}
        />
        <div className={styles.verifyCodeArea}>
          <input
            type="text"
            name="verify"
            placeholder="请输入验证码"
            value={form.verify}
            onChange={handleFormChange}
          />
          <span className={styles.verifyCode} onClick={handleGetVerifyCode}>
            {isShowVerifyCode ? (
              <Countdown time={10} onEnd={handleCountDownEnd} />
            ) : (
              '获取验证码'
            )}
          </span>
        </div>
        <div className={styles.loginBtn} onClick={handleLogin}>
          登录
        </div>
        <div className={styles.otherLogin} onClick={handleOAuthGithub}>
          使用Github登录
        </div>
        <div className={styles.loginPrivacy}>
          注册登录即表示同意
          <a href="https://www.baidu.com" target="_blank" rel="noopener">
            隐私政策
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
