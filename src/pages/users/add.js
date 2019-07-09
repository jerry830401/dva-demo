import React from 'react';
import { connect } from "dva";
import styles from '../index.css';
import {  } from 'antd';

const Users = ({ location, dispatch, users }) => {
    
    console.log(users)
    return (
        <div className={styles.normal}>
           
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