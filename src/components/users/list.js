import React, { PropTypes } from 'react'
import { Table, Popconfirm } from 'antd'
import styles from './list.less'

function list ({
  loading,
  dataSource,
  pagination,
  onPageChange,
  onDeleteItem,
  onEditItem
}) {
  const columns = [
    {
      title: 'صورة',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: (text) => <img width={24} src={text} />
    }, {
      title: 'الاسم',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'الاسم المستعار',
      dataIndex: 'nickName',
      key: 'nickName'
    }, {
      title: 'العمر',
      dataIndex: 'age',
      key: 'age',
      render: (text) => <span>{text}سنة</span>
    }, {
      title: 'الجنس',
      dataIndex: 'isMale',
      key: 'isMale',
      render: (text) => <span>{text
            ? 'ذكر'
            : 'إنثى'}</span>
    }, {
      title: 'الهاتف',
      dataIndex: 'phone',
      key: 'phone'
    }, {
      title: 'البريد الإلكتروني',
      dataIndex: 'email',
      key: 'email'
    }, {
      title: 'العنوان',
      dataIndex: 'address',
      key: 'address'
    }, {
      title: 'تاريخ الإضافة',
      dataIndex: 'createTime',
      key: 'createTime'
    }, {
      title: 'مهام',
      key: 'operation',
      width: 100,
      render: (text, record) => (
        <p>
          <a onClick={() => onEditItem(record)} style={{
            marginLeft: 10
          }}>تعديل</a>
          <Popconfirm title='هل إنت متأكد؟' onConfirm={() => onDeleteItem(record.id)}>
            <a>حذف</a>
          </Popconfirm>
        </p>
      )
    }
  ]

  return (
    <div>
      <Table
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        onChange={onPageChange}
        pagination={pagination}
        simple
        rowKey={record => record.id}
      />
    </div>
  )
}

list.propTypes = {
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  dataSource: PropTypes.array,
  loading: PropTypes.any,
  pagination: PropTypes.any
}

export default list
