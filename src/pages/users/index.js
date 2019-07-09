import React from 'react';
import router from 'umi/router';
import { connect } from "dva";
import styles from '../index.css';

const Users = ({ location, dispatch, users }) => {

    const saveText = () => {
        dispatch({ type: 'users/save', payload: { text: '123' } })
    }

    console.log(users)
    return (
        <div className={styles.normal}>
            <h1>Page index</h1>
            <button onClick={() => saveText()}>go back</button>
            <span>{users.text}</span>
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