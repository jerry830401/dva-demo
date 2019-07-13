import React from 'react';
import { connect } from "dva";
import router from 'umi/router';
import styles from '../index.css';
import { Table, Button } from 'antd';

const Users = ({ location, dispatch, users }) => {

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年齡',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  console.log(users)
  return (
    <div className={styles.normal}>
      <Button
        icon='plus'
        type='primary'
        style={{
          float: 'left',
          zIndex: 1000,
          margin: 5
        }}
        onClick={() => router.push('users/add')}
      >新增</Button>
      <Table
        dataSource={users.list}
        columns={columns}
        style={{
          margin: 5
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  const users = state.users;
  return {
    users
  };
};

export default connect(mapStateToProps)(Users);