import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import { Button } from 'antd';

import { navs } from './config';
import styles from './index.module.scss';
import Login from 'components/login';

const Navbar: NextPage = () => {
  const { pathname } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleGoToEditorPage = () => {};

  const handleLogin = () => {
    setIsShowLogin(true);
  };

  const handleClose = () => {
    setIsShowLogin(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoArea}>BLOC-C</div>
      <div className={styles.linkArea}>
        {navs?.map((nav) => {
          return (
            <Link key={nav?.label} href={nav?.value}>
              <a className={pathname === nav?.value ? styles.active : ''}>
                {nav?.label}
              </a>
            </Link>
          );
        })}
      </div>
      <div className={styles.operationArea}>
        <Button onClick={() => handleGoToEditorPage()}>写文章</Button>
        <Button type="primary" onClick={handleLogin}>
          登录
        </Button>
      </div>
      <Login isShowLogin={isShowLogin} onClose={handleClose} />
    </div>
  );
};

export default Navbar;
