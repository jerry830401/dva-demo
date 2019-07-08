import React from 'react';
import Link from 'umi/link';
import styles from './index.css';
import { Button } from 'antd';


export default function () {

  const pageName = 'yee';

  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <div className={styles.welcome} />
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started YEE
          </a>
        </li>
        <Button type='primary'><Link to="/users">go to /users</Link></Button>
      </ul>
    </div>
  );
}
