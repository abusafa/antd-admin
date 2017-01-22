import React, {Component,  PropTypes } from 'react'
import { Table, Tag, Select,Switch } from 'antd'
import styles from './top-goods-table.less'
import { color } from '../../utils'
import {orderBy, filter} from 'lodash'
import numeral from 'numeral';

const Option = Select.Option;

const status = {
  'out': {
    color: color.grey
  },
  'in': {
    color: color.blue
  }
}

class TopGoodsTable extends Component{

  constructor(props){
    super();
    this.state={
      inOut: 'out',
      checked: false,
      year: 2010
    }
  }

  changeExportEmport(checked){
    this.setState({
      checked: checked,
      inOut: checked? 'in': 'out',
    });
  }

  handleYearChange(value){
    this.setState({
      year: parseInt(value)
    })
  }


  render(){

    const {db, portId} = this.props;
    let years = [2010,2011,2012,2013,2014,2015];

    const {inOut, checked, year} = this.state


    const columns = [
      {
        title: 'name',
        dataIndex: 'key_indicator_ar',
        className: styles.name
      }, {
        title: 'percent',
        dataIndex: 'value',
        className: styles.percent,
        render: (text, it) => <Tag style={{width:100, textAlign:'center'}} color={status[it.in_out].color}>{numeral(text).format('0,0')}</Tag>
      }
    ]

    let data = filter(
      filter(
        orderBy(
          db,
          ['value'],['desc']
        ),
      portId ? {year:year, in_out:inOut, outlet_id:portId}:{year:year, in_out:inOut}
      ),
      function(f, index) { return index < 5}
    );


    return (
      <div>
        <table style={{width:'100%'}}>
          <tbody>
          <tr>
            <td>
              <h3 style={{marginLeft:20}}>أعلى خمسة منتجات</h3>
            </td>
            <td style={{textAlign:'left'}}>
              <Switch onChange={(checked)=> this.changeExportEmport(checked)} defaultChecked={checked} checkedChildren='واردات' unCheckedChildren='صادرات' />
              <Select defaultValue="2010" style={{ width: 120, margin:8 }} onChange={(value)=>this.handleYearChange(value)}>
                  {years.map((value, key)=> <Option key={key} value={`${value}`}>{value}</Option> )}
               </Select>
            </td>
          </tr>
        </tbody>
        </table>


        <Table pagination={false} showHeader={false} columns={columns} key={(record, key) => key} dataSource={data} />
      </div>
    )
  }
}

TopGoodsTable.propTypes = {
  props: PropTypes.object
}

export default TopGoodsTable
