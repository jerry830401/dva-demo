import Link from 'umi/link';
import styles from './index.css';
import { connect } from "dva";
import { Layout, Menu, Button } from 'antd';


function BasicLayout({ children, location, global, dispatch }) {

  const { Sider, Header, Content, Footer } = Layout;
  const siderItems = [
    { name: 'Home', path: '/' },
    { name: 'Users', path: '/users' }
  ];


  const siderControl = () => {
    dispatch({ type: 'global/save', payload: { siderOpen: !global.siderOpen } })
  }


  return (
    <div className={styles.normal}>
      <Layout className={styles.layout}>
        <Sider
          className={styles.sider}
          trigger={null}
          collapsedWidth={0}
          collapsed={global.siderOpen}
        >
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
          >
            {siderItems.map((item) => <Menu.Item key={item.path}><Link to={item.path}>{item.name}</Link></Menu.Item>)}
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.title}>
            <Button
              icon={global.siderOpen ? 'menu-unfold': 'menu-fold'} 
              style={{
                float: 'left',
                margin: '1rem 0 1rem 0',
                display: document.body.clientWidth > 480 ? 'none' : 'block',
                backgroundColor:'darkslateblue',
                color:'white',
                border:0,
                fontSize:'1.5rem'
              }}
              onClick={() => siderControl()}
            />
            <span>Demo</span>
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

const mapStateToProps = (state) => {
  console.log(state)
  const global = state.global;
  console.log(global)
  return {
    global
  };
};

export default connect(mapStateToProps)(BasicLayout);
