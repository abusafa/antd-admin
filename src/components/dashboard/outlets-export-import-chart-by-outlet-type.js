import React, {Component} from 'react'
import styles from './outlets-export-import-chart-by-outlet-type.less'
import {color} from '../../utils'
import {filter, sumBy,find} from 'lodash'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import numeral from 'numeral';
import {Switch} from 'antd';

class OutletsExportImportChartByOutletType extends Component {

  constructor(props){
    super();
    this.state={
      inOut: 'in',
      checked: true,
    }
  }

  changeExportEmport(checked){
    console.log("checked", checked);
    this.setState({
      checked: checked,
      inOut: checked? 'out': 'in',
    });



  }


  render(){
    const { data , title} = this.props
    const {inOut, checked} = this.state


    let years = [2010,2011,2012,2013,2014,2015,2016];
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
        <Switch style={{float: 'right'}} onChange={(checked)=> this.changeExportEmport(checked)} defaultChecked={checked} checkedChildren='واردات' unCheckedChildren='صادرات' />

        <div className={styles.title}>{title}</div>
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
                const list = content.payload.map((item, key) => <li key={key} className={styles.tipitem}><span className={styles.radiusdot} style={{background: item.color}} />{item.name + ':' + numeral(item.value).format('0,0')}</li>)
                return <div className={styles.tooltip}><p className={styles.tiptitle}>{content.label}</p><ul>{list}</ul></div>
              }} />
            <Line type='monotone' dataKey='بري' stroke={color.purple} strokeWidth={3} dot={{fill: color.purple}} activeDot={{r: 5, strokeWidth: 0}} />
            <Line type='monotone' dataKey='بحري' stroke={color.red} strokeWidth={3} dot={{fill: color.red}} activeDot={{r: 5, strokeWidth: 0}} />
            <Line type='monotone' dataKey='جوي' stroke={color.green} strokeWidth={3} dot={{fill: color.green}} activeDot={{r: 5, strokeWidth: 0}} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

}

export default OutletsExportImportChartByOutletType
