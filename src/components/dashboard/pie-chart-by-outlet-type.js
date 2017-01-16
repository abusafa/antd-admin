import React, {Component} from 'react'
import styles from './pie-chart-by-outlet-type.less'
import {color} from '../../utils'
import {filter, sumBy,find} from 'lodash'
import {PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import numeral from 'numeral';
import { Switch, Select } from 'antd';
const Option = Select.Option;


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


class PieChartByOutletType extends Component {

  constructor(props){
    super();
    this.state={
      inOut: 'in',
      checked: true,
      year: 2010
    }
  }

  changeExportEmport(checked){
    this.setState({
      checked: checked,
      inOut: checked? 'out': 'in',
    });



  }


  render(){
    const { data , title} = this.props
    const {inOut, checked, year} = this.state

    let years = [2010,2011,2012,2013,2014,2015];
    let result = [
      {
        name: 'بري',
        value: sumBy(filter(data, (o)=> o.outlet_type === 'بري' && o.in_out === inOut && o.year === year ), (o)=> o.value)
      },{
        name: 'بحري',
        value: sumBy(filter(data, (o)=> o.outlet_type === 'بحري' && o.in_out === inOut && o.year === year ), (o)=> o.value)
      },{
        name: 'جوي',
        value: sumBy(filter(data, (o)=> o.outlet_type === 'جوي' && o.in_out === inOut && o.year === year ), (o)=> o.value)
      }

    ]




    return (
      <div className={styles.sales}>
        <div className={styles.title}>{title}</div>
        <div style={{position: 'absolute',left: 15,top: 22, zIndex:1000}} >
          <Switch onChange={(checked)=> this.changeExportEmport(checked)} defaultChecked={checked} checkedChildren='واردات' unCheckedChildren='صادرات' />
          <Select defaultValue="2010" style={{ width: 120, margin:8 }} onChange={(value)=>this.handleYearChange(value)}>
              {years.map((value, key)=> <Option key={key} value={`${value}`}>{value}</Option> )}
           </Select>
        </div>

        <ResponsiveContainer minHeight={360}>
          <PieChart width={600} height={400} onMouseEnter={this.onPieEnter}>
            <Pie
              data={result}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              label={({name,value})=> `${name} - ${numeral(value).format('0,0')}`}
            >
            	{
              	result.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} ></Cell>)
              }
            </Pie>

            <Tooltip
              wrapperStyle={{border: 'none', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)'}}
              content={content => {
                const list = result.map((item, key) => <li key={key} className={styles.tipitem}><span className={styles.radiusdot} style={{background: item.color}} />{item.name + ':' + numeral(item.value).format('0,0')}</li>)

                return <div className={styles.tooltip}><p className={styles.tiptitle}>{title}</p> <ul>{list}</ul></div>
              }} />
          </PieChart>

        </ResponsiveContainer>
      </div>
    )
  }

  handleYearChange(value){
    console.log("value", value);
    this.setState({
      year: parseInt(value)
    })

  }

}

export default PieChartByOutletType
