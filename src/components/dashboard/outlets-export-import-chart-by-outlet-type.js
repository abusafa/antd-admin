import React, {Component} from 'react'
import styles from './outlets-export-import-chart-by-outlet-type.less'
import {color} from '../../utils'
import {filter, sumBy,find} from 'lodash'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import numeral from 'numeral';
import {Switch} from 'antd';

class OutletsExportImportChartByOutletType extends Component {

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
    const { data , title} = this.props
    const {inOut, checked} = this.state


    let years = [2010,2011,2012,2013,2014,2015];
    let chartData = years.map((year)=>{
      let result = {
        'بري': sumBy(filter(data, (o)=> o.outlet_type === 'بري' && o.in_out === inOut && o.year === year ), (o)=> o.value),
        'بحري': sumBy(filter(data, (o)=> o.outlet_type === 'بحري' && o.in_out === inOut && o.year === year ), (o)=> o.value),
        'جوي': sumBy(filter(data, (o)=> o.outlet_type === 'جوي' && o.in_out === inOut && o.year === year ), (o)=> o.value),
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
          <AreaChart data={chartData}>
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
                const list = content.payload.map((item, key) => <li key={key} className={styles.tipitem}><span className={styles.radiusdot} style={{background: item.color}} />{item.name + ':' + numeral(item.value).format('0,0')}</li>)
                return <div className={styles.tooltip}><p className={styles.tiptitle}>{content.label}</p><ul>{list}</ul></div>
              }} />
            <Area type='monotone' dataKey='بري' stroke={color.grass} fill={color.grass} strokeWidth={2} dot={{fill: '#fff'}} activeDot={{r: 5, fill: '#fff', stroke: color.green}} />
            <Area type='monotone' dataKey='بحري' stroke={color.sky} fill={color.sky} strokeWidth={2} dot={{fill: '#fff'}} activeDot={{r: 5, fill: '#fff', stroke: color.green}} />
            <Area type='monotone' dataKey='جوي' stroke={color.yellow} fill={color.yellow} strokeWidth={2} dot={{fill: '#fff'}} activeDot={{r: 5, fill: '#fff', stroke: color.green}} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }

}

export default OutletsExportImportChartByOutletType
