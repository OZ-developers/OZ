import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 16
  }
}
class LoginForm extends Component {
  state = {
    phone: '12',
    password: ''
  }
  onFinish = () => {}
  onFinishFailed = () => {}
  render() {
    
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="手机号"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default LoginForm
