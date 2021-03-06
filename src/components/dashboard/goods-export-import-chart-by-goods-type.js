import React, {Component} from 'react'
import styles from './goods-export-import-chart-by-goods-type.less'
import {color} from '../../utils'
import {filter, sumBy,find} from 'lodash'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import numeral from 'numeral';
import {Switch} from 'antd';

class GoodsExportImportChartByGoodsType extends Component {

  constructor(props){
    super();
    this.state={
      inOut: 'out',
      checked: false,
    }
  }

  changeExportEmport(checked){
    this.setState({
      checked: checked,
      inOut: checked? 'in': 'out',
    });



  }


  render(){
    const { data, select, title } = this.props
    const {inOut, checked} = this.state


    let years = [2010,2011,2012,2013,2014,2015];
    let chartData = years.map((year)=>{
      let result = {
        [select[0].name]: sumBy(filter(data, (o)=> o.key_indicator_id === select[0].id && o.in_out === inOut && o.year === year ), (o)=> o.value),
        [select[1].name]: sumBy(filter(data, (o)=> o.key_indicator_id === select[1].id && o.in_out === inOut && o.year === year ), (o)=> o.value),
        [select[2].name]: sumBy(filter(data, (o)=> o.key_indicator_id === select[2].id && o.in_out === inOut && o.year === year ), (o)=> o.value),
        year:year
      }
      return result
    })


    return (
      <div className={styles.sales}>

        <table style={{width:'100%'}}>
          <tbody>
          <tr>
            <td>
              <div className={styles.title}>{title}</div>
            </td>
            <td style={{textAlign:'left', paddingLeft:20}}>
              <Switch onChange={(checked)=> this.changeExportEmport(checked)} defaultChecked={checked} checkedChildren='واردات' unCheckedChildren='صادرات' />

            </td>
          </tr>
        </tbody>
        </table>

        <ResponsiveContainer minHeight={360}>
          <LineChart data={chartData}>
            <Legend verticalAlign='top'
              content={props => {
                const { payload } = props
                return <ul className={styles.legend + ' clearfix'}>
                  {payload.map((item, key) => <li key={key}><span className={styles.radiusdot} style={{background: item.color}} />{item.value}</li>) }
                </ul>
              }} />
            <XAxis dataKey='year' axisLine={{stroke: color.borderBase, strokeWidth: 1}} tickLine={false} />
            <YAxis width={100} axisLine={false} tickLine={false} />
            <CartesianGrid vertical={false} stroke={color.borderBase} strokeDasharray='3 3' />
            <Tooltip
              wrapperStyle={{border: 'none', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)'}}
              content={content => {
                const list = content.payload.map((item, key) => <li key={key} className={styles.tipitem}><span className={styles.radiusdot} style={{background: item.color}} />{item.name + ' : ' + numeral(item.value).format('0,0')}</li>)
                return <div className={styles.tooltip}><p className={styles.tiptitle}>{content.label}</p><ul>{list}</ul></div>
              }} />
            <Line type='monotone' dataKey={select[0].name} stroke={color.purple} strokeWidth={3} dot={{fill: color.purple}} activeDot={{r: 5, strokeWidth: 0}} />
            <Line type='monotone' dataKey={select[1].name} stroke={color.red} strokeWidth={3} dot={{fill: color.red}} activeDot={{r: 5, strokeWidth: 0}} />
            <Line type='monotone' dataKey={select[2].name} stroke={color.green} strokeWidth={3} dot={{fill: color.green}} activeDot={{r: 5, strokeWidth: 0}} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

}

export default GoodsExportImportChartByGoodsType
