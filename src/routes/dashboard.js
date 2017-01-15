import React, {PropTypes} from 'react'
import {connect} from 'dva'
import {Row, Col, Card} from 'antd'
import NumberCard from '../components/dashboard/numberCard'
import Quote from '../components/dashboard/quote'
import Sales from '../components/dashboard/sales'
import OutletsExportImportChartByOutlet from '../components/dashboard/outlets-export-import-chart-by-outlet'
import OutletsExportImportChartByOutletType from '../components/dashboard/outlets-export-import-chart-by-outlet-type'
import GoodsExportImportChartByGoodsType from '../components/dashboard/goods-export-import-chart-by-goods-type'
import PieChartByOutletType from '../components/dashboard/pie-chart-by-outlet-type'

import Weather from '../components/dashboard/weather'
import RecentSales from '../components/dashboard/recentSales'
import Comments from '../components/dashboard/comments'
import Countries from '../components/dashboard/countries'

import Completed from '../components/dashboard/completed'
import Browser from '../components/dashboard/browser'
import Cpu from '../components/dashboard/cpu'
import User from '../components/dashboard/user'
import styles from './dashboard.less'
import {color} from '../utils'

import geojson from "./geojson.json";
import MapExample from '../components/dashboard/map-example'

import om from '../flags/4x3/om.svg';
const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff'
  }
}


const accessToken = 'pk.eyJ1IjoiaWhhYiIsImEiOiJZT19QbkJJIn0.ROWLhlTd-2mI94QvdzrH8g';
const center = [ -77.01239, 38.91275 ]


function Dashboard ({dashboard, dispatch}) {
  const {db, outlets, countries=[], weather, sales, quote, numbers, recentSales, comments, completed, browser, cpu, user} = dashboard
  console.log("outlets", outlets);

  const numberCards = numbers.map((item, key) => <Col key={key} lg={6} md={12}>
    <NumberCard {...item} />
  </Col>)

  return (
    <Row gutter={24}>


      <Col lg={12} md={24}>
        <Card bordered={false} {...bodyStyle}>
          <RecentSales data={recentSales} />
        </Card>
      </Col>
      <Col lg={12} md={24}>


        <Card bordered={false} {...bodyStyle}>
          <Countries data={countries} />
        </Card>
      </Col>

      {numberCards}
      <Col lg={18} md={24}>

        {/* <img src={om} style={{width:100}}/> */}


        {/*
        <Card bordered={false} bodyStyle={{
          padding: '24px 36px 24px 0'
        }}>
          <Sales data={sales} />
        </Card>
        */}

        <Card bordered={false} bodyStyle={{
          padding: '24px 36px 24px 0'
        }}>
          <PieChartByOutletType
            data={db}
            title='بحسب المنفذ'
          />
        </Card>

        <Card bordered={false} bodyStyle={{
          padding: '24px 36px 24px 0'
        }}>
          <GoodsExportImportChartByGoodsType
            data={db}
            select={[{name:'ورق',id:48}, {name:'قطن',id:52}, {name:'سجاد',id:57}]}
            title='بحسب نوع البضاعة'
          />
        </Card>


        <Card bordered={false} bodyStyle={{
          padding: '24px 36px 24px 0'
        }}>
          <OutletsExportImportChartByOutlet
            data={db}
            select={[{name:"ميناء صلالة التجاري", id:4},{name:"ميناء السلطان قابوس", id:6}, {name:"مركز شرطة الوجاجة", id:13}]}
            title='بحسب المنفذ'
          />
        </Card>

        <Card bordered={false} bodyStyle={{
          padding: '24px 36px 24px 0'
        }}>
          <OutletsExportImportChartByOutletType
            data={db}
            title='بحسب نوع المنفذ'
          />
        </Card>


        <Card bordered={false} bodyStyle={{

        }}>
          <MapExample />

        </Card>


      </Col>
      <Col lg={6} md={24}>
        <Row gutter={24}>
          <Col lg={24} md={12}>
            <Card bordered={false} className={styles.weather} bodyStyle={{
              padding: 0,
              height: 204,
              background: color.blue
            }}>
              <Weather {...weather} />
            </Card>
          </Col>
          <Col lg={24} md={12}>
            <Card bordered={false} className={styles.quote} bodyStyle={{
              padding: 0,
              height: 204,
              background: color.peach
            }}>
              <Quote {...quote} />
            </Card>
          </Col>
        </Row>
      </Col>
      <Col lg={12} md={24}>
        <Card bordered={false} {...bodyStyle}>
          <RecentSales data={recentSales} />
        </Card>
      </Col>
      <Col lg={12} md={24}>
        <Card bordered={false} {...bodyStyle}>
          <Comments data={comments} />
        </Card>


      </Col>
      <Col lg={24} md={24}>
        <Card bordered={false} bodyStyle={{
          padding: '24px 36px 24px 0'
        }}>
          <Completed data={completed} />
        </Card>
      </Col>
      <Col lg={8} md={24}>
        <Card bordered={false} {...bodyStyle}>
          <Browser data={browser} />
        </Card>
      </Col>
      <Col lg={8} md={24}>
        <Card bordered={false} {...bodyStyle}>
          <Cpu {...cpu} />
        </Card>
      </Col>
      <Col lg={8} md={24}>
        <Card bordered={false} bodyStyle={{...bodyStyle.bodyStyle, padding: 0}}>
          <User {...user} />
        </Card>
      </Col>
    </Row>
  )
}

Dashboard.propTypes = {
  weather: PropTypes.object,
  sales: PropTypes.array,
  outlets: PropTypes.array,
  quote: PropTypes.object,
  numbers: PropTypes.array,
  recentSales: PropTypes.array,
  comments: PropTypes.array,
  completed: PropTypes.array,
  browser: PropTypes.array,
  cpu: PropTypes.object,
  user: PropTypes.object
}

export default connect(({dashboard}) => ({dashboard}))(Dashboard)
