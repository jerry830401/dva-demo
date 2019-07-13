import React from 'react';
import { connect } from "dva";
import { Card, Form, Input, Icon, Button, notification } from 'antd';

const Login = ({ location, dispatch, global, form }) => {

    // console.log(global)

    const { getFieldDecorator, validateFields } = form

    const handleSubmit = (e) => {

        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if (values.username === 'user' && values.password === '123456') {
                    dispatch({ type: 'global/login' })
                    openNotification('success', '登入成功', '')
                }
                else {
                    openNotification('error', '登入失敗', '請確認使用者名稱或密碼是否錯誤')
                }
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
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}
        >
            <Card
                title="使用者登入"
                style={{ width: 300 }}
            >
                <Form
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                addonBefore={<Icon type="user" />}
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your password!' }],
                        })(
                            <Input
                                addonBefore={<Icon type="lock" />}
                                type="password"
                            />
                        )}
                    </Form.Item>
                    <Button
                        type='primary'
                        style={{ width: '100%' }}
                        htmlType="submit"
                    >log in</Button>
                </Form>
            </Card>
        </div>
    );
}

const mapStateToProps = (state) => {
    const global = state.global;
    return {
        global
    };
};

export default connect(mapStateToProps)(Form.create({ name: 'login-Form' })(Login));