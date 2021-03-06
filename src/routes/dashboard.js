import React, {PropTypes} from 'react'
import {connect} from 'dva'
import {Row, Col, Card} from 'antd'
import NumberCard from '../components/dashboard/numberCard'
import Quote from '../components/dashboard/quote'

import OutletsExportImportChartByOutlet from '../components/dashboard/outlets-export-import-chart-by-outlet'
import OutletsExportImportChartByOutletType from '../components/dashboard/outlets-export-import-chart-by-outlet-type'
import GoodsExportImportChartByGoodsType from '../components/dashboard/goods-export-import-chart-by-goods-type'
import PieChartByOutletType from '../components/dashboard/pie-chart-by-outlet-type'

import Weather from '../components/dashboard/weather'
import Countries from '../components/dashboard/countries'

import TopGoodsTable from '../components/dashboard/top-goods-table'

import styles from './dashboard.less'
import {color} from '../utils'
import lodash, {filter, indexOf} from 'lodash'
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
const center = [-77.01239, 38.91275]

const outletTypeIds = {
  'sea': [
    4, 6
  ],
  'air': [
    16, 21
  ],
  'land': [11, 13]
}

function Dashboard({location, dashboard, dispatch}) {
  const {
    db,
    outlets = {},
    countries = [],
    weather,
    sales,
    quote,
    numbers,
    recentSales,
    comments,
    completed,
    browser,
    cpu,
    user
  } = dashboard

  const outletType = location
    .pathname
    .substr(1)
    .split('/')[1]
  let outletIds = outletType
    ? outletTypeIds[outletType]
    : [
      4,
      6,
      16,
      21,
      11,
      13
    ]
  const outletId = location
    .pathname
    .substr(1)
    .split('/')[2]
  outletIds = outletId
    ? outletId.split(',')
    : [
      4,
      6,
      16,
      21,
      11,
      13
    ]
  outletIds = outletIds.map((item) => parseInt(item))

  let filteredDB = filter(db, (o) => indexOf(outletIds, o.outlet_id) !== -1)
  window.DB = db
  window.filteredDB = filteredDB
  window.lodash = lodash

  const numberCards = numbers.map((item, key) => <NumberCard key={key} {...item}/>)

  return (
    <div>
      <Row gutter={24}>

        <Col lg={16} md={24}>
          <Card bordered={false} bodyStyle={{}}>
            <MapExample features={outlets.features} ids={outletIds}/>
          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <Countries data={countries}/>
          </Card>
        </Col>

      </Row>

      <Row gutter={24}>

        <Col lg={12} md={24}>
          <Card bordered={false} bodyStyle={{
            padding: '24px 36px 24px 0'
          }}>
            <OutletsExportImportChartByOutletType data={filteredDB} title='بحسب نوع المنفذ'/>
          </Card>
        </Col>
        <Col lg={12} md={24}>

          <Card bordered={false} {...bodyStyle}>
            <TopGoodsTable db={filteredDB}/>
          </Card>
        </Col>

      </Row>

      <Row gutter={24}>

        <Col lg={12} md={24}>
          {numberCards}
        </Col>

        <Col lg={12} md={24}>
          <Card bordered={false} bodyStyle={{
            padding: '24px 36px 24px 0'
          }}>
            <PieChartByOutletType data={filteredDB} title='بحسب المنفذ'/>
          </Card>

        </Col>

      </Row>

      <Row gutter={24}>
        <Col lg={24} md={24}>
          <Card bordered={false} bodyStyle={{
            padding: '24px 36px 24px 0'
          }}>
            <GoodsExportImportChartByGoodsType data={filteredDB} select={[
              {
                name: 'ورق',
                id: 48
              }, {
                name: 'قطن',
                id: 52
              }, {
                name: 'سجاد',
                id: 57
              }
            ]} title='بحسب نوع البضاعة'/>
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col lg={18} md={24}>

          <Card bordered={false} bodyStyle={{
            padding: '24px 36px 24px 0'
          }}>
            <OutletsExportImportChartByOutlet data={filteredDB} ids={outletIds} outlets={outlets} select={[
              {
                name: "ميناء صلالة التجاري",
                id: 4
              }, {
                name: "ميناء السلطان قابوس",
                id: 6
              }, {
                name: "مركز شرطة الوجاجة",
                id: 13
              }
            ]} title='بحسب المنفذ'/>
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
                <Weather {...weather}/>
              </Card>
            </Col>
            <Col lg={24} md={12}>
              <Card bordered={false} className={styles.quote} bodyStyle={{
                padding: 0,
                height: 204,
                background: color.peach
              }}>
                <Quote {...quote}/>
              </Card>
            </Col>
          </Row>
        </Col>

      </Row>
    </div>

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
