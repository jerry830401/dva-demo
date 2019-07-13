import Link from 'umi/link';
import styles from './index.css';
import { connect } from "dva";
import { Layout, Menu, Button, Dropdown } from 'antd';


function BasicLayout({ children, location, global, dispatch }) {

  const { Sider, Header, Content } = Layout;
  const siderItems = [
    { name: 'Home', path: '/' },
    { name: 'Users', path: '/users' }
  ];
  const userItem = (
    <Menu>
      <Menu.Item key="0">
        <Button onClick={() => dispatch({ type: 'global/logout' })}>logout</Button>
      </Menu.Item>
    </Menu>
  )
  const siderControl = () => {
    dispatch({ type: 'global/save', payload: { siderOpen: !global.siderOpen } })
  }

  
  console.log('/'+location.pathname.split("/")[1]);

  if (location.pathname === '/login') {
    return <div>{children}</div>
  }
  else {
    return (
      <div className={styles.normal}>
        <Layout className={styles.layout}>
          <Sider
            className={styles.sider}
            trigger={null}
            collapsedWidth={0}
            collapsed={document.body.clientWidth > 480 ? false : global.siderOpen}
          >
            <Menu
              mode="inline"
              selectedKeys={['/'+location.pathname.split("/")[1]]}
              style={{ height: '100%', borderRight: 0 }}
            >
              {siderItems.map((item) =>
                <Menu.Item key={item.path} onClick={()=> document.body.clientWidth > 480 ? null : siderControl() }>
                  <Link to={item.path}>{item.name}</Link>
                </Menu.Item>
              )}
            </Menu>
          </Sider>
          <Layout>
            <Header className={styles.title}>
              <Button
                icon={global.siderOpen ? 'menu-unfold' : 'menu-fold'}
                style={{
                  float: 'left',
                  margin: '1rem 0 1rem 0',
                  display: document.body.clientWidth > 480 ? 'none' : 'block',
                  backgroundColor: 'darkslateblue',
                  color: 'white',
                  border: 0,
                  fontSize: '1.5rem'
                }}
                onClick={() => siderControl()}
              />
              <span>Demo</span>
              <Dropdown
                overlay={userItem}
                trigger={['click']}>
                <Button
                  icon='user'
                  style={{
                    float: 'right',
                    margin: '1rem 0 1rem 0',
                    backgroundColor: 'darkslateblue',
                    color: 'white',
                    border: 0,
                    fontSize: '1.5rem'
                  }}
                ></Button>
              </Dropdown>

            </Header>
            <Content>
              {children}
              {/* <Footer className={styles.footer}>Footer</Footer> */}
            </Content>

          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const global = state.global;
  return {
    global
  };
};

export default connect(mapStateToProps)(BasicLayout);
