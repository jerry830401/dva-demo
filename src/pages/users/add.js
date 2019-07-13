import React from 'react';
import { connect } from "dva";
import router from 'umi/router';
import styles from '../index.css';
import { Form, Input, Icon, Button, Row, Col } from 'antd';

const Users = ({ location, dispatch, users, form }) => {

    const { getFieldDecorator, validateFields } = form
    const colSetting = { labelCol: { span: 2 }, wrapperCol: { span: 4 } }

    const handleSubmit = () => {

    }

    console.log(users)
    return (
        <div className={styles.normal}>
            <Form
                onSubmit={(e) => handleSubmit(e)}
            >
                <Form.Item label='姓名' {...colSetting}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                        />
                    )}
                </Form.Item>
                <Form.Item label='年齡'{...colSetting}>
                    {getFieldDecorator('password', {
                        // rules: [{ required: true, message: 'Please input your password!' }],
                    })(
                        <Input
                        />
                    )}
                </Form.Item>
                <Form.Item label='住址' {...colSetting}>
                    {getFieldDecorator('password', {
                        // rules: [{ required: true, message: 'Please input your password!' }],
                    })(
                        <Input
                        />
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 4, offset: 2 }}>
                    <Button
                        style={{ width: '45%', marginRight:'5%'  }}
                        onClick={() => router.push('/users')}
                    >取消</Button>
                    <Button
                        type='primary'
                        style={{ width: '45%', marginLeft:'5%' }}
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