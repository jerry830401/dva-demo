import Link from 'umi/link';
import styles from './index.css';
import { Layout, Menu } from 'antd';


function BasicLayout(props) {

  const { Sider, Header, Content, Footer } = Layout;
  const siderItems = [
    { name: 'Home', path: '/' },
    { name: 'Users', path: '/users' }
  ];

  return (
    <div className={styles.normal}>
      <Layout className={styles.layout}>
        <Sider 
          className={styles.sider}
          breakpoint='xs'
          collapsedWidth={0}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['/']}
            selectedKeys={[props.location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
          >
            {siderItems.map((item) => <Menu.Item key={item.path}><Link to={item.path}>{item.name}</Link></Menu.Item>)}
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.title}><h1 >reactJs+dva+umi+antd</h1></Header>
          <Content>
            {props.children}
            {/* <Footer className={styles.footer}>Footer</Footer> */}
          </Content>

        </Layout>
      </Layout>
    </div>
  );
}

export default BasicLayout;
