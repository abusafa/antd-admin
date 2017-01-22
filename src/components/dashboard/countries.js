import React from 'react'
import { Table, Tag } from 'antd'
import styles from './countries.less'
import { color } from '../../utils'
import numeral from 'numeral';

const status = {
  1: {
    color: color.green,
    text: 'APPROVED'
  },
  2: {
    color: color.yellow,
    text: 'PENDING'
  },
  3: {
    color: color.red,
    text: 'REJECTED'
  }
}

function Countries (props) {
  const columns = [
    {
      title: 'avatar',
      dataIndex: 'avatar',
      width: 48,
      className: styles.avatarcolumn,
      render: (text, it) => <img style={{width:50}} src={require(`../../flags/4x3/${it.flag}.svg`)} />
    }, {
      title: 'content',
      dataIndex: 'content',
      render: (text, it) => <div>
        <h5 className={styles.name}>{it.name}</h5>
        <p className={styles.content}>{numeral(it.value).format('0,0')}</p>
      </div>
    }
  ]
  return (
    <div className={styles.comments}>
      <Table pagination={false} showHeader={false} columns={columns} key={(record, key) => key} dataSource={props.data.filter((item, key) => key < 6)} />
    </div>
  )
}

export default Countries
