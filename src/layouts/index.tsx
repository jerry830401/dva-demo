import React from 'react';
import Link from 'umi/link';
import styles from './index.css';
import { Layout, Menu } from 'antd';

const BasicLayout: React.FC = props => {

  const { Sider, Header, Content, Footer } = Layout;
  const siderItems = [
    { name: 'Home', path: '/' },
    { name: 'Users', path: '/users' }
  ];

  return (
    <div className={styles.normal}>
      <Layout className={styles.layout}>
        <Sider className={styles.sider}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['/']}
            // defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {siderItems.map((item) => <Menu.Item key={item.path}><Link to={item.path}>{item.name}</Link></Menu.Item>)}
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.title}><h1 >Yay! Welcome to umi yee!</h1></Header>
          <Content>
            {props.children}
            <Footer className={styles.footer}>Footer</Footer>
          </Content>

        </Layout>
      </Layout>
    </div>
  );
};

export default BasicLayout;
