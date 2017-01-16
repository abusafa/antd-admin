import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal } from 'antd'
const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

const modal = ({
  visible,
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {
  function handleOk () {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: 'تعديل المستخدم',
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='الاسم الكامل：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: 'الاسم مفقود'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='اللقب:' hasFeedback {...formItemLayout}>
          {getFieldDecorator('nickName', {
            initialValue: item.nickName,
            rules: [
              {
                required: true,
                message: 'اللقب مفقود'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='الجنس' hasFeedback {...formItemLayout}>
          {getFieldDecorator('isMale', {
            initialValue: item.isMale,
            rules: [
              {
                required: true,
                type: 'boolean',
                message: 'يرجى تحديد الجنس'
              }
            ]
          })(
            <Radio.Group>
              <Radio value>ذكر</Radio>
              <Radio value={false}>أنثى</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label='العمر:' hasFeedback {...formItemLayout}>
          {getFieldDecorator('age', {
            initialValue: item.age,
            rules: [
              {
                required: true,
                type: 'number',
                message: 'العمر مفقود'
              }
            ]
          })(<InputNumber min={18} max={100} />)}
        </FormItem>
        <FormItem label='الهاتف:' hasFeedback {...formItemLayout}>
          {getFieldDecorator('phone', {
            initialValue: item.phone,
            rules: [
              {
                required: true,
                message: 'لا يمكن أن تكون فارغة'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='البريد الإلكتروني:' hasFeedback {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: item.email,
            rules: [
              {
                required: true,
                message: 'لا يمكن أن تكون فارغة'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='العنوان:' hasFeedback {...formItemLayout}>
          {getFieldDecorator('address', {
            initialValue: item.address,
            rules: [
              {
                required: true,
                message: 'لا يمكن أن تكون فارغة'
              }
            ]
          })(<Input />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
}

export default Form.create()(modal)
