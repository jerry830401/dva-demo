import React from 'react';
import { connect } from "dva";
import styles from '../index.css';
import { Table } from 'antd';

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
            <Table
                dataSource={users.list}
                columns={columns}
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