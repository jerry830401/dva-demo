import React from 'react';
import { connect } from "dva";
import router from 'umi/router';
import styles from '../index.css';
import { Form, Input, Button, notification } from 'antd';

const Users = ({ location, dispatch, users, form }) => {

    const { getFieldDecorator, validateFields } = form
    const colSetting = { labelCol: { span: 2 }, wrapperCol: { span: 4 } }

    const handleSubmit = (e) => {

        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                dispatch({ type: 'users/listAdd', payload: { ...values, key: Math.random() } })
            } else {
                openNotification('error', '送出失敗', '尚有必填欄位未填寫')
            }
        });
    }

    const openNotification = (type, title, description) => {
        notification[type]({
            message: title,
            description: description,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    return (
        <div className={styles.normal}>
            <Form
                onSubmit={(e) => handleSubmit(e)}
            >
                <Form.Item label='姓名' {...colSetting}>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '請輸入你的姓名' }],
                    })(
                        <Input
                        />
                    )}
                </Form.Item>
                <Form.Item label='年齡'{...colSetting}>
                    {getFieldDecorator('age', {
                        // rules: [{ required: true, message: 'Please input your password!' }],
                    })(
                        <Input
                        />
                    )}
                </Form.Item>
                <Form.Item label='住址' {...colSetting}>
                    {getFieldDecorator('address', {
                        // rules: [{ required: true, message: 'Please input your password!' }],
                    })(
                        <Input
                        />
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 4, offset: 2 }}>
                    <Button
                        style={{ width: '45%', marginRight: '5%' }}
                        onClick={() => router.push('/users')}
                    >取消</Button>
                    <Button
                        type='primary'
                        style={{ width: '45%', marginLeft: '5%' }}
                        htmlType="submit"
                    >送出</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

const mapStateToProps = (state) => {
    const users = state.users;
    return {
        users
    };
};

export default connect(mapStateToProps)(Form.create({ name: 'users-add' })(Users));