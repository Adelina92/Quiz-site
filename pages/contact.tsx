import type { NextPage } from 'next'
import { CommonUILayout } from '../components/layouts/CommonUILayout';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const onFinish = (values: any) => {
  console.log(values);
};

const Contact: NextPage = () => {
  return (
      <CommonUILayout>
      <Form {...layout}>
      <Form.Item name={['user', 'name']} label="Name" children={<Input />}/>
      <Form.Item name={['user', 'email']} label="Email">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </CommonUILayout>
  )
}

export default Contact