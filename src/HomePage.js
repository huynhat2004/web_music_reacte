import React from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import styled from 'styled-components';

const StylesTest = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

`;
const HomePage = () => {
    const onFinish = (values) => {
        const navigator = useNavigate();
        if (values.username == 'admin'&& values.password == 'anqq') {
            navigator('web_music/playing')
            return console.log('Đăng nhập thành công!!!')
        } else {
            return console.log('M bị ngu à ?')
        }
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{
            width: '100vw', height: '100vh',
            backgroundImage: `url(https://img.freepik.com/premium-photo/image-planet-outer-space-mixed-media-elements-image-furnished-by-nasa_641298-3434.jpg?w=2000)`
        }}>
            <StylesTest
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}

                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </StylesTest>
        </div>
    );
};
export default HomePage;
